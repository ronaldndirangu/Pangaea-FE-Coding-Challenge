import React from 'react';
import StyledDrawerItem from './style';
import { Image, Text } from '@chakra-ui/react';
import ItemQuantity from './ItemQuantity';
import { CartContext } from '../../../contexts/cart.context';

const DrawerItem = ({ item, quantity }) => {
  const { dispatch } = React.useContext(CartContext);

  const addItem = () => {
    dispatch({ type: 'ADD_CART_ITEM', item })
  }

  const removeItem = () => {
    dispatch({ type: 'REDUCE_CART_ITEM', item })
  }

  return (
    <StyledDrawerItem>
      <StyledDrawerItem.Title>{item.title}</StyledDrawerItem.Title>
      <StyledDrawerItem.Image><Image src={item.image_url}/></StyledDrawerItem.Image>
      <StyledDrawerItem.Footer>
        <ItemQuantity quantity={quantity} addItem={addItem} removeItem={removeItem} />
        <Text ml={10}>${item.price * quantity}</Text>
      </StyledDrawerItem.Footer>
    </StyledDrawerItem>
  );
};

export default DrawerItem;
