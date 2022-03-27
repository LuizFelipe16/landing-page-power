import Head from "next/head";
import { Flex, Icon, HStack, Text, VStack, Input, Button, Box } from "@chakra-ui/react";
import { BiCalendar, BiCheckCircle } from 'react-icons/bi';

export default function Home() {
  return (
    <>
      <Head><title>Landing Page</title></Head>
      <Flex
        bg="purple.900"
        w="100vw"
        h="100vh"
        direction="column"
        p="6"
        align="flex-start"
        justify="center"
        borderWidth={1}
        borderColor="#000"
      >
        <VStack align="flex-start" justify="center" spacing="5" pl="14">
          <Text fontWeight="bold" fontSize="1.7rem" color="white" lineHeight="1">
            Destrave seus talentos do mundo <br />
            real no online, derrote a impostora <br />
            interna definitivamente e zere o <br />
            jogo das redes sociais em 2022.
          </Text>
          <Text fontWeight="600" fontSize="0.9rem" color="white">
            <strong>Conquiste</strong> seu lugar na internet, domine o instagram como mestre e <br />
            destrave os poderes da <strong>PRESENÇA, POSICIONAMENTO, RELEVÂNCIA,</strong> <br />
            <strong>AUTORIDADE e ENGAJAMENTO</strong> no universo <strong>digital</strong>
          </Text>

          <Box>
            <HStack>
              <Icon as={BiCalendar} color="pink.600" />
              <Text fontWeight="bold" color="white" fontSize="sm">08 A 10 DE FEVEREIRO</Text>
            </HStack>
            <HStack>
              <Icon as={BiCheckCircle} color="pink.600" />
              <Text fontWeight="bold" color="white" fontSize="sm">100% ONLINE E GRATUITO</Text>
            </HStack>
          </Box>

          <VStack align="flex-start" justify="center">
            <Input
              w="32rem"
              bg="gray.700"
              placeholder="Seu nome"
              color="white"
              p="6"
            />
            <Input
              w="32rem"
              bg="gray.700"
              placeholder="Seu melhor e-mail"
              color="white"
              p="6"
            />
            <Button
              w="32rem"
              p="6"
              bg="pink.600"
              color="white"
              fontSize="sm"
              _hover={{
                bg: 'pink.600'
              }}
            >
              CONFIRMAR MINHA INSCRIÇÃO
            </Button>
          </VStack>
        </VStack>
      </Flex>
      <Flex
        bg="purple.900"
        w="100vw"
        h="100vh"
        direction="column"
        p="6"
        align="flex-end"
        justify="center"
        borderWidth={1}
        borderColor="#000"
      >
        <VStack align="flex-start" justify="center" spacing="5" pr="32">
          <Text fontWeight="bold" fontSize="1.7rem" color="white" lineHeight="1">
            Você é poderosa, SIM! E esse <br />
            evento vai te provar.
          </Text>
          <Text fontWeight="600" fontSize="0.9rem" color="white">
            Texto
          </Text>
        </VStack>
      </Flex>
    </>
  );
}