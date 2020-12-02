import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../graphql/queries';
import { useToast } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import Loader from '../../components/Loader';
import ProductItem from './ProductItem';
import ProductsWrapper from '../../components/ProductsWrapper';
import { CartContext } from '../../contexts/cart.context';

const Products = () => {
  const toast = useToast();
  const { state, dispatch } = React.useContext(CartContext);

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { currency: state.currency },
    notifyOnNetworkStatusChange: true,
  });

  React.useEffect(() => {
    dispatch({ type: 'UPDATE_PRODUCT_ITEMS', productItems: data && data.products })
    if (!loading) dispatch({ type: 'UPDATE_CART_PRICES' })
  }, [data, dispatch, loading])


  if (error)
    return toast({
      title: 'An error occurred.',
      description: 'Unable to fetch products.',
      status: 'error',
      isClosable: true,
    });

  return (
    <PageWrapper>
      {loading ? (
        <Loader />
      ) : (
        <ProductsWrapper>
          {data &&
            data.products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
        </ProductsWrapper>
      )}
    </PageWrapper>
  );
};

export default Products;
