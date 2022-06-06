import { Box, Button, Heading, Icon, Flex, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/form/Pagination";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="2" >

          <Flex mb="8" borderRadius={8} bg="gray.800" p="8" >
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" ml="auto" leftIcon={<Icon as={RiAddLine} />}>
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha" >
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8" >
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>
                  Usuário
                </Th>
                <Th >
                  Dados de cadastro
                </Th>
                <Th width="8" >
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6" color="gray.300" width="8" >
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold" >Keroulaine Fauza de Santes</Text>
                    <Text fontSize="sm" color="gray.300" >keaumfauza@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  <Box>
                    <Text>29 de Maio, 2022</Text>
                  </Box>
                </Td>
                <Td>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6" color="gray.300" width="8" >
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Albercido Lisergino Hofmann</Text>
                    <Text fontSize="sm" color="gray.300" >alsd25@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  <Box>
                    <Text>32 de Maio, 2022</Text>
                  </Box>
                </Td>
                <Td>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>

          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )

}