import nanoid from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, FILTER_SERVICE} from '../actions/actionTypes';

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

let fullState = initialState;

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {id, name, price} = action.payload;
      if (id === null) {
        fullState = [...fullState, {id: nanoid(), name, price: Number(price)}];
        return [...state, {id: nanoid(), name, price: Number(price)}];
      }
      fullState = fullState.map(service => (
        (service.id === id) ? {id, name, price} : service)
      );
      return state.map(service => (
        (service.id === id) ? {id, name, price} : service)
      );
    case REMOVE_SERVICE:
      const del = action.payload;
      fullState = fullState.filter(service => service.id !== del.id);
      return state.filter(service => service.id !== del.id);
    case FILTER_SERVICE:
      const {filter} = action.payload;
      const stateFiltered = fullState.filter(service => service.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
      return stateFiltered;
    default:
      return state;
  }
}