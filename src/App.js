import Products from './containers/Products';
import Navbar from './components/Navbar'
import { ChakraProvider } from '@chakra-ui/react';
import CartProvider from './contexts/cart.context';
import Drawer from './components/Drawer'

function App() {
  return (
    <ChakraProvider>
      <CartProvider>
        <Navbar title="Lumin" />
        <Products />
        <Drawer />
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;
