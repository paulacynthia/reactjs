import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Paula Cynthia</Text>
        <Text color="gray.300" fontSize="small">
          spaulacynthia@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Paula Cynthia"
        src="https://github.com/paulacynthia.png"
      />
    </Flex>
  );
}
