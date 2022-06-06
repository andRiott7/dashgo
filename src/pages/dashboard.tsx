import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexOptions = {
    colors: [theme.colors.purple[500]],
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
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
        type: "datetime",
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            "2022-05-12T00:00:00.000Z",
            "2022-05-13T00:00:00.000Z",
            "2022-05-14T00:00:00.000Z",
            "2022-05-15T00:00:00.000Z",
            "2022-05-16T00:00:00.000Z",
            "2022-05-17T00:00:00.000Z",
            "2022-05-18T00:00:00.000Z",
            "2022-05-19T00:00:00.000Z",
            "2022-05-20T00:00:00.000Z",
            "2022-05-21T00:00:00.000Z",
        ]
    },
    fill: {
        colors: [theme.colors.purple[500]],
        opacity: 0.3,
        type: "gradient",
        gradient: {
            shade: "dark",
            opacityFrom: 0.8,
            opacityTo: 0.3
        }
    }
};

const series = [
    {
        name: "series-1",
        data: [31, 40, 28, 51, 42, 109, 100, 112, 91, 143, 141]
    }
]

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box p={["4", "8"]} bg="gray.800" borderRadius={8} pb="4">
                        <Text fontSize="lg" mb="4">
                            Inscritos da semana
                        </Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>

                    <Box p={["4", "8"]} bg="gray.800" borderRadius={8} pb="4">
                        <Text fontSize="lg" mb="4">
                            Taxa de Abertura
                        </Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    );
}