import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "22em", //352
  md: "38em", //608
  lg: "60em", //1080
  xl: "80em", //1280
  "2xl": "96em", //1536
})

const theme = extendTheme({
  colors: {
    cWhite: "#EFEEE4",
    cBlue: "#70B6DF",
    cBlue2: "#7FB7C9",
    cBlue3: "#34768C",
    cBlue4: "#5486A6",
    cRed: "#E18C7A",
    cRed2: "#F89381",
    cRed3: "#F374A3",
    cRed4: "#FFDBDB",
    cYellow: "#E3DAB0",
    cYellow2: "#EAE5BA",
    cBlack: "#423D38",
    cGray: "#737363",
    cGray2: "#FFA646",
    cPurple: "#A293C2",
    cPurple2: "#553F85",
    cBeige: "#FFE9BC",
    cBeige2: "#D9BC81",
    cBeige3: "#FFF3DA",
    cGreen: "#E3E8DF",
    cGreen2: "#C2CEB9",
    cGreen3: "#9DB39C",
    cGreen4: "#577E55",
    cOrange: "#FFB625",
    cCreem: "#FFF3DA",
  },
  fonts: {
    heading: "New Tegomin, sans-serif",
    body: "New Tegomin, sans-serif",
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        letterSpacing: "wider",
        fontWeight: "bold",
      },
      li: {
        listStyle: "none",
      },
      a: {
        textDecoration: "none",
      },
      h2: {
        fontSize: { base: "3xl", md: "4xl" },
      },
      p: {
        fontSize: { base: "md", sm: "lg", md: "xl", lg: "2xl" },
      },
    },
  },
  breakpoints,
})

export default theme
