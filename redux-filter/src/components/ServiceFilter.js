import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeFilterField, filterService} from '../actions/actionCreators';

function ServiceFilter() {
    const filter = useSelector(state => state.serviceFilter);
    const dispatch = useDispatch();
  
    const handleFilter = evt => {
      const {value} = evt.target;
      dispatch(changeFilterField(value));
      dispatch(filterService(value));
    }
  
    return (
      <form>
        <input name='filter' onChange={handleFilter} value={filter.value} />
      </form>
    );
  }
  
  export default ServiceFilter;