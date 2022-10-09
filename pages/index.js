import {
  Container,
  HStack,
  Input,
  Tab,
  TabList,
  Tabs,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ProfileCard } from '../components/ProfileCard'
import { client, recommendProfiles, searchProfiles } from '../api'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Inicio() {

  const [profiles, setprofiles] = useState([])
  const [loading, setloading] = useState(true)
  useEffect(() => {
    fetchProfiles()
    setloading(false)
  }, [])



  async function fetchProfiles() {
    try {
      const response = await client.query(recommendProfiles).toPromise()
      console.log('original: ', response.data.recommendedProfiles)
      setprofiles(response.data.recommendedProfiles)
      console.log('data: ', response.data.recommendedProfiles);
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
      <HStack mt={'39px'} p={'0px 15px'} justify={'space-between'}>
        <Input
          w={'150px'}
          h={'40px'}
          borderRadius={'12px'}
          placeholder="Search"
          onChange={(e) => searchProfilesLens(e.target.value)}
        />
        <ConnectButton />
      </HStack>
      <HStack justify={'center'} mt={'20px'}>
        <Tabs>
          <TabList>
            <Tab>🔥 Trend</Tab>
            <Tab>👤 Followers</Tab>
            <Tab>🔁 Mirrors</Tab>
          </TabList>
        </Tabs>
      </HStack>
      {profiles.map((profile, index) => (
        <Link href={`/profile/${profile.id}`} key={index}>
          <a>
          <ProfileCard profile={profile}/>
          </a>
        </Link>
      ))}
 
    </Container>
  )
}
