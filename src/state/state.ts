import article from '../data/article'
import benefits from '../data/benefits'
import contacts from '../data/contacts'
import goods from '../data/goods'
import header from '../data/header'
import history from '../data/history'
import { initialStateI } from '../model/state'

const initialState: initialStateI = {
  error: null,
  isLoading: false,
  content: {
    header,
    article,
    goods,
    benefits,
    history,
    contacts
  },
  showMenu: false
}

export default initialState
