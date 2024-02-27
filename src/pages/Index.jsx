import React, { useState } from "react";
import { ChakraProvider, Box, VStack, Heading, Text, Input, Button, InputGroup, InputLeftAddon, Container, SimpleGrid, Image, Badge, Link } from "@chakra-ui/react";
import { FaSearch, FaUserMd, FaLinkedin, FaHospital } from "react-icons/fa";

const Index = () => {
  const [npiNumber, setNpiNumber] = useState("");

  const handleInputChange = (event) => {
    setNpiNumber(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Submit NPI number for verification:", npiNumber);
    // Here you would handle the NPI number submission for verification
  };

  return (
    <ChakraProvider>
      <Container maxW="container.xl">
        <VStack spacing={8} py={10}>
          <Heading as="h1" size="2xl">
            MedCVChain
          </Heading>
          <Text fontSize="lg">A blockchain-based verification platform for healthcare professionals.</Text>

          <InputGroup>
            <InputLeftAddon children={<FaUserMd />} />
            <Input type="text" placeholder="Enter your NPI number" value={npiNumber} onChange={handleInputChange} />
            <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSubmit}>
              Verify
            </Button>
          </InputGroup>

          <SimpleGrid columns={2} spacing={10}>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl">For Clinicians</Heading>
              <Text mt={4}>Create your verified CV in minutes. Keep your credentials up-to-date with blockchain security.</Text>
              <Button mt={4} colorScheme="teal">
                Get Started
              </Button>
            </Box>

            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl">For Employers</Heading>
              <Text mt={4}>Find qualified candidates with verified credentials. Streamline your hiring process.</Text>
              <Button mt={4} colorScheme="teal">
                Search Candidates
              </Button>
            </Box>
          </SimpleGrid>

          <Box>
            <Heading as="h3" size="lg">
              Featured Jobs
            </Heading>
            <VStack spacing={4} mt={4} align="stretch">
              {Array.from({ length: 3 }).map((_, index) => (
                <Box key={index} p={5} shadow="md" borderWidth="1px">
                  <Heading fontSize="md">Job Title {index + 1}</Heading>
                  <Text mt={2}>Hospital Name</Text>
                  <Badge mt={1} colorScheme="green">
                    Verified
                  </Badge>
                  <Button mt={4} rightIcon={<FaHospital />}>
                    Apply Now
                  </Button>
                </Box>
              ))}
            </VStack>
          </Box>

          <Box textAlign="center">
            <Text>Connect with us on</Text>
            <Link href="https://www.linkedin.com" isExternal>
              <Button colorScheme="linkedin" leftIcon={<FaLinkedin />} mt={2}>
                LinkedIn
              </Button>
            </Link>
          </Box>

          <Image src="https://images.unsplash.com/photo-1516841273335-e39b37888115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsc3xlbnwwfHx8fDE3MDkwMDI2NzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Healthcare Professionals" boxSize="sm" objectFit="cover" />
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
