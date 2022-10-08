/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ethers } from 'ethers'
import { client, getPublications, getProfiles } from '../../api'

import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  Box,
  Center,
  Flex,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'


const CONTRACT_ADDRESS = '0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d'

export default function Profile() {
  const [profile, setProfile] = useState()
  const [publications, setPublications] = useState([])
  const [account, setAccount] = useState('')
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      fetchProfile()
    }
  }, [id])

  async function fetchProfile() {
    try {
      const returnedProfile = await client
        .query(getProfiles, { id })
        .toPromise()
      const profileData = returnedProfile.data.profiles.items[0]
      setProfile(profileData)

      const pubs = await client
        .query(getPublications, { id, limit: 50 })
        .toPromise()

      setPublications(pubs.data.publications.items)
    } catch (err) {
      console.log('error fetching profile...', err)
    }
  }

  async function connectWallet() {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    console.log('accounts: ', accounts)
    accounts[0]
    setAccount(account)
  }

  function getSigner() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    return provider.getSigner()
  }

  async function followUser() {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, getSigner())

    try {
      const tx = await contract.follow([id], [0x0])
      await tx.wait()
      console.log(`successfully followed ... ${profile.handle}`)
    } catch (err) {
      console.log('error: ', err)
    }
  }

  if (!profile) return null
  console.log('profile: ', profile)
  return (
    <Container maxW="sm">
      <Card profile={profile} />
      {publications.map((pub, index) => (
        <Stack key={index} border={'1px'} borderRadius={10} borderColor={'whiteAlpha.600'} p={5} m={5}>
          <Text>{pub.metadata.content}</Text>
        </Stack>
      ))}
    </Container>
  )
}

const Card = ({profile}) => {
  console.log('perfil: ', profile);

  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Image
          h={'120px'}
          w={'full'}
          src={
            profile.coverPicture == null ?
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            : profile.coverPicture?.original?.url
          }
          objectFit={'cover'}
          alt={profile.handle}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={profile.picture?.original?.url}
            alt={profile.handle}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
             {profile.handle}
            </Heading>
            <Text color={'gray.500'}>{profile.bio}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{profile.stats.totalFollowing}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
              Following
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{profile.stats.totalFollowers}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
          </Stack>
          <Link href={`/form`}>
          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            Contact
          </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  )
}

/**
     <div>
      <div style={profileContainerStyle}>
        <button onClick={connectWallet}>Sign In</button>
        <Image
          width="200px"
          height="200px"
          src={profile.picture?.original?.url}
          alt='algo'
        />
        <p>{profile.handle}</p>
        {
            publications.map((pub, index) => (
              <div key={index}>
                <p>{pub.metadata.content}</p>
              </div>
            ))
        }
        <button onClick={followUser}>Follow User</button>
      </div>
    </div>
 */
