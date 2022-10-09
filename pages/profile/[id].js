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
import { ProfileCardProfile } from '../../components/ProfileCardProfile'


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
      <ProfileCardProfile profile={profile} />
      {publications.map((pub, index) => (
        <Stack key={index} border={'1px'} borderRadius={10} borderColor={'#FA5985'} p={5} m={5}>
          <Text>{pub.metadata.content}</Text>
        </Stack>
      ))}
    </Container>
  )
}

