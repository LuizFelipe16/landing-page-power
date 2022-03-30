import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { BiCalendar } from 'react-icons/bi';

interface ICardClass {
  date: string;
  title: string;
  text: string;
  border: string;
}

export function CardClass({ date, title, text, border }: ICardClass) {
  return (
    <VStack w="19rem" h="25rem" spacing="3" justify="flex-start">
      <Box
        w="18rem"
        h="11rem"
        borderWidth={2}
        borderRadius="lg"
        borderColor={border}
      />
      <HStack>
        <Icon as={BiCalendar} color="pink.600" />
        <Text fontWeight="400" color="white" fontSize="sm">{date}</Text>
      </HStack>
      <Text fontWeight="600" color="pink.600" fontSize="lg" textAlign="center">{title}</Text>
      <Text fontWeight="300" color="white" fontSize="sm" textAlign="center">{text}</Text>
    </VStack>
  );
}