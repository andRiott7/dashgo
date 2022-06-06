import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri";

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Text
                fontSize="3xl"
                w="64"
                letterSpacing="tight"
                fontWeight="bold"
            >
                dashgo
                <Text
                    as="span"
                    color="pink.500"
                    ml="1"
                >.</Text>
            </Text>

            <Flex as="label" flex="1" py="4" px="8" ml="6" maxWidth={400} alignSelf="center" color="gray.200" position="relative" bg="gray.800" borderRadius="full" >
                <Input color="gray" variant="unstyled" px="4" mr="4" placeholder="buscar da Plataforma" _placeholder={{ color: "gray.400" }} />
                <Icon as={RiSearchLine} size="24" />
            </Flex>
            <Flex align="center" ml="auto">
                <HStack mx="8" pr="8" spacing="4" align="center" color="gray.300" borderRightWidth={1} borderColor="gray.700">
                    <Icon as={RiNotificationLine} size="24" />
                    <Icon as={RiUserAddLine} size="24" />
                </HStack>
                <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text> Thiago Andriotti </Text>
                        <Text fontSize="sm" color="gray.500">@thiagoandriotti</Text>
                    </Box>
                    <Avatar size="md" name="Thiago Andriotti" src="https://avatars.githubusercontent.com/u/71047280?s=400&u=fb3eb75391ad1e9c9a9b2394df2b3c9e8c29933f&v=4" />                 </Flex>
            </Flex>
        </Flex>
    )
}