import nanoid from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE} from '../actions/actionTypes';

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {id, name, price} = action.payload;
      if (id === null) {
        return [...state, {id: nanoid(), name, price: Number(price)}];
      }
      return state.map(service => (
        (service.id === id) ? {id, name, price} : service)
      );
    case REMOVE_SERVICE:
      const del = action.payload;
      return state.filter(service => service.id !== del.id);
    default:
      return state;
  }
}