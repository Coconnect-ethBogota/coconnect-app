import Link from 'next/link'
import { useEffect, useState } from 'react'
import { client, recommendProfiles, searchProfiles } from '../api'
import {
  Avatar,
  Container,
  HStack,
  Input,
  Stack,
  Text,
  WrapItem,
} from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Home() {
  const [profiles, setprofiles] = useState([])
  useEffect(() => {
    fetchProfiles()
  }, [])

  async function fetchProfiles() {
    try {
      const response = await client.query(recommendProfiles).toPromise()
      console.log('original: ', response.data.recommendedProfiles)
      setprofiles(response.data.recommendedProfiles)
    } catch (error) {
      console.log(error)
    }
  }

  async function searchProfilesLens(searchString) {
    try {
      if (searchString == '') {
        await fetchProfiles()
      } else {
        const response = await client.query(searchProfiles, {
          query: searchString, type: 'PROFILE'
        }).toPromise()
        console.log('search: ', response.data.search.items )
        console.log('busqueda: ', searchString);
        setprofiles( response.data.search.items )
      }
    } catch (error) {
      console.log(error)
    }
  }


  

  return (
    <Container maxW="sm">
      <HStack>
        <Input w={'229px'} h={'40px'} border={'1px solid'} borderColor={'linear-gradient(45deg, blue, red)'} />
        <ConnectButton />
      </HStack>
      <HStack alignContent="space-between" mt={'20px'}>
        <Input placeholder="Search by profile..." size="lg"  onChange={(e) => searchProfilesLens(e.target.value)}/>
      </HStack>
      <Stack spacing={3} alignItems='flex-start‰' mt={'20px'}>
      {profiles.map((profile, index) => (
        <Link href={`/profile/${profile.id}`} key={index}>
          <a>
          <HStack spacing={3} p={1} w='100%'>
                <Avatar name={profile.handle} src={profile.picture?.original?.url}/>
              <Text>{profile.handle}</Text>
              <Text>{profile.bio}</Text>
            </HStack>
          </a>
        </Link>
      ))}
      </Stack>
    </Container>
  )
}

const PerfilItem = (name) => {
  return (
    <HStack spacing={3} p={1} w='100%'>
      <WrapItem>
        <Avatar name={name} src="https://bit.ly/sage-adebayo" />
      </WrapItem>
      <Text>{name}</Text>
    </HStack>
  )
}
