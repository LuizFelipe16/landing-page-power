import Head from "next/head";
import { Flex, Icon, HStack, Text, VStack, Input, Button, Box } from "@chakra-ui/react";
import { BiCalendar, BiCheckCircle } from 'react-icons/bi';
import { CardClass } from "../components/CardClass";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head><title>Landing Page</title></Head>
      <Flex
        // bg="purple.900"
        w="100vw"
        h="100vh"
        bgImage="/images/background.png"
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
      // borderWidth={1}
      // borderColor="#000"
      >
        <VStack w="auto" align="flex-start" justify="center" spacing="7" pr="44">
          <Text fontWeight="bold" fontSize="1.7rem" color="white" lineHeight="1">
            Você é poderosa, SIM! E esse <br />
            evento vai te provar.
          </Text>
          <Text fontWeight="400" fontSize="0.9rem" color="white">
            A impostora está dentro de cada mulher e ela sempre vai te <br /> sabotar e te bloquear.
            <br />
            <br />
            Em cada segundo que você acredita nessa vilã, porque te disseram <br />
            que você não pode te criticarem dizendo que o Instagram não é <br />
            seu lugar ou deram apelidinhos como "blogueirinha", você... isso <br />
            mesmo... VOCÊ perde seus poderes pessoais.
            <br />
            <br />
            Esse evento foi criado para você derrotar a impostora e outras <br />
            vilãs (a auto sabotadora, a sem criatividade, a vergonhosa, a <br />
            negativista, a procrastinadora, a que tem todas as informações e <br />
            não sai do lugar) e, claro! Destravar os seus super poderes no <br />
            digital.
            <br />
            <br />
            Após 4 aulas, você se sentirá livre e corajosa com o plano <br />
            estratégico desenhado para ter PRESENÇA, POSICIONAMENTO <br />
            RELEVÂNCIA, AUTORIDADE e ENGAJAMENTO no universo digital.
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
          <CardClass
            date="08 de fevereiro às 20h"
            title="A Descoberta das Vilãs do Mundo Digital"
            text="que te enfraquecem e bloqueiam seus poderes de ação"
            border="pink.600"
          />
          <CardClass
            date="09 de fevereiro às 20h"
            title="A Chave que Abrirá as Portas Certas"
            text="e te revelará seus poderes e talentos únicos e que precisam ser conhecidos 
            no Mundo online."
            border="purple.400"
          />
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
          <CardClass
            date="10 de fevereiro às 20h"
            title="As Técnicas Perfeitas que Derrotam as Vilãs do Digital"
            text="que aumentarão seus super poderes e de darão força e coragem 
            para agir de maneira eficaz e assertiva."
            border="purple.400"
          />
          <CardClass
            date="11 de fevereiro às 20h"
            title="O Plano Estratégico Definitivo"
            text="que revelará os segredos do Instagram, 
            destravará seus poderes de forma permanente portencializará seus talentos no online e 
            escalará suas conquistas tanto na vidade real como no digital."
            border="pink.600"
          />
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
        <Text fontWeight="bold" fontSize="1.5rem" color="white" lineHeight="1" mt="24" textAlign="center">
          Prazer... <strong> EU SOU KELLY KRIS,</strong> serei <strong> SUA MENTORA</strong> e te
          <br />
          transformarei num VERDADEIRO DIAMANTE!
        </Text>
        <HStack w="100%" justify="flex-end" pr="44">
          <Text w="50%" fontWeight="400" fontSize="0.9rem" color="white" mt="16">
            Oi, poderosa! Deixa eu te contar um pouco da minha trajetória e como eu posso te ajudar aqui no online.
            <br />
            <br />
            Sou Palestrante, Mentora e Estrategista de Marketing para Redes Sociais, Marketing de
            Influência e de Conteúdo. E, claro... apaixonada por Desenvolvimento Humano, pelo SEU
            desenvolvimento.
            <br />
            <br />
            Uso a influência aliada ao marketing digital para crescer negócios já mais de 6
            anos em treinamentos indivíduais e de equipes, palestras e mentorias.
            <br />
            <br />
            Já transformei mais de 5.000 VIDAS e lapidei verdadeiros diamantes que se destacam
            profissionalmente nas redes sociais, de maneira muito eficaz, clara e assertiva.
            <br />
            <br />
            Deixa eu te contar o segredo, como eu faço isso? Eu ensino o jeito certo de criar
            presença, relevâncoa, possionamento e reconhecimento como autoridades nas mídias
            sociais, tudo isso usando estratégias do digital.
            <br />
            <br />
            Isso é tão poderoso, mas tão poderoso... que eu criei métodos que unem técnicas do
            Marketing de Influ~encia, Conteúdo e Pessoal, para VOCÊ que deseja PRESENÇA,
            POSICIONAMENTO, RELEVÂNCIA, AUTORIDADE e ENGAJAMENTO no mar de estrelas do digital.
            <br />
            <br />
            Sabe poderosa?! Eu me especializei em destravar duversis talentos, aqui no digital,
            e agora crei esse evento especial ONLINE e GRATUTITO, pois quero que você aprenda
            e ilumine todos seus super poderes. Vamos juntas?
          </Text>
        </HStack>
        <Button
          w="30rem"
          py="7"
          mt="12"
          mb="12"
          color="white"
          bg="pink.600"
          fontSize="sm"
          boxShadow="0 0 50px #E21F7E"
          transition="0.2s"
          _hover={{
            bg: 'pink.600'
          }}
        >
          QUERO ME INSCREVER AGORA
        </Button>
      </Flex>
      <Footer />
    </>
  );
}