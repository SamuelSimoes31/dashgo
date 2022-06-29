import { Flex } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../components/Form/Sidebar';
import Header from '../components/Header';

export default function dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  );
}
