import { Box, HStack, Icon, Img, Text, VStack } from "@chakra-ui/react";
import { BiCalendar } from 'react-icons/bi';

interface ICardClass {
  date: string;
  title: string;
  text: string;
  border: string;
  banner: string;
}

export function CardClass({ date, title, text, border, banner }: ICardClass) {
  return (
    <VStack
      w="19rem"
      h="23rem"
      spacing="3"
      justify="flex-start"
      data-aos="fade-down"
      data-aos-duration="1000"
    // borderWidth={1}
    // borderColor="red.500"
    >
      <Box
        w="18rem"
        h="11rem"
        borderWidth={2}
        borderRadius="lg"
        borderColor={border}
      >
        <Img
          w="100%"
          h="100%"
          borderRadius="md"
          objectFit="cover"
          src={`/images/classes/${banner}.png`}
        />
      </Box>
      <HStack>
        <Icon as={BiCalendar} color="pink.600" />
        <Text fontWeight="400" color="white" fontSize="sm">{date}</Text>
      </HStack>
      <Text fontWeight="600" color="pink.600" fontSize="lg" textAlign="center">{title}</Text>
      <Text fontWeight="300" color="white" fontSize="sm" textAlign="center">{text}</Text>
    </VStack>
  );
}