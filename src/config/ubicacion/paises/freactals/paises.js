import { provideState, update } from "freactal";
import { axios } from '../../../../utils/axios'
import produce from 'immer'

function initialState() {
  return {
    countries: [],
    country: {}
  }
}

export default provideState({
  initialState,
  effects: {


    setAll: update((_, countries) => ({ countries })),

    setSingle: update((_, country) => ({ country })),

    deleteFromState: update((state, id) => (
      produce(state, draft => {
        const index = draft.countries.findIndex(({ _id }) => _id === id)
        draft.countries.splice(index, 1)
      })
    )),

    async deleteSingle(effects, id) {
      axios.delete(`/countries/${id}`)
      effects.deleteFromState(id)
    },

    async loadAll(effects) {
      const items = await axios.get('/countries')
      effects.setAll(items)
    },

    async loadSingle(effects, id) {
      const item = await axios.get(`/countries/${id}`)
      console.log(item)
      effects.setSingle(item)
    }
  }
})