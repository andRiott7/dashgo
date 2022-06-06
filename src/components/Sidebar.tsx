import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.500" fontSize="small" >GERAL</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <NextLink href="/dashboard" passHref>
                            <Link display="flex">
                                <Icon as={RiDashboardLine} fontSize="20" />
                                <Text fontSize="medium" ml="4">Dashboard</Text>
                            </Link>
                        </NextLink>
                        <NextLink href="/users" passHref>
                            <Link display="flex">
                                <Icon as={RiContactsLine} fontSize="20" />
                                <Text fontSize="medium" ml="4">Usuários</Text>
                            </Link>
                        </NextLink>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="bold" color="gray.500" fontSize="small" >AUTOMAÇÃO</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <NextLink href="/users/create" passHref>
                            <Link display="flex">
                                <Icon as={RiInputMethodLine} fontSize="20" />
                                <Text fontSize="medium" ml="4">Formulários</Text>

                            </Link>
                        </NextLink>

                        <Link display="flex">
                            <Icon as={RiGitMergeLine} fontSize="20" />
                            <Text fontSize="medium" ml="4">Automação</Text>

                        </Link>

                    </Stack>
                </Box>
            </Stack>
        </Box>
    )

}