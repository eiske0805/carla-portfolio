import React, { memo } from "react"
import { Flex, Box } from "@chakra-ui/react"

import SuitscaseSvg from "./suitscaseSvg"
import ComputerSvg from "./computerSvg"
import GameSvg from "./gameSvg"

const routes = [
  {
    children: <SuitscaseSvg />,
  },
  {
    children: <ComputerSvg />,
  },

  {
    children: <GameSvg />,
  },
]

const FieldsIcons = memo(() => {
  return (
    <Box as="nav" className="item">
      <Flex as="ul" justify="flex-end">
        {routes.map((route, index) => (
          <Box
            key={index}
            as="li"
            w={{ base: "3rem", md: "4rem", lg: "5rem" }}
            h={{ base: "3rem", md: "4rem", lg: "5rem" }}
            ml="0.5rem"
          >
            {route.children}
          </Box>
        ))}
      </Flex>
    </Box>
  )
})

export default FieldsIcons
