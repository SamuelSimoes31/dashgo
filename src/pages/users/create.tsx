import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  VStack
} from '@chakra-ui/react';
import Input from '../../components/Form/Input';
import Sidebar from '../../components/Form/Sidebar';
import Header from '../../components/Header';

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading flex="1" borderRadius={8} bg="gray.800" p="8">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="password" type="password" label="Senha" />
              <Input name="password_confirmation" type="password" label="Confirmar Senha" />
            </SimpleGrid>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
