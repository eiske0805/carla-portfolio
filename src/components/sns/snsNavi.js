import React, { memo } from "react"
import { Flex, Link, Box } from "@chakra-ui/react"

import MaleSvg from "./maleSvg"
import TwitterSvg from "./twitterSvg"
import LinkedinSvg from "./linkedinSvg"

const routes = [
  {
    url: "mailto:carla.translate@gmail.com",
    children: <MaleSvg />,
  },
  {
    url: "https://twitter.com/carla_translate",
    children: <TwitterSvg />,
  },

  {
    url: "https://linkedin.com/in/carlap",
    children: <LinkedinSvg />,
  },
]

const SnsNavi = memo(() => {
  return (
    <Box as="nav" className="item">
      <Flex as="ul" justify="flex-end">
        {routes.map(route => (
          <Box
            key={route.url}
            as="li"
            w={{ base: "2rem", lg: "3rem" }}
            h={{ base: "2rem", lg: "3rem" }}
            mr={{ base: "0.5rem", lg: "0.75rem" }}
          >
            <Link isExternal href={route.url}>
              {route.children}
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  )
})

export default SnsNavi
