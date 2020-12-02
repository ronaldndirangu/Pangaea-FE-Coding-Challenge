import React from 'react';
import StyledProductItem from './styles';
import { Text, Button } from '@chakra-ui/react';
import { CartContext } from '../../../contexts/cart.context';

const ProductItem = ({ product }) => {
  const { title, image_url, price } = product;
  const { dispatch } = React.useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({ type: 'OPEN_DRAWER' })
    dispatch({ type: 'ADD_CART_ITEM', item: product })
  }

  return (
    <StyledProductItem>
      <StyledProductItem.Img src={image_url} htmlHeight={10} />
      <StyledProductItem.Title>{title}</StyledProductItem.Title>
      <StyledProductItem.Title>
        <Text fontWeight="bold">From: </Text>${price}
      </StyledProductItem.Title>
      <Button onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </StyledProductItem>
  );
};

export default ProductItem;
