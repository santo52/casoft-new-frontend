import { provideState, update } from "freactal";
import { axios } from '../../../utils/axios'
import produce from 'immer'

function initialState() {
  return {
    types: [],
    absenceType: {},
    absenceTypes: []
  }
}

export default provideState({
  initialState,
  effects: {


    setAll: update((_, absenceTypes) => ({ absenceTypes })),

    setSingle: update((_, absenceType) => ({ absenceType })),

    deleteFromState: update((state, id) => (
      produce(state, draft => {
        const index = draft.absenceTypes.findIndex(({ _id }) => _id === id)
        draft.absenceTypes.splice(index, 1)
      })
    )),

    async deleteSingle(effects, id) {
      axios.delete(`/absence-types/${id}`)
      effects.deleteFromState(id)
    },

    async loadAll(effects) {
      const items = await axios.get('/absence-types')
      effects.setAll(items)
    },

    async upsert(effects, id, data){
      const absenceType = id === 'nuevo' 
      ? await axios.post(`/absence-types`, data)
      : await axios.put(`/absence-types/${id}`, data)
      effects.setSingle(absenceType)
    },

    async loadSingle(effects, id) {
      const item = await axios.get(`/absence-types/${id}`)
      effects.setSingle(item)
    }
  }
})