import { Experience } from '@awkiamaru/components'
import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Luis Fernando - FullStack Developer</title>
      </Head>
      <Box as="main" py="115px" px={4} maxWidth={500} mx="auto">
        <Grid
          templateColumns="repeat(4, 1fr)"
          mb={10}
          alignItems="center"
          width="100%"
          mx="auto"
          columnGap="1"
          px="0"
        >
          <GridItem colSpan={1} justifyContent="center">
            <Image
              rounded="full"
              alt="profile"
              src="/profile.jpeg"
              width={{ base: '80%' }}
            />
          </GridItem>
          <GridItem colSpan={3}>
            <Box>
              <Heading as="h1" size="lg" fontWeight="medium">
                Luis Fernando
              </Heading>
              <Text fontSize="small" fontWeight="normal" color="GrayText">
                Product-focused Fullstack Developer
              </Text>
            </Box>
          </GridItem>
        </Grid>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={4} fontWeight="medium">
            About
          </Heading>
          <Text fontSize="normal" fontWeight="normal" color="GrayText">
            I am always looking for opportunities to expand my knowledge and
            skills, I also like to stay up to date on technology trends and I
            also enjoy learning about business models. I see teamwork as the
            most efficient way to work. During my time at CERC, I worked alone
            for a long time, but when i started working with a high performing
            team, it made me realize how great efficiency really is. Not only
            that, developing promising colleagues and learning from them
            motivates me even more.
          </Text>
        </Box>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={10} fontWeight="normal">
            Work Experience
          </Heading>
          <Experience
            href="https://www.marvin.com.vc"
            side="2022 - present"
            title="Marvin - Software Development Engineer"
            desc={`
            As a software development engineer, I participate in the area that is responsible 
            for the EC (merchant) experience from onboarding to the acceptance of the payment request,
            using the merchant receivables in these transactions. In this process i work with event-driven architecture
            `}
            stack="Kotlin · TypeScript · React.js · Spring Boot · JavaScript · Spring Framework · Spring Webflux · PostgreSQL · Docker · Terraform · AWS · Azure DevOps(CI/CD)"
          />
          <Experience
            href="https://www.cerc.inf.br"
            side="2020 - 2021"
            title="CERC - Software Engineer |"
            desc={`
            As Software Engineer I worked in many areas inside the company,
            on the registration of financial assets such as bank securities (CDB/RDB),
            credit (CCB/CPR) and payment receivables. In this process I worked with different 
            architectures such as micro-services, micro-frontends and event-driven architecture
            `}
            stack="Kotlin · TypeScript · NodeJs · Quarkus · Vertx · Azure DevOps(CI/CD) · Apache Beam · Java · Spring Boot · Spring Framework · Spring Webflux · Angular · Kubernets · Docker · Google Cloud"
          />
          <Box paddingLeft="8">
            <Experience
              href="https://www.cerc.inf.br"
              side="2019 - 2020"
              title="CERC - Internship Software Developer"
              desc={`
              During my internship at CERC, 
              I worked on the bank securities registration system (CDB/RDB), 
              adding new features and giving maintenance on the legacy systems learning
              a lot about the company business rules
              `}
              stack="Java · Spring Boot · Spring Framework · PostgreSQL · Apache Beam(Dataflow) · Google Cloud · Angular · Docker"
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}
