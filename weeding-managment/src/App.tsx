import './App.css'

import { 
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,

} from '@chakra-ui/react'

import GuestTable from './components/guestTable'

function App() {

  return (
    <ChakraProvider>
      <GuestTable/>
    </ChakraProvider>
  )
}

export default App
