
import { provideState, update } from "freactal";
import { axios } from '../../../../utils/axios'
import produce from 'immer'

const initialState = () => ({
  user: {},
  users: [],
  documentTypes: [],
  contracts: [],
  centers: [],
})

export default provideState({
  initialState,
  effects: {

    setUser: update((_, user) => ({ user })),

    setUsers: update((_, users) => ({ users })),

    setDocumentTypes: update((_, documentTypes) => ({ documentTypes })),

    setContracts: update((_, contracts) => ({ contracts })),

    setCenters: update((_, centers) => ({ centers })),

    deleteUserState: update((state, id) => (
      produce(state, draft => {
        const index = draft.users.findIndex(({ _id }) => _id === id)
        draft.users.splice(index, 1)
      })
    )),

    updateUserState: update((state, user, id) => (
      produce(state, draft => {
        const index = draft.users.findIndex(({ _id }) => _id === id)
        draft.users[index] = user
      })
    )),

    async loadUser(effects, id) {
      const user = await axios.get(`/users/${id}`)
      const contracts = await axios.get(`/contracts`)
      const documentTypes = await axios.get(`/document-types`)
      const centers = await axios.get(`/centers`)
      effects.setUser(user)
      effects.setDocumentTypes(documentTypes)
      effects.setContracts(contracts)
      effects.setCenters(centers)
    },

    async getUsers(effects) {
      const users = await axios.get(`/users`)
      effects.setUsers(users)
    },

    async upsert(effects, id, data){
      const user = id === 'nuevo' 
      ? await axios.post(`/users`, data)
      : await axios.put(`/users/${id}`, data)
      effects.setUser(user)
    },

    async deleteUser(effects, id) {
      await axios.delete(`/users/${id}`)
      effects.deleteUserState(id)
    }
  }
})