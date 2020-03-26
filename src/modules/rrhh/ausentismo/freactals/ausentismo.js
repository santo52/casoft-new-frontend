
import { provideState, update } from "freactal";
import { axios } from '../../../../utils/axios'
import produce from 'immer'

const initialState = () => ({
  listaAusentismo: [],
  ausentismo: {},
  users: [],
  tiposAusentismo: [],
})


export default provideState({
  initialState,
  effects: {

    setListaAusentismo: update((_, listaAusentismo) => ({ listaAusentismo })),

    setAusentismo: update((_, ausentismo) => ({ ausentismo })),

    setTiposAusentismo: update((_, tiposAusentismo) => ({ tiposAusentismo })),

    setUsers: update((_, users) => ({ users })),

    deleteSingleState: update((state, id) => (
      produce(state, draft => {
        const index = draft.listaAusentismo.findIndex(({ _id }) => _id === id)
        draft.listaAusentismo.splice(index, 1)
      })
    )),

    async loadAll(effects) {
      const list = await axios.get(`/absences`)
      const absenceTypes = await axios.get(`/absence-types`)
      const users = await axios.get(`/users`)
      effects.setUsers(users)
      effects.setTiposAusentismo(absenceTypes)
      effects.setListaAusentismo(list)
    },

    async loadSingle(effects, id) {
      const data = await axios.get(`/absences/${id}`)
      const absenceTypes = await axios.get(`/absence-types`)
      const users = await axios.get(`/users`)
      effects.setTiposAusentismo(absenceTypes)
      effects.setAusentismo(data)
      effects.setUsers(users)
    },

    async deleteSingle(effects, id) {
      await axios.delete(`/absences/${id}`)
      effects.deleteSingleState(id)
    },

    async upsert(effects, id, data){
      const user = id === 'nuevo' 
      ? await axios.post(`/absences`, data)
      : await axios.put(`/absences/${id}`, data)
      effects.setAusentismo(user)
    },
  }
})