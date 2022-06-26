import { Button, Flex, FormControl, FormLabel, Stack } from '@chakra-ui/react';
import Head from 'next/head';
import Input from '../components/Form/Input';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashgo</title>
      </Head>
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
      >
        <Flex
          flexDir="column"
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p={8}
          borderRadius={8}
        >
          <Stack spacing={4}>
            <Input name="email" type="email" label="E-mail" />
            <Input name="password" type="password" label="Senha" />
          </Stack>
          <Button
            type="submit"
            mt={6}
            colorScheme="pink"
            size="lg"
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}
