import Head from "next/head";
import { Flex, Icon, HStack, Text, VStack, Input, Button, Box } from "@chakra-ui/react";
import { BiCalendar, BiCheckCircle } from 'react-icons/bi';
import { CardClass } from "../components/CardClass";

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
      // borderWidth={1}
      // borderColor="#000"
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
      // borderWidth={1}
      // borderColor="#000"
      >
        <VStack w="51rem" align="flex-start" justify="center" spacing="7" pr="52">
          <Text fontWeight="bold" fontSize="1.7rem" color="white" lineHeight="1">
            Você é poderosa, SIM! E esse <br />
            evento vai te provar.
          </Text>
          <Text fontWeight="400" fontSize="0.9rem" color="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eum doloribus accusantium ad eveniet dolores ullam laboriosam,
            perferendis mollitia unde dolorem aperiam est rem ducimus incidunt
            voluptatibus. Quae sed perspiciatis rem!
            <br />
            <br />
            Velit atque autem, ab corporis odio tenetur voluptatem nesciunt nulla pariatur necessitatibus hic accusantium laboriosam ratione delectus eaque beatae illo ducimus sunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis totam placeat cumque fuga recusandae, blanditiis itaque aliquid libero quibusdam esse tempora consequuntur alias aspernatur, numquam facere id laboriosam dolorum qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat libero natus quidem recusandae quis ab, inventore dolorum voluptatem harum iusto modi delectus ducimus ex animi. Ex vitae tempora et fugit?

            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi dolorem non, voluptatibus soluta dolore facilis? Distinctio saepe sed quidem pariatur quaerat eius at. Itaque hic deserunt excepturi vitae, perspiciatis alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nulla animi at, libero eligendi assumenda adipisci omnis, quia laudantium quisquam minima in itaque a doloribus nesciunt dolorum vero ad eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat nobis amet iure harum reiciendis dolore omnis cumque tenetur at. Placeat incidunt explicabo repellendus voluptatem dolorum exercitationem nobis aliquid quis!
          </Text>
        </VStack>
      </Flex>
      <Flex
        bg="purple.900"
        w="100vw"
        minH="100vh"
        direction="column"
        p="6"
        align="center"
        justify="flex-start"
      // borderWidth={1}
      // borderColor="#000"
      >
        <Text fontWeight="bold" fontSize="1.7rem" color="white" lineHeight="1" mt="10">
          O Que Você Aprenderá no Evento:
        </Text>
        <HStack
          w="auto"
          h="auto"
          align="center"
          justify="space-between"
          flexWrap="wrap"
          spacing="28"
          mt="7"
        >
          <CardClass />
          <CardClass />
        </HStack>
        <HStack
          w="auto"
          h="auto"
          align="center"
          justify="space-between"
          flexWrap="wrap"
          spacing="28"
          mt="7"
        >
          <CardClass />
          <CardClass />
        </HStack>
      </Flex>
      <Flex
        bg="purple.900"
        w="100vw"
        minH="100vh"
        direction="column"
        p="6"
        align="center"
        justify="flex-start"
      // borderWidth={1}
      // borderColor="#000"
      >
        <Text fontWeight="bold" fontSize="1.5rem" color="white" lineHeight="1" mt="16" textAlign="center">
          Prazer... <strong> EU SOU KELLY KRIS,</strong> serei <strong> SUA MENTORA</strong> e te
          <br />
          transformarei num VERDADEIRO DIAMANTE!
        </Text>
        <HStack w="100%" justify="flex-end" pr="44">
          <Text w="50%" fontWeight="400" fontSize="0.9rem" color="white" mt="16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eum doloribus accusantium ad eveniet dolores ullam laboriosam,
            perferendis mollitia unde dolorem aperiam est rem ducimus incidunt
            voluptatibus. Quae sed perspiciatis rem!
            <br />
            <br />
            Velit atque autem, ab corporis odio tenetur voluptatem nesciunt nulla pariatur necessitatibus hic accusantium laboriosam ratione delectus eaque beatae illo ducimus sunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis totam placeat cumque fuga recusandae, blanditiis itaque aliquid libero quibusdam esse tempora consequuntur alias aspernatur, numquam facere id laboriosam dolorum qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat libero natus quidem recusandae quis ab, inventore dolorum voluptatem harum iusto modi delectus ducimus ex animi. Ex vitae tempora et fugit?

            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi dolorem non, voluptatibus soluta dolore facilis? Distinctio saepe sed quidem pariatur quaerat eius at. Itaque hic deserunt excepturi vitae, perspiciatis alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nulla animi at, libero eligendi assumenda adipisci omnis, quia laudantium quisquam minima in itaque a doloribus nesciunt dolorum vero ad eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat nobis amet iure harum reiciendis dolore omnis cumque tenetur at. Placeat incidunt explicabo repellendus voluptatem dolorum exercitationem nobis aliquid quis!
          </Text>
        </HStack>
        <Button
          w="30rem"
          py="7"
          mt="12"
          mb="8"
          color="white"
          bg="pink.600"
          fontSize="sm"
          _hover={{
            bg: 'pink.600'
          }}
        >
          QUERO ME INSCREVER AGORA
        </Button>
      </Flex>
    </>
  );
}