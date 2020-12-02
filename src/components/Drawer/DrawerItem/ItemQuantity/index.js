import React from 'react';
import StyledItemQuantity from './styles';
import { ButtonGroup, Button, IconButton } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';


const ItemQuantity = ({ quantity = 0, addItem, removeItem }) => {
  return (
    <StyledItemQuantity>
      <ButtonGroup size="sm" isAttached variant="outline">
        <IconButton aria-label="Remove item" icon={<MinusIcon />} onClick={removeItem} />
        <Button mr="-px">{quantity}</Button>
        <IconButton aria-label="Add item" icon={<AddIcon />} onClick={addItem} />
      </ButtonGroup>
    </StyledItemQuantity>
  )
}

export default ItemQuantity;
