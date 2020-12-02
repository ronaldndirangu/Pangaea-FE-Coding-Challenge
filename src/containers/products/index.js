import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../graphql/queries';
import { useToast } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import Loader from '../../components/Loader';

const Products = () => {
  const toast = useToast();
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (error)
    return toast({
      title: 'An error occurred.',
      description: 'Unable to fetch products.',
      status: 'error',
      isClosable: true,
    });

  console.log({ data });
  return (
    <PageWrapper>
      {loading ? (
        <Loader />
      ) : (
        Products
      )}
    </PageWrapper>
  );
};

export default Products;
