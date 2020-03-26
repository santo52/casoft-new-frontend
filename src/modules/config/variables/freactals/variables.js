import { provideState, update } from "freactal";
import { axios } from '../../../../utils/axios'
import produce from 'immer'

function initialState() {
  return {
    variables: [],
    variable: {}
  }
}

export default provideState({
  initialState,
  effects: {


    setAll: update((_, variables) => ({ variables })),

    setSingle: update((_, variable) => ({ variable })),

    deleteFromState: update((state, id) => (
      produce(state, draft => {
        const index = draft.variables.findIndex(({ _id }) => _id === id)
        draft.variables.splice(index, 1)
      })
    )),

    async deleteSingle(effects, id) {
      axios.delete(`/variables/${id}`)
      effects.deleteFromState(id)
    },

    async loadAll(effects) {
      const items = await axios.get('/variables')
      effects.setAll(items)
    },

    async upsert(effects, id, data){
      const variable = id === 'nuevo' 
      ? await axios.post(`/variables`, data)
      : await axios.put(`/variables/${id}`, data)
      effects.setSingle(variable)
    },


    async loadSingle(effects, id) {
      const item = await axios.get(`/variables/${id}`)
      effects.setSingle(item)
    }
  }
})