import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react'
import React from 'react'

export const ProfileCardProfile = ({ profile }) => {
  console.log('profile', profile)
  return (
    <Center py={6}>
      <Box
        w={'352px'}
     
        bg={'white'}
        boxShadow={'2xl'}
        borderRadius={'24px'}
        overflow={'hidden'}
      >
        <Image
          h={'138px'}
          w={'full'}
          src={
            profile.coverPicture == null
              ? 'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
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
        <Flex justify={'space-between'} m={'0px 30px'} mt={-7}>
          <Stack align={'center'}>
            <Text fontWeight={700} fontSize={'18px'}>
            {profile.stats.totalFollowing}
            </Text>
            <Text fontWeight={500} fontSize={'12px'}>
            Following
            </Text>
          </Stack>
          <Stack align={'center'}>
            <Text fontWeight={700} fontSize={'18px'}>
            {profile.stats.totalFollowers}
            </Text>
            <Text fontWeight={500} fontSize={'12px'}>
              Followers
            </Text>
          </Stack>
        </Flex>
        <HStack justifyContent={'center'} mt={'16px'}>
          <Avatar
            size={'sm'}
            src={'https://assets.lenster.xyz/images/badges/ens.png'}
          />
          <Avatar
            size={'sm'}
            src={
              'https://lens.xyz/static/media/lenster.8b83c79a3429715f184ddf346467bc75.svg'
            }
          />
          <Avatar
            size={'sm'}
            src={'https://assets.lenster.xyz/images/badges/ens.png'}
          />
        </HStack>
        <Box p={6}>
          <Stack align={'center'}>
            <Heading fontSize={'20px'} fontWeight={700}>
              {profile.handle}
            </Heading>
            <Text fontSize={'16px'} fontWeight={400}>
              {profile.bio}
            </Text>
            <HStack pt={'20px'}>
              <Tag
                h={'26px'}
                w={'73px'}
                bgGradient="linear(to-r, #FA5985, #FDC731)"
              >
                <Text
                  fontWeight={700}
                  fontSize={'10px'}
                  color={'white'}
                  whiteSpace={'pre'}
                >
                  # Finances
                </Text>
              </Tag>
              <Tag
                h={'26px'}
                w={'73px'}
                bgGradient="linear(to-r, #FA5985, #FDC731)"
              >
                <Text
                  fontWeight={700}
                  fontSize={'10px'}
                  color={'white'}
                  whiteSpace={'pre'}
                >
                  # Finances
                </Text>
              </Tag>
              <Tag
                h={'26px'}
                w={'73px'}
                bgGradient="linear(to-r, #FA5985, #FDC731)"
              >
                <Text
                  fontWeight={700}
                  fontSize={'10px'}
                  color={'white'}
                  whiteSpace={'pre'}
                >
                  # Finances
                </Text>
              </Tag>
            </HStack>
            <HStack spacing={10} pt={'25px'} pb={'36px'}>
              <Stack align={'center'}>
                <Text fontWeight={800} fontSize={'24px'}>
                  68 %
                </Text>
                <Text fontSize={'8px'}>Success Rate</Text>
              </Stack>

              <Stack align={'center'} >
                <Text fontWeight={400} fontSize={'12px'}>
                  Reputacion
                </Text>
                <Text>🥥 🥥 🥥 🥥 🥥</Text>
              </Stack>
            </HStack>
            <Link href={`/form`}>
              <Button
                w={'250px'}
                h={'48px'}
                borderRadius={'12px'}
                bgGradient="linear(to-r, #FA5985, #FDC731)"
                color={'#FFFFFF'}
              >
                Contact
              </Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Center>
  )
}
