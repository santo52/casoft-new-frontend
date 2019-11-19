import { provideState, update } from "freactal";
import { axios } from '../../../../utils/axios'
import produce from 'immer'

function initialState() {
  return {
    cities: [],
    city: {}
  }
}

export default provideState({
  initialState,
  effects: {


    setAll: update((_, cities) => ({ cities })),

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

    async loadAll(effects) {
      const items = await axios.get('/cities')
      effects.setAll(items)
    },

    async loadSingle(effects, id) {
      const item = await axios.get(`/cities/${id}`)
      effects.setSingle(item)
    }
  }
})