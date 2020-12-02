import Products from './containers/products';
import Navbar from './components/Navbar'
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Navbar title="Lumin" />
      <Products />
    </ChakraProvider>
  );
}

export default App;
