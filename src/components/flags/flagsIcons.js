import React, { memo } from "react"
import { Flex, Box } from "@chakra-ui/react"

import CaSvg from "./caSvg"
import UkSvg from "./ukSvg"
import JaSvg from "./jaSvg"

const routes = [
  {
    children: <CaSvg />,
  },
  {
    children: <UkSvg />,
  },

  {
    children: <JaSvg />,
  },
]

const FlagsIcons = memo(() => {
  return (
    <Box as="nav" className="item">
      <Flex as="ul">
        {routes.map((route, index) => (
          <Box
            key={index}
            as="li"
            w={{ base: "2rem", lg: "2.5rem" }}
            h={{ base: "2rem", lg: "2.5rem" }}
            mr={{ base: "0.5rem", lg: "0.75rem" }}
            borderRadius="md"
            overflow="hidden"
          >
            {route.children}
          </Box>
        ))}
      </Flex>
    </Box>
  )
})

export default FlagsIcons
