import {
    Input,
    HStack,
    Stack,
    Button,
    Text,
    Avatar,
    Textarea,
  } from '@chakra-ui/react';
import { useState } from 'react';
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const PK = '410f0303402e5311f3a6f5d7859222ebe7c94e3e8b1afe981ede1e75a02e8bfb'; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

  export default function Form() {

    const [text, settext] = useState('')
    const [ipfs, setipfs] = useState('')
    const [status, setstatus] = useState('pending')



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
    }
    return (
      <>
        <Stack pt="15px">
          <SwipeUp status={status} onClick={setstatus}/>
          <HStack justifyContent={'space-between'}>
            <Avatar mt="28px" ml="27px" src='https://ik.imagekit.io/lensterimg/tr:n-avatar,tr:d…fs/QmQdjYC7AkQo7azxQ5bor8xAbfbqniFEv5sFEfk3x4qaXU/' />
            <HStack m={5}>
              <Avatar mt="28px" ml="80px" src='https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png' />
                <Stack  h="29px" justify={'center'}>
                  <Text mt="28px" fontWeight={800} fontSize="14px" whiteSpace={'pre'}>1 MATIC</Text>
                  <Text mt="28px" fontWeight={800} fontSize="14px" whiteSpace={'pre'}>Aprox per post</Text>
                </Stack>
            </HStack>
          </HStack>
          <Stack>
            <Textarea boxShadow='lg' mt="29px" h="280px" w="342px" placeholder="Text" borderRadius={'12px'}   onChange={(e) => settext(e.target.value)}/>
          </Stack>
          <Stack>
            <Input boxShadow='lg' mt="5px" h="50px" w="342px" placeholder="Url" borderRadius={'12px'}   onChange={(e) => setipfs(e.target.value)}/>
          </Stack>
          <Stack>
            <Button mt="20px" h="54px" w="343px" mb="30px"
                  borderRadius={'12px'}
                  bgGradient="linear(to-r, #FA5985, #FDC731)"
                  color={'#FFFFFF'}
                  onClick={sendMessage}
                  > Send Proposal
            </Button> 
          </Stack>
        </Stack>
      </>
    );
  }

/*
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
*/
  const SwipeUp = ({status, onClick}) => {
    return (
      <HStack mb={'16px'} w={'339px'} h={'52px'} borderRadius={'50px'} bgColor={'#F0F0F0'} justify={'space-between'} spacing={1} p={'0px 11px'}>
        <Stack onClick={() => onClick('pending')} display={'flex'} justifyContent={'center'} alignItems={'center'} p={'9px 50px'}   bgGradient={status !== 'pending' ? '' : "linear(to-r, #FA5985, #FDC731)" } borderRadius={'40px'} w={'146px'} h={'38px'}>
        <Text whiteSpace={'pre'} color={status !== 'pending' ?  '#000000': 'white' } fontSize={'14px'} fontWeight={700}>Unique Post</Text>
        </Stack>
        <Stack onClick={() => onClick('aceptada')} display={'flex'} justifyContent={'center'} alignItems={'center'} p={'9px 50px'}   bgGradient={status === 'pending' ? '' : "linear(to-r, #FA5985, #FDC731)" } borderRadius={'40px'} w={'146px'} h={'38px'}>
        <Text whiteSpace={'pre'} color={status === 'pending' ?  '#000000': 'white' } fontSize={'14px'} fontWeight={700}>Monthly Post</Text>
        </Stack>
      </HStack>
    )
  }