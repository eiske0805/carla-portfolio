import React, { memo, useContext, useEffect } from "react"
import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Heading, Text, Box, Flex, Spacer } from "@chakra-ui/react"
import { InView } from "react-intersection-observer"

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/globalContextProvider"
import Seo from "../components/seo"
import SnsNavi from "../components/sns/snsNavi"
import LanguageMenu from "../components/languageMenu"
import Arrow from "../components/arrow"
import Snail from "../components/snail"
import FieldsIcons from "../components/fields/fieldsIcons"
import FlagsIcons from "../components/flags/flagsIcons"

const IndexPage = memo(({ data }) => {
  const intl = useIntl()
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  useEffect(() => {
    dispatch({ type: intl.locale.toUpperCase() })
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [])

  const color = {
    main: { ca: "cOrange", en: "cBlue", ja: "cRed3" },
    sub: { ca: "cGray", en: "cWhite", ja: "cCreem" },
    third: { ca: "cBeige3", en: "cRed2", ja: "cGray2" },
    fourth: { ca: "cPurple", en: "cGreen3", ja: "cBlue2" },
    fifth: { ca: "cGreen", en: "cYellow2", ja: "cBeige" },
  }

  const firstName = intl.formatMessage({ id: "header.name" }).split("")
  const familyName = intl.formatMessage({ id: "header.familyname" }).split("")

  const bgImage = {
    ca: data.allImageSharp.nodes[1],
    en: data.allImageSharp.nodes[0],
    ja: data.allImageSharp.nodes[2],
  }

  return (
    <>
      <Seo title={intl.formatMessage({ id: "idiom" })} />
      <Box>
        <Box
          bg={color.main[state.selectedLanguage]}
          color={color.sub[state.selectedLanguage]}
        >
          <Box as="header" position="relative" maxW="1200px" mx="auto">
            <LanguageMenu mainColor={color.main[state.selectedLanguage]} />
            <InView triggerOnce={true}>
              {({ inView, ref }) => (
                <Flex
                  minH="100vh"
                  px={{ base: 4, md: 8, lg: 10 }}
                  pb={{ base: 4, md: 8, lg: 10 }}
                  pt="15vh"
                  direction="column"
                  mx="auto"
                  ref={ref}
                  className={
                    inView
                      ? "appear animate-title inview "
                      : "appear animate-title"
                  }
                >
                  <Heading
                    as="h1"
                    fontFamily="Fredericka the Great, New Tegomin"
                    fontSize={{
                      base: "3rem",
                      sm: "4.2rem",
                      md: "6rem",
                      lg: "8rem",
                    }}
                    lineHeight="base"
                    letterSpacing="wider"
                    textAlign="center"
                  >
                    {firstName.map((char, index) => (
                      <span key={index} className="char">
                        {char}
                      </span>
                    ))}
                  </Heading>
                  <Heading
                    as="h1"
                    fontFamily="Fredericka the Great, New Tegomin"
                    fontSize={{
                      base: "3rem",
                      sm: "4.2rem",
                      md: "6rem",
                      lg: "8rem",
                    }}
                    lineHeight="base"
                    letterSpacing="wider"
                    textAlign="center"
                  >
                    {familyName.map((char, index) => (
                      <span key={index} className="char">
                        {char}
                      </span>
                    ))}
                  </Heading>
                  <Text
                    mt={{ base: 4, md: 8, lg: 10 }}
                    fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                    textAlign="center"
                    className="item"
                  >
                    {intl.formatMessage({ id: "header.description" })}
                  </Text>
                  <Spacer />
                  <Arrow
                    fill={color.sub[state.selectedLanguage]}
                    text={intl.formatMessage({ id: "header.arrow" })}
                  />
                </Flex>
              )}
            </InView>
          </Box>
        </Box>
        <InView triggerOnce={true} rootMargin={"-150px 0px"}>
          {({ inView, ref }) => (
            <Box
              bg={color.third[state.selectedLanguage]}
              color={color.sub[state.selectedLanguage]}
              ref={ref}
              className={inView ? "appear right inview" : "appear right"}
            >
              <Box
                px={{ base: 4, md: 8, lg: 10 }}
                py={{ base: 28 }}
                maxW="1200px"
                mx="auto"
              >
                <Heading as="h2" mb={{ base: 4, lg: 8 }} className="item">
                  {intl.formatMessage({ id: "language.title" })}
                </Heading>
                <FlagsIcons />
                <Text
                  mt={{ base: 8, lg: 16 }}
                  mb={{ base: 6, lg: 12 }}
                  className="item"
                >
                  {intl.formatMessage({ id: "language.language" })}
                </Text>
                <Text mb={{ base: 6, lg: 12 }} className="item">
                  {intl.formatMessage({ id: "language.service1" })}
                </Text>
                <Text className="item">
                  {intl.formatMessage({ id: "language.service2" })}
                </Text>
              </Box>
            </Box>
          )}
        </InView>
        <Box bg={color.fourth[state.selectedLanguage]} color="cBeige">
          <Box
            px={{ base: 4, md: 8, lg: 10 }}
            py={{ base: 28 }}
            maxW="1200px"
            mx="auto"
            position="relative"
          >
            <Snail
              top={"-100px"}
              left={"0"}
              right={"auto"}
              body={"#FFE9BC"}
              shell={"#E18C7A"}
              animateDuration={"100s"}
            />
            <InView triggerOnce={true} rootMargin={"-150px 0px"}>
              {({ inView, ref }) => (
                <Box
                  ref={ref}
                  className={inView ? "appear right inview" : "appear right"}
                >
                  <Heading as="h2" mb={{ base: 8, lg: 16 }} className="item">
                    {intl.formatMessage({ id: "field.title" })}
                  </Heading>

                  <Text mb={{ base: 12, lg: 20 }} className="item">
                    {intl.formatMessage({ id: "field.service" })}
                  </Text>
                  <FieldsIcons />
                </Box>
              )}
            </InView>
          </Box>
        </Box>
        <Box color="cWhite" position="relative">
          <GatsbyImage
            image={getImage(bgImage[state.selectedLanguage])}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
            alt="bouquet"
          />
          {/* <StaticImage
            src="../images/bouquet.jpg"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
            alt="bouquet"
          /> */}
          <InView triggerOnce={true} rootMargin={"-150px 0px"}>
            {({ inView, ref }) => (
              <Box
                px={{ base: 4, md: 8, lg: 10 }}
                py={{ base: 28 }}
                maxW="1200px"
                mx="auto"
                ref={ref}
                className={inView ? "appear right inview" : "appear right"}
              >
                <Heading as="h2" mb={{ base: 8, lg: 16 }} className="item">
                  {intl.formatMessage({ id: "career.title" })}
                </Heading>
                <Text mb={{ base: 6, lg: 12 }} className="item">
                  {intl.formatMessage({ id: "career.career" })}
                </Text>
                <Text mb={{ base: 2, lg: 4 }} className="item">
                  {intl.formatMessage({ id: "career.experience" })}
                </Text>
                <Text className="item">
                  {intl.formatMessage({ id: "career.company1" })}
                </Text>
                <Text className="item">
                  {intl.formatMessage({ id: "career.company2" })}
                </Text>
                <Text className="item">
                  {intl.formatMessage({ id: "career.company3" })}
                </Text>
                <Text className="item">
                  {intl.formatMessage({ id: "career.company4" })}
                </Text>
              </Box>
            )}
          </InView>
        </Box>
        <Box bg={color.fifth[state.selectedLanguage]} color="cGray">
          <Box
            px={{ base: 4, md: 8, lg: 10 }}
            py={{ base: 28 }}
            maxW="1200px"
            mx="auto"
            position="relative"
          >
            <Snail
              top={"-100px"}
              left={"auto"}
              right={"0"}
              body={"#EFEEE4"}
              shell={"#FFB625"}
              animateD
              animateDuration={"140s"}
            />
            <InView triggerOnce={true} rootMargin={"-150px 0px"}>
              {({ inView, ref }) => (
                <Box
                  ref={ref}
                  className={inView ? "appear right inview" : "appear right"}
                >
                  <Heading
                    as="h2"
                    mb={{ base: 8, sm: "lg", lg: 16 }}
                    className="item"
                  >
                    {intl.formatMessage({ id: "contact.title" })}
                  </Heading>
                  <Text mb={{ base: 8, md: 16, lg: 32 }} className="item">
                    {intl.formatMessage({ id: "contact.description" })}
                  </Text>
                  <SnsNavi />
                </Box>
              )}
            </InView>
          </Box>
        </Box>
      </Box>
    </>
  )
})

export default IndexPage

export const query = graphql`
  query {
    allImageSharp(sort: { order: DESC, fields: original___height }) {
      nodes {
        gatsbyImageData
      }
    }
  }
`
