import { provideState, update } from "freactal";
import { axios } from '../../../../../utils/axios'
import produce from 'immer'

function initialState() {
  return {
    departments: [],
    cities: [],
    city: {}
  }
}

export default provideState({
  initialState,
  effects: {


    setAll: update((_, cities) => ({ cities })),

    setAllDepartments: update((_, departments ) => ({ departments })),

    setSingle: update((_, city) => ({ city })),

    deleteFromState: update((state, id) => (
      produce(state, draft => {
        const index = draft.cities.findIndex(({ _id }) => _id === id)
        draft.cities.splice(index, 1)
      })
    )),

    async deleteSingle(effects, id) {
      axios.delete(`/cities/${id}`)
      effects.deleteFromState(id)
    },

    async upsert(effects, id, data){
      const documentType = id === 'nuevo' 
      ? await axios.post(`/cities`, data)
      : await axios.put(`/cities/${id}`, data)
      effects.setSingle(documentType)
    },

    async loadAll(effects) {
      const items = await axios.get('/cities')
      effects.setAll(items)
    },

    async loadSingle(effects, id) {
      const item = await axios.get(`/cities/${id}`)
      const departments = await axios.get(`/departments`)
      effects.setAllDepartments(departments)
      effects.setSingle(item)
    }
  }
})