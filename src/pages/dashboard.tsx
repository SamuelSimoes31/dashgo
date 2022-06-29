import dynamic from 'next/dynamic';
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import Sidebar from '../components/Form/Sidebar';
import Header from '../components/Header';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      new Date(2020, 5, 1).toISOString(),
      new Date(2020, 5, 2).toISOString(),
      new Date(2020, 5, 3).toISOString(),
      new Date(2020, 5, 4).toISOString(),
      new Date(2020, 5, 5).toISOString(),
      new Date(2020, 5, 6).toISOString(),
      new Date(2020, 5, 7).toISOString(),
      new Date(2020, 5, 8).toISOString(),
      new Date(2020, 5, 9).toISOString(),
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.5
    }
  }
};

const series = [
  {
    name: "series1",
    data: [31, 120, 42, 10, 5, 78, 9, 23, 120]
  }
];

export default function dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            p="8"
            bgColor="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text>
              Inscritos da semana
            </Text>
            <Chart
              type='area'
              height={160}
              options={options}
              series={series}
            />
          </Box>
          <Box
            p="8"
            bgColor="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text>
              Taxa de abertura
            </Text>
            <Chart
              type='area'
              height={160}
              options={options}
              series={series}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
