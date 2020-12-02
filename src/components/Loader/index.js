import React from 'react'
import { Flex, Spinner } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Flex align="center" justify="center" width="100%" height="100%">
      <Spinner />
    </Flex>
  )
}

export default Loader