import Image from 'next/image'
import { Container, Box } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box 
      borderRadius="lg"
      bg="red" 
      p={3} 
      mb={6} 
      align="center">
        Hello, Saya Penyuka dan Saya Pembelajar, Senang Bertemu Kalian
      </Box>
    </Container>
  )
  
}

export default Page
