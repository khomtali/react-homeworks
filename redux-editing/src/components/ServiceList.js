import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeService, changeServiceField} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleUpdate = o => {
    dispatch(changeServiceField(o));
  }

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleUpdate(o)}>~</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList;