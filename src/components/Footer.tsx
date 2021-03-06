import { Text, VStack } from "@chakra-ui/react";

export function Footer() {
  return (
    <VStack
      w="100vw"
      minH="20vh"
      bg="purple.900"
      textAlign="center"
      px={["4", "4", "52"]}
      py="10"
      align="center"
      justify="center"
      spacing="3"
    >
      <Text fontWeight="400" fontSize="0.9rem" color="white">(NOME) 2022 Todos direitos reservados</Text>

      <Text fontWeight="300" fontSize="0.7rem" color="white">
        Atenção Nós não compartilhamos seu contato com terceiros.
        O tratamento de dados nesse aspecto <br /> acontece em conformaidade com a Lei de
        Proteção de Dados. Você está seguro(a) e pode se <br /> descadastrar em qualquer momento.
      </Text>
    </VStack>
  );
}