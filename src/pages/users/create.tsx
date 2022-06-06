import { Box, Button, Divider, Flex, FormControl, FormLabel, Heading, HStack, Input, SimpleGrid, VStack } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >

        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="2rem" >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%" >
              <FormControl>
                <FormLabel>nome completo</FormLabel>
                <Input name="name" />
              </FormControl>
              <FormControl>
                <FormLabel>email</FormLabel>
                <Input name="email" type="email" />
              </FormControl>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%" >
              <FormControl>
                <FormLabel>senha</FormLabel>
                <Input name="password" type="password" />
              </FormControl>
              <FormControl>
                <FormLabel>confirmação de senha</FormLabel>
                <Input name="password_confirmartion" type="passsword" />
              </FormControl>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end" >
            <HStack spacing="4">
              <Button w="6rem" colorScheme="whiteAlpha">
                Cancelar
              </Button>
              <Button w="6rem" colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )

}