import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'


export const ProfileCard = ({profile}) => {
    return (
        <Center py={6}>
          <Box
            w={'352px'}
            minH={'406px'}
            borderRadius={'24px'}
            bg={'white'}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
          >
            <Image
              h={'138px'}
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
             <HStack>
            <Avatar src={'https://assets.lenster.xyz/images/badges/ens.png'} />    
            <Avatar />  
            <Avatar />  
            </HStack>   
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
                bg={'#151f21'}
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
