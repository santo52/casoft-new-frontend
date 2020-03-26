
import { provideState, update } from "freactal";
import { axios } from '../../../../utils/axios'
import produce from 'immer'

const initialState = () => ({

  lastUploadDate: new Date(),
  incomesDepartures: []
})


export default provideState({
  initialState,
  effects: {

    setLastUploadDate: update((_, lastUploadDate) => ({ lastUploadDate })),

    setIncomesDepartures: update((_, incomesDepartures) => ({ incomesDepartures })),

    deleteSingleState: update((state, id) => (
      produce(state, draft => {
        const index = draft.incomesDepartures.findIndex(({ _id }) => _id === id)
        draft.incomesDepartures.splice(index, 1)
      })
    )),

    async loadAll(effects) {
      const list = await axios.get(`/income-departure`)
      effects.setIncomesDepartures(list)
    },

    async getLastUploadDate(effects) {
      const list = await axios.get(`/income-departure/last`)
      effects.setIncomesDepartures(list)
    },

    async deleteSingle(effects, id) {
      await axios.delete(`/income-departure/${id}`)
      effects.deleteSingleState(id)
    },

    async uploadMasive(effects, documents) {
      await axios.post(`/income-departure/upload`, new URLSearchParams({data: JSON.stringify(documents)}))
      window.location.pathname = '/rrhh/huellero'
    }
  }
})