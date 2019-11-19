import { provideState, update } from "freactal";
import { axios } from '../../../../utils/axios'
import produce from 'immer'

function initialState() {
  return {
    departments: [],
    department: {}
  }
}

export default provideState({
  initialState,
  effects: {


    setAll: update((_, departments) => ({ departments })),

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

    async loadAll(effects) {
      const items = await axios.get('/departments')
      effects.setAll(items)
    },

    async loadSingle(effects, id) {
      const item = await axios.get(`/departments/${id}`)
      console.log(item)
      effects.setSingle(item)
    }
  }
})