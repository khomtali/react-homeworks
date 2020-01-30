import React from 'react';
import PropTypes from 'prop-types';
import PurchaseModel from '../models/PurchaseModel';

function PurchaseItem(props) {
  const {name, done} = props.item;
  const onToggle = () => {
    props.onToggle(props.item); // передаём объект
  };
  const onRemove = () => {
    props.onRemove(props.item); // передаём объект
  };

  return (
    <li>{name}
      <button onClick={onToggle}>{done ? 'Uncheck' : 'Check'}</button>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
}

PurchaseItem.propTypes = {
  item: PropTypes.instanceOf(PurchaseModel).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default PurchaseItem;