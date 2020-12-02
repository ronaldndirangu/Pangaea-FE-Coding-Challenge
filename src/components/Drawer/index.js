import React from 'react';
import {
  Text,
  Menu,
  Button,
  Drawer,
  MenuItem,
  MenuList,
  useToast,
  DrawerBody,
  MenuButton,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { CartContext } from '../../contexts/cart.context';
import { useQuery } from '@apollo/client';
import { GET_CURRENCIES } from '../../graphql/queries';
import Loader from '../Loader';
import DrawerItem from './DrawerItem';

const CustomDrawer = () => {
  const toast = useToast();
  const { state, dispatch } = React.useContext(CartContext);
  const { loading, error, data } = useQuery(GET_CURRENCIES);

  if (error)
    return toast({
      title: 'An error occurred.',
      description: 'Unable to fetch products.',
      status: 'error',
      isClosable: true,
    });

  const isOpen = state.isDrawerOpen;
  const onClose = () => dispatch({ type: 'CLOSE_DRAWER' });

  const subTotal = Object.values(state.cartItems).reduce((acc, value) => {
    acc += value.quantity * value.data.price;
    return acc;
  }, 0);

  const handleChangeCurrency = (currency) => {
    dispatch({ type: 'CHANGE_CURRENCY', currency })
  }

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="sm" scrollBehavior="inside">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" d="flex" alignItems="center">
            <Menu>
              <MenuButton as={Button} size="sm" rightIcon={<ChevronDownIcon />}>
                {state.currency}
              </MenuButton>
              <MenuList height="20rem" overflowY="scroll">
                {data &&
                  data.currency.map((currency, index) => (
                    <MenuItem
                      key={index}
                      fontSize="md"
                      onClick={() => handleChangeCurrency(currency)}
                    >
                      {currency}
                    </MenuItem>
                  ))}
              </MenuList>
            </Menu>
            <Text fontSize="sm" ml={20}>
              YOUR CART
            </Text>
          </DrawerHeader>
          <DrawerBody bgColor="#EEEEEE">
            {loading ? (
              <Loader />
            ) : (
              <>
                {Object.entries(state.cartItems).map(([key, value], index) => (
                  <DrawerItem
                    key={index}
                    item={value.data}
                    quantity={value.quantity}
                  />
                ))}
              </>
            )}
          </DrawerBody>
          <DrawerFooter d="flex" justifyContent="space-between">
            <Text>Subtotal</Text>
            <Text>${subTotal}</Text>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default CustomDrawer;
