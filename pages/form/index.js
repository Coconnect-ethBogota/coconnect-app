import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Container,
    Avatar,
    Textarea,
  } from '@chakra-ui/react';
  
  export default function Form() {
    return (
      <Container maxW="sm">
        <Stack ml="24px" mr="24px">
          <Stack mt="34px">
              <HStack h="52px" w="342px"
                  borderRadius={'40px'}
                  bgGradient="linear(to-r, #FA5985, #FDC731)"
                  color={'#FFFFFF'}>
                    <Stack></Stack>
                    <Stack></Stack>
              </HStack>
          </Stack>
        </Stack>
       <CompleteForm />
      </Container>
    );
  }


  const CompleteForm = () => {
    return (
      <>
        <Stack ml="24px" mr="24px">
          <HStack justifyContent={'space-between'}>
            <Avatar mt="28px" ml="27px" />
            <HStack>
              <Avatar mt="28px" ml="80px"/>
                <Stack  h="29px" w="104px" justify={'center'} align={'end'}>
                  <Text mt="28px" fontWeight={800} fontSize="14px" whiteSpace={'pre'}>1 MATIC</Text>
                  <Text mt="28px" fontWeight={800} fontSize="14px" whiteSpace={'pre'}>Aprox per post</Text>
                </Stack>
            </HStack>
          </HStack>
          <Stack>
            <HStack mt="28px">
              <Input boxShadow='lg' h="50px" w="342px" placeholder="Url" borderRadius={'12px'}/>
              <Input boxShadow='lg' h="50px" w="342px" placeholder="Url" borderRadius={'12px'}/>
            </HStack>
          </Stack>
          <Stack>
            <Input mt="28px" boxShadow='lg' h="50px" w="342px" placeholder="Url" borderRadius={'12px'}/>
          </Stack>
          <Stack>
            <Text mt="20px" fontWeight={800} fontSize="14px" whiteSpace={'pre'}>Amount per second</Text>
          </Stack>
          <Stack>
            <Textarea boxShadow='lg' mt="29px" h="220px" w="342px" placeholder="Text" borderRadius={'12px'}/>
          </Stack>
          <Stack>
            <Input boxShadow='lg' mt="5px" h="50px" w="342px" placeholder="Url" borderRadius={'12px'}/>
          </Stack>
          <Stack>
            <Button mt="20px" h="54px" w="343px" mb="34px"
                  borderRadius={'12px'}
                  bgGradient="linear(to-r, #FA5985, #FDC731)"
                  color={'#FFFFFF'}
                  > Send Proposal
            </Button> 
          </Stack>
        </Stack>
      </>
    )
  }

  const SimpleForm = () => {
    return (
      <>
        <Stack ml="24px" mr="24px">
          <HStack justifyContent={'space-between'}>
            <Avatar mt="28px" ml="27px" />
            <HStack>
              <Avatar mt="28px" ml="80px"/>
                <Stack  h="29px" w="104px" justify={'center'} align={'end'}>
                  <Text mt="28px" fontWeight={800} fontSize="14px" whiteSpace={'pre'}>1 MATIC</Text>
                  <Text mt="28px" fontWeight={800} fontSize="14px" whiteSpace={'pre'}>Aprox per post</Text>
                </Stack>
            </HStack>
          </HStack>
          <Stack>
            <Textarea boxShadow='lg' mt="29px" h="351px" w="342px" placeholder="Text" borderRadius={'12px'}/>
          </Stack>
          <Stack>
            <Input boxShadow='lg' mt="5px" h="50px" w="342px" placeholder="Url" borderRadius={'12px'}/>
          </Stack>
          <Stack>
            <Button mt="20px" h="54px" w="343px" mb="34px"
                  borderRadius={'12px'}
                  bgGradient="linear(to-r, #FA5985, #FDC731)"
                  color={'#FFFFFF'}
                  > Send Proposal
            </Button> 
          </Stack>
        </Stack>
      </>
    )
  }