import {CHANGE_SERVICE_FIELD} from '../actions/actionTypes';

const initialState = {
  id: null,
  name: '',
  price: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      if (name.id) {
        const updState = {
          id: name.id,
          name: name.name,
          price: name.price,
        }
        return updState;
      }
      return {...state, [name]: value};
    default:
      return initialState;
  }
}