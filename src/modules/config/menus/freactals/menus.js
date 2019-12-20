import { provideState, update } from "freactal";
import { axios } from '../../../../utils/axios'
import produce from 'immer'

function initialState() {
  return {
    menus: [],
    menu: {}
  }
}

export default provideState({
  initialState,
  effects: {


    setAll: update((_, menus) => ({ menus })),

    setSingle: update((_, menu) => ({ menu })),

    deleteFromState: update((state, id) => (
      produce(state, draft => {
        const index = draft.menus.findIndex(({ _id }) => _id === id)
        draft.menus.splice(index, 1)
      })
    )),

    async deleteSingle(effects, id) {
      axios.delete(`/menus/${id}`)
      effects.deleteFromState(id)
    },

    async upsert(effects, id, data){
      const menu = id === 'nuevo' 
      ? await axios.post(`/menus`, data)
      : await axios.put(`/menus/${id}`, data)
      effects.setSingle(menu)
    },

    async loadAll(effects) {
      const items = await axios.get('/menus')
      effects.setAll(items)
    },

    async loadSingle(effects, id) {
      const item = await axios.get(`/menus/${id}`)
      effects.loadAll()
      effects.setSingle(item)
    }
  }
})