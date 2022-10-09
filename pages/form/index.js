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
import Head from 'next/head';
import { useState } from 'react';
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const PK = '410f0303402e5311f3a6f5d7859222ebe7c94e3e8b1afe981ede1e75a02e8bfb'; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

  export default function Form() {

    const [text, settext] = useState('')
    const [ipfs, setipfs] = useState('')


    const sendMessage = async () => {
      try {
        const apiResponse = await PushAPI.payloads.sendNotification({
          signer,
          type: 3, // target
          identityType: 2, // direct payload
          notification: {
            title: `🥥 COCOPUSH`,
            body: `you have a new proposal!`
          },
          payload: {
            title: `🥥 COCOPUSH`,
            body:  `you have a new proposal!`,
            cta: '',
            img: ''
          },
          recipients: 'eip155:5:0xA081e1dA16133bB4Ebc7Aab1A9B0588A48D15138', // recipient address
          channel: 'eip155:5:0x4A5b210B97DDa05cD26ad45bCBF18d015BD3693D', // your channel address
          env: 'staging'
        });
        
        // apiResponse?.status === 204, if sent successfully!
        console.log('API repsonse: ', apiResponse);
      } catch (err) {
        console.error('Error: ', err);
      }
      console.log('Message: ', text, ipfs);
    }
    return (
      <Container maxW="sm">
        <Stack >
       
          <Stack>
            <Textarea boxShadow='lg' mt="29px" h="351px" w="342px" placeholder="Text" borderRadius={'12px'}   onChange={(e) => settext(e.target.value)}/>
          </Stack>
          <Stack>
            <Input boxShadow='lg' mt="5px" h="50px" w="342px" placeholder="Url" borderRadius={'12px'}   onChange={(e) => setipfs(e.target.value)}/>
          </Stack>
          <Stack>
            <Button mt="20px" h="54px" w="343px" mb="34px"
                  borderRadius={'12px'}
                  bgGradient="linear(to-r, #FA5985, #FDC731)"
                  color={'#FFFFFF'}
                  onClick={sendMessage}
                  > Send Proposal
            </Button> 
          </Stack>
        </Stack>
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

/**
 * 
 <Stack mt="34px">
              <HStack h="52px" w="342px"
                  borderRadius={'40px'}
                  bgGradient="linear(to-r, #FA5985, #FDC731)"
                  color={'#FFFFFF'}>
                    <Stack></Stack>
                    <Stack></Stack>
              </HStack>
          </Stack>
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
 */