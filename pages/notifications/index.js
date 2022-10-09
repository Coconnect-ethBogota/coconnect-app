import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import NotificationIcon from '../../components/icons/NotificationIcon'
import ProposalsIcon from '../../components/icons/ProposalsIcon'
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const PK = '410f0303402e5311f3a6f5d7859222ebe7c94e3e8b1afe981ede1e75a02e8bfb'; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const dataaa = [
  {
    status: 'pending',
    variant: 'gray',
    name: 'Hollyherdon.lens',
    image: 'https://img.seadn.io/files/7a52159b156c616c0d632dc05c25dc1a.png?fit=max&w=1000',
    id: 2,
  },
  {
    status: 'denied',
    variant: 'red',
    name: 'Juanma.lens',
    image: 'https://img.seadn.io/files/b0a2331a53def406ee438364ed530b4f.png?fit=max&w=1000',
    id: 1,
  },
  {
    status: 'accepted',
    variant: 'green',
    name: 'Mati.lens',
    image: 'https://bit.ly/ryan-florence',
    id: 3,
  },
]
const sendMessageAccepted = async () => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `🥥 COCOPUSH`,
        body: `Your proposal was accepted ✅`
      },
      payload: {
        title: `🥥 COCOPUSH`,
        body:  `Your proposal was accepted ✅`,
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

const sendMessageDenied = async () => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `🥥 COCOPUSH`,
        body: `Your proposal was denied ❌`
      },
      payload: {
        title: `🥥 COCOPUSH`,
        body:  `Your proposal was denied ❌`,
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

export default function Notifications () {
  const [status, setstatus] = useState('pending')

  const [data, setdata] = useState([
    {
      status: 'pending',
      variant: 'gray',
      name: 'Hollyherdon.lens',
      image: 'https://img.seadn.io/files/7a52159b156c616c0d632dc05c25dc1a.png?fit=max&w=1000',
      id: 2,
    },
    {
      status: 'denied',
      variant: 'red',
      name: 'Juanma.lens',
      image: 'https://img.seadn.io/files/b0a2331a53def406ee438364ed530b4f.png?fit=max&w=1000',
      id: 1,
    },
    {
      status: 'accepted',
      variant: 'green',
      name: 'Mati.lens',
      image: 'https://bit.ly/ryan-florence',
      id: 3,
    },
  ])

  return (
    <>
      <HStack justify={'space-between'} pt={'25px'}>
       <Box w={'48px'} h={'48px'} /> 
       <HStack >
        <NotificationIcon />
       <ProposalsIcon  />
       </HStack>
       <Avatar size={'md'}/>
      </HStack>
      <Stack alignItems={'center'} w={'100%'} mt={'20px'}>
      <SwipeUp status={status} onClick={setstatus}/>
      {data.map((person) => {
        return <Card props={person} key={person.key} />
      })}
      </Stack>
    </>
  )
}

const SwipeUp = ({status, onClick}) => {
  return (
    <HStack mb={'16px'} w={'339px'} h={'52px'} borderRadius={'50px'} bgColor={'#F0F0F0'} justify={'space-between'} spacing={1} p={'0px 11px'}>
      <Stack onClick={() => onClick('pending')} display={'flex'} justifyContent={'center'} alignItems={'center'} p={'9px 50px'}   bgGradient={status !== 'pending' ? '' : "linear(to-r, #FA5985, #FDC731)" } borderRadius={'40px'} w={'146px'} h={'38px'}>
      <Text color={status !== 'pending' ?  '#000000': 'white' } fontSize={'14px'} fontWeight={700}>Pending</Text>
      </Stack>
      <Stack onClick={() => onClick('aceptada')} display={'flex'} justifyContent={'center'} alignItems={'center'} p={'9px 50px'}   bgGradient={status === 'pending' ? '' : "linear(to-r, #FA5985, #FDC731)" } borderRadius={'40px'} w={'146px'} h={'38px'}>
      <Text color={status === 'pending' ?  '#000000': 'white' } fontSize={'14px'} fontWeight={700}>Reject</Text>
      </Stack>
    </HStack>
  )
}

const Card = ({ props }) => {
  const [open, setopen] = useState(false)
  return (
    <Stack border={'3px solid'} borderColor={'#FA5985'} borderRadius={10} p={5} m={5} w={'364px'} minHeight={'107px'}>
      <HStack justifyContent={'space-between'}>
        <HStack>
          <Avatar name={props.name} src={props.image} />
          <Stack justifyContent={'flex-start'}>
            <Heading fontSize={'16px'} fontWeight={'700'}>{props.name}</Heading>
            <Button
             color={'#FA5985'}
              variant="link"
              size={'xs'}
              onClick={() => setopen(!open)}
              fontSize={'12px'}
              fontWeight={'600'}
            >
              {open ? '-' : '+'} Show message
            </Button>
          </Stack>
        </HStack>
        {props.status !== 'pending' && (
        <Badge colorScheme={props.variant} borderRadius={'10px'} fontSize={'12px'} fontWeight={600}>{props.status}</Badge>
        )}
        <Stack>
          {props.status == 'pending' && (
            <HStack>
              <IconButton onClick={sendMessageAccepted} w={'40px'} variant='ghost' isRound aria-label="Search database" icon={<CheckIcon color={'#00D387'} />} border={'2px solid #00D387'} />
              <IconButton onClick={sendMessageDenied} w={'40px'} variant='ghost'  isRound aria-label="Search database" icon={<CloseIcon  color={'#FF5E51'} />} border={'2px solid #FF5E51'}/>
            </HStack>
          )}
        </Stack>
      </HStack>
      {open && (
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      )}
    </Stack>
  )
}
