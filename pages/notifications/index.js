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

const data = [
  {
    status: 'pending',
    variant: 'gray',
    name: 'Hollyherdon.lens',
    image: 'https://img.seadn.io/files/7a52159b156c616c0d632dc05c25dc1a.png?fit=max&w=1000',
    id: 2,
  },
  {
    status: 'denegada',
    variant: 'red',
    name: 'Juanma.lens',
    image: 'https://img.seadn.io/files/b0a2331a53def406ee438364ed530b4f.png?fit=max&w=1000',
    id: 1,
  },
  {
    status: 'aceptada',
    variant: 'green',
    name: 'Mati.lens',
    image: 'https://bit.ly/ryan-florence',
    id: 3,
  },
]
export default function Notifications () {
  const [status, setstatus] = useState('pending')
  return (
    <Container maxW="sm">
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
      <ProposalCard />
      {data.map((person) => {
        return <Card props={person} key={person.key} />
      })}
      </Stack>
    </Container>
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

const ProposalCard = () => {
  return (
    <HStack>

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
              <IconButton w={'40px'} variant='ghost' isRound aria-label="Search database" icon={<CheckIcon color={'#FF5E51'}/>} border={'2px solid #FF5E51'} />
              <IconButton w={'40px'} variant='ghost'  isRound aria-label="Search database" icon={<CloseIcon color={'#00D387'}  />} border={'2px solid #00D387'}/>
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
