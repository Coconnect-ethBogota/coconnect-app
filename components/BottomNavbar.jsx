import { HStack } from '@chakra-ui/react'
import React from 'react'
import ChatIcon from './icons/ChatIcon'
import CloseIcon from './icons/CloseIcon'
import CocoIcon from './icons/CocoIcon'
import AlertIcon from './icons/AlertIcon'
import Link from 'next/link'

export const BottomNavbar = () => {
  return (
    <HStack 
    w={'357px'} 
    h={'90px'} 
    justify={'space-between'}
    position={'fixed'}
    bottom={'26px'}
    zIndex={99999}
    borderRadius={'20px'}
    bgColor={'white'}
    p={'25px 43px 25px 43px'}
    align={'center'}
    boxShadow={'lg'}
    >
      <Link href={`/`}>
     <CocoIcon />
      </Link>
      <Link href={`/notifications`}>
      <AlertIcon />
      </Link>
      <Link href={`/notifications`}>
     <ChatIcon />
      </Link>
    </HStack>
  )
}
