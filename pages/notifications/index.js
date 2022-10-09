import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Badge,
  Button,
  Container,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

const data = [
  {
    status: 'pending',
    variant: 'gray',
    name: 'Ken Dodds',
    image: 'https://bit.ly/kent-c-dodds',
    id: 2,
  },
  {
    status: 'denegada',
    variant: 'red',
    name: 'Dan Abrahmov',
    image: 'https://bit.ly/dan-abramov',
    id: 1,
  },
  {
    status: 'aceptada',
    variant: 'green',
    name: 'Ryan Florence',
    image: 'https://bit.ly/ryan-florence',
    id: 3,
  },
]
export default function Notifications () {
  return (
    <Container p={10}>
      <Heading p={10}>🚧 Under construction, coming soon... 🏗</Heading>
      {data.map((person) => {
        return <Card props={person} key={person.key} />
      })}
    </Container>
  )
}

const Card = ({ props }) => {
  const [open, setopen] = useState(false)
  return (
    <Stack border={'1px'} borderColor={'white'} borderRadius={10} p={5} m={5} w={'100%'}>
      <HStack justifyContent={'space-between'}>
        <HStack>
          <Avatar name={props.name} src={props.image} />
          <Stack justifyContent={'flex-start'}>
            <Heading size={'sm'}>{props.name}</Heading>
            <Button
              colorScheme="teal"
              variant="link"
              size={'xs'}
              onClick={() => setopen(!open)}
            >
              {open ? '-' : '+'} Info
            </Button>
          </Stack>
        </HStack>
        <Badge colorScheme={props.variant}>{props.status}</Badge>
        <Stack>
          {props.status == 'pending' && (
            <HStack>
              <IconButton aria-label="Search database" icon={<CheckIcon />} />
              <IconButton aria-label="Search database" icon={<CloseIcon />} />
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
