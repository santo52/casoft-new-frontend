import { provideState, update } from "freactal";
import {axios} from '../../../utils/axios'
import produce from 'immer'

function initialState() {
  return {
    banks: [],
    bank: {}
  }
}

export default provideState({
  initialState,
  effects: {
    

    setBanks: update((_, banks) => ({ banks })),

    setBank: update((_, bank) => ({ bank })),

    deleteBankState: update((state, id) => (
      produce(state, draft => {
        const index = draft.banks.findIndex(bank => bank._id === id)
        draft.banks.splice(index, 1)
      })
    )),

    async deleteBank(effects, id){
      axios.delete(`/banks/${id}`)
      effects.deleteBankState(id)
    },

    async loadBanks(effects) {
      const banks = await axios.get('/banks')
      effects.setBanks(banks)
    },

    async loadBank(effects, id) {
      const bank = await axios.get(`/banks/${id}`)
      effects.setBank(bank)
    }
  }
})