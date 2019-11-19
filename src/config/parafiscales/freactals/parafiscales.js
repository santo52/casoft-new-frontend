import { provideState, update } from "freactal";
import { axios } from '../../../utils/axios'
import produce from 'immer'

function initialState() {
  return {
    parafiscals: [],
    parafiscal: {}
  }
}

export default provideState({
  initialState,
  effects: {


    setAll: update((_, parafiscals) => ({ parafiscals })),

    setSingle: update((_, parafiscal) => ({ parafiscal })),

    deleteFromState: update((state, id) => (
      produce(state, draft => {
        const index = draft.parafiscals.findIndex(({ _id }) => _id === id)
        draft.parafiscals.splice(index, 1)
      })
    )),

    async deleteSingle(effects, id) {
      axios.delete(`/parafiscals/${id}`)
      effects.deleteFromState(id)
    },

    async loadAll(effects) {
      const items = await axios.get('/parafiscals')
      effects.setAll(items)
    },

    async loadSingle(effects, id) {
      const item = await axios.get(`/parafiscals/${id}`)
      effects.setSingle(item)
    }
  }
})