import React, { memo } from "react"
import { Box, Flex, Text } from "@chakra-ui/react"

const Arrow = memo(({ fill, text }) => {
  return (
    <Flex
      w={{ base: "100px", md: "150px" }}
      h={{ base: "70px", md: "140px" }}
      overflow="hidden"
      mx="auto"
      mt="5"
      position="relative"
      className="item"
    >
      <Box
        as="svg"
        className="arrow"
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        fill={fill}
      >
        <path d="M520.125,782.995c40.311,-2.749 84.01,-2.382 100.843,14.452c6.047,6.046 -21.901,37.013 -25.557,41.636c-24.625,31.144 -36.238,72.624 -80.255,132.255c-28.334,38.384 -66.722,-62.715 -80.32,-83.866c-15.392,-23.944 -56.658,-75.198 -56.658,-106.408c0,-0 57.377,8.456 75.537,7.592c6.884,-0.328 15.883,-1.17 26.16,-2.158l0,-766.45l40.25,0l-0,762.947Z" />
      </Box>
      <Text
        position="absolute"
        right="10px"
        top="15%"
        transform="rotate(90deg)"
        fontSize={{ base: "sm", md: "xl" }}
      >
        {text}
      </Text>
    </Flex>
  )
})

export default Arrow
