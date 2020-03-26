import { provideState, update } from "freactal";
import { axios } from '../../../../utils/axios'
import produce from 'immer'

function initialState() {
  return {
    contractTypes: [],
    contractType: {},
    parafiscals: []
  }
}

export default provideState({
  initialState,
  effects: {


    setAll: update((_, contractTypes) => ({ contractTypes })),

    setSingle: update((_, contractType) => ({ contractType })),

    setParafiscals: update((_, parafiscals) => ({ parafiscals })),

    deleteFromState: update((state, id) => (
      produce(state, draft => {
        const index = draft.contractTypes.findIndex(({ _id }) => _id === id)
        draft.contractTypes.splice(index, 1)
      })
    )),

    async deleteSingle(effects, id) {
      axios.delete(`/contracts/${id}`)
      effects.deleteFromState(id)
    },

    async upsert(effects, id, data){
      const contractType = id === 'nuevo' 
      ? await axios.post(`/contracts`, data)
      : await axios.put(`/contracts/${id}`, data)
      effects.setSingle(contractType)
    },

    async loadAll(effects) {
      const items = await axios.get('/contracts')
      effects.setAll(items)
    },

    async loadSingle(effects, id) {
      const item = await axios.get(`/contracts/${id}`)
      const parafiscals = await axios.get(`/parafiscals`)
      effects.setSingle(item)
      effects.setParafiscals(parafiscals)
    }
  }
})