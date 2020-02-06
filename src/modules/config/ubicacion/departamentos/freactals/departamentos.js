import { provideState, update } from "freactal";
import { axios } from '../../../../../utils/axios'
import produce from 'immer'

function initialState() {
  return {
    countries: [],
    departments: [],
    department: {}
  }
}

export default provideState({
  initialState,
  effects: {


    setAll: update((_, departments) => ({ departments })),

    setAllCountries: update((_, countries ) => ({ countries })),

    setSingle: update((_, department) => ({ department })),

    deleteFromState: update((state, id) => (
      produce(state, draft => {
        const index = draft.departments.findIndex(({ _id }) => _id === id)
        draft.departments.splice(index, 1)
      })
    )),

    async deleteSingle(effects, id) {
      axios.delete(`/departments/${id}`)
      effects.deleteFromState(id)
    },

    async upsert(effects, id, data) {
      const documentType = id === 'nuevo'
        ? await axios.post(`/departments`, data)
        : await axios.put(`/departments/${id}`, data)
      effects.setSingle(documentType)
    },

    async loadAll(effects) {
      const items = await axios.get('/departments')
      const departments = await Promise.all(

        items.map(async item => {
          const { name : country } = await axios.get(`/countries/${item.countryId}`)
          return { ...item, country }
        })
      )

      effects.setAll(departments)
    },

    async loadSingle(effects, id) {
      const item = await axios.get(`/departments/${id}`)
      const countries = await axios.get(`/countries`)
      effects.setAllCountries(countries)
      effects.setSingle(item)
    }
  }
})