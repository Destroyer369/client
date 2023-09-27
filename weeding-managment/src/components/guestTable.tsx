import { useEffect, useState } from 'react'
import axios from 'axios';

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

function GuestTable () {

    const [users, setUsers] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3001/getUsers')
      .then(users => setUsers(users.data))
      .catch(err => console.log(err))
    }, [])

    return (
        <TableContainer>
        <Table variant='simple'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Surname</Th>
              <Th>Role</Th>
              <Th>Side</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              users.map(user => {
                return (
                <Tr key={user._id}>
                  <Td>{user.name}</Td>
                  <Td>{user.surname}</Td>
                  <Td>{user.role}</Td>
                  <Td>{user.side}</Td>
                </Tr>
              )})
            }
          </Tbody>
        </Table>
      </TableContainer>
    )
}

export default GuestTable;