import React, { memo } from "react"
import { Box } from "@chakra-ui/react"

const CaSvg = memo(() => {
  return (
    <Box as="svg" w="100%" h="100%" viewBox="0 0 1000 1000">
      <rect x="0" y="0" width="1000" height="1000" fill="rgb(240,229,133)" />
      <rect x="0" y="111.2" width="1000" height="111" fill="rgb(233,137,137)" />
      <rect x="0" y="333.2" width="1000" height="111" fill="rgb(233,137,137)" />
      <rect x="-0" y="556" width="1000" height="111" fill="rgb(233,137,137)" />
      <rect x="-0" y="778" width="1000" height="111" fill="rgb(233,137,137)" />
    </Box>
  )
})

export default CaSvg
