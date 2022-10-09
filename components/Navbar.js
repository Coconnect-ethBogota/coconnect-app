import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Heading,
  Input,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useState, useEffect } from 'react'
import { client, getProfileByOwner } from '../api'
import { useDisconnect, useAccount } from 'wagmi'

export default function Navbar () {
  const [profile, setProfile] = useState([])
  const { disconnect } = useDisconnect()
  const { isConnected } = useAccount()
  console.log('conectado: ', isConnected)
  useEffect(() => {
    fetchProfile()
  }, [])

  async function fetchProfile() {
    try {
      const returnedProfile = await client.query(getProfileByOwner).toPromise()
      console.log('data: ', returnedProfile.data.profiles.items[0])
      setProfile(returnedProfile.data.profiles.items[0])
    } catch (err) {
      console.log('error fetching profile...', err)
    }
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link href={`/`}>
            <Heading size={'md'} w={'30%'}>
              Lens 🌿
            </Heading>
          </Link>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={3} alignItems={'center'}>
              {!isConnected && <ConnectButton />}
              {isConnected && (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                  >
                    <Avatar
                      size={'sm'}
                      src={profile.picture?.original?.url}
                      alt={profile.handle}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={profile.picture?.original?.url}
                        alt={profile.handle}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p> {profile.handle}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <Link href={`/dashboard`}>
                      <MenuItem>Dashboard</MenuItem>
                    </Link>
                    <MenuItem onClick={() => disconnect()}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
