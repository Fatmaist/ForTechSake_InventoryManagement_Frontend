import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'

const Login = () => {
    const gradientBackground = {
        background: 'linear-gradient(to right, #400E32, #CA431D)',
        width: '100%', // Memastikan lebar kontainer sesuai dengan layar
        height: '100vh', // Memastikan tinggi kontainer sesuai dengan layar
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    return (
        <Flex
        align="center"
        justify="center"
        h="100vh"
        style={gradientBackground} // Menambahkan gaya latar belakang
        >
        <Box
            maxW="10xl"
            minH="2xl"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="8"
            boxShadow="lg"
            display="flex"
            bg="white"
        >
            <Box flex="1" mr="8" bg="blue.200">
            <Box p="4">
                <Heading as="h2" size="lg" mb="4">
                For Tech's Sake Inventory Management System
                </Heading>
                <Box w="100%" h="200px" bg="gray.200" mb="4" />
                <p>Selamat datang di sistem kami. Silakan login untuk melanjutkan.</p>
            </Box>
            </Box>
            <Box flex="1" bg="green.200">
            <Box p="10">
                <Heading as="h2" size="lg" mb="4">
                Login
                </Heading>
                <form>
                <FormControl id="email" mb="4">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Email Anda" />
                </FormControl>
                <FormControl id="password" mb="4">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Password Anda" />
                </FormControl>
                <Button colorScheme="blue" type="submit" w="100%">
                    Login
                </Button>
                </form>
            </Box>
            </Box>
        </Box>
        </Flex>
    )
}

export default Login
