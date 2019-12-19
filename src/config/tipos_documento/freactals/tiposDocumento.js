import { provideState, update } from "freactal";
import { axios } from '../../../utils/axios'
import produce from 'immer'

function initialState() {
  return {
    documentTypes: [],
    documentType: {}
  }
}

export default provideState({
  initialState,
  effects: {


    setAll: update((_, documentTypes) => ({ documentTypes })),

    setSingle: update((_, documentType) => ({ documentType })),

    deleteFromState: update((state, id) => (
      produce(state, draft => {
        const index = draft.documentTypes.findIndex(({ _id }) => _id === id)
        draft.documentTypes.splice(index, 1)
      })
    )),

    async deleteSingle(effects, id) {
      axios.delete(`/document-types/${id}`)
      effects.deleteFromState(id)
    },

    async upsert(effects, id, data){
      const documentType = id === 'nuevo' 
      ? await axios.post(`/document-types`, data)
      : await axios.put(`/document-types/${id}`, data)
      effects.setSingle(documentType)
    },

    async loadAll(effects) {
      const items = await axios.get('/document-types')
      effects.setAll(items)
    },

    async loadSingle(effects, id) {
      const item = await axios.get(`/document-types/${id}`)
      effects.setSingle(item)
    }
  }
})