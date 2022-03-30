import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { BiCalendar } from 'react-icons/bi';

export function CardClass() {
  return (
    <VStack w="auto" spacing="3">
      <Box
        w="18rem"
        h="11rem"
        borderWidth={1}
        borderRadius="lg"
        borderColor="pink.600"
      />
      <HStack>
        <Icon as={BiCalendar} color="pink.600" />
        <Text fontWeight="400" color="white" fontSize="sm">08 de fevereiro às 20h</Text>
      </HStack>
      <Text fontWeight="600" color="pink.600" fontSize="lg">A Descoberta das Vilãs</Text>
      <Text fontWeight="300" color="white" fontSize="sm" textAlign="center">que te enfraquecem e bloqueiam <br /> seus poderes de ação</Text>
    </VStack>
  );
}