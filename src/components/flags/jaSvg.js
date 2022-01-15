import React, { memo } from "react"
import { Box } from "@chakra-ui/react"

const JaSvg = memo(() => {
  return (
    <Box as="svg" w="100%" h="100%" viewBox="0 0 1000 1000">
      <rect x="0" y="0" width="1000" height="1000" fill="rgb(241,224,224)" />
      <ellipse
        cx="500"
        cy="500"
        rx="359.366"
        ry="357.867"
        fill="rgb(233,137,137)"
      />
    </Box>
  )
})

export default JaSvg
