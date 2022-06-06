import { Box, Button, Stack } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack
      direction="row"
      justify="space-between"
      px="6"
      py="4"
      mt="2"
      align="center"

    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default',

          }}
        >
          1

        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default',

          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default',

          }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default',

          }}
        >
          4
        </Button>
      </Stack>


    </Stack>
  );

}