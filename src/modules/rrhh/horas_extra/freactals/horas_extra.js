
import { provideState, update } from "freactal";
import { axios } from '../../../../utils/axios'
import produce from 'immer'

const initialState = () => ({

  lastUploadDate: new Date(),
  extraHours: [],
  extraHour: {},
  users: []
})


export default provideState({
  initialState,
  effects: {

    setLastUploadDate: update((_, lastUploadDate) => ({ lastUploadDate })),

    setExtraHours: update((_, extraHours) => ({ extraHours })),

    setExtraHour: update((_, extraHour) => ({ extraHour })),

    setUsers: update((_, users) => ({ users })),

    deleteSingleState: update((state, id) => (
      produce(state, draft => {
        const index = draft.extraHours.findIndex(({ _id }) => _id === id)
        draft.extraHours.splice(index, 1)
      })
    )),

    async loadAll(effects) {
      const list = await axios.get(`/extra-hours`)
      effects.setExtraHours(list)
    },

    async loadSingle(effects, id) {
      const data = await axios.get(`/extra-hours/${id}`)
      const users = await axios.get(`/users`)
      effects.setExtraHour(data)
      effects.setUsers(users)
    },

    async getLastUploadDate(effects) {
      const list = await axios.get(`/extra-hours/last`)
      effects.setExtraHours(list)
    },

    async deleteSingle(effects, id) {
      await axios.delete(`/extra-hours/${id}`)
      effects.deleteSingleState(id)
    },

    async upsert(effects, id, data){
      const user = id === 'nuevo' 
      ? await axios.post(`/extra-hours`, data)
      : await axios.put(`/extra-hours/${id}`, data)
      effects.setExtraHour(user)
    },

    async uploadMasive(effects, documents) {
      await axios.post(`/extra-hours/upload`, new URLSearchParams({data: JSON.stringify(documents)}))
      window.location.pathname = '/rrhh/horas-extra'
    }
  }
})