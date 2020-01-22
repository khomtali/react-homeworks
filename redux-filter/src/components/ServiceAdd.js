import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, removeService} from '../actions/actionCreators';

function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = evt => {
	const {name, value} = evt.target;
	dispatch(changeServiceField(name, value));
  }

  const handleSubmit = evt => {
	evt.preventDefault();
	dispatch(addService(item.id, item.name, item.price));
  }

  const handleCancel = evt => {
	evt.preventDefault();
	dispatch(removeService());
  }

  return (
	<form onSubmit={handleSubmit}>
	  <input name='name' onChange={handleChange} value={item.name} />
	  <input name='price' onChange={handleChange} value={item.price} />
	  <button type='submit'>Save</button>
	  {item.id && (
		<button type='submit' onClick={handleCancel}>Cancel</button>
	  )}
	</form>
  );
}

export default ServiceAdd;