import React, { memo } from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import { Box, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"

import CaSvg from "./flags/caSvg"
import UkSvg from "./flags/ukSvg"
import JaSvg from "./flags/jaSvg"

const LanguageMenu = memo(({ mainColor }) => {
  const languageName = {
    ca: { ca: "Català", en: "Anglès", ja: "Japonès", children: <CaSvg /> },
    en: { ca: "Catalan", en: "English", ja: "Japanese", children: <UkSvg /> },
    ja: {
      ca: "カタルーニャ語",
      en: "英語",
      ja: "日本語",
      children: <JaSvg />,
    },
  }
  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => {
        return (
          <Box
            position="fixed"
            top={{ base: 4, md: 8, lg: 10 }}
            right={{ base: 4, md: 8, lg: 10 }}
            zIndex="10000"
          >
            <Menu>
              <MenuButton
                border="4px"
                borderRadius="full"
                px="2"
                py="2"
                fontWeight="bold"
                bg={mainColor}
                transition="0.4s"
                _hover={{
                  bgColor: "rgba(0,0,0,0.3)",
                }}
              >
                Àあ
              </MenuButton>
              <MenuList bgColor="rgba(255,255,255,0.7)">
                {languages.map(language => {
                  return (
                    <MenuItem
                      key={language}
                      onClick={() => changeLocale(language)}
                      color="cGray"
                      fontWeight="bold"
                      h="3rem"
                    >
                      <Box h="1.5rem" mr="0.5rem">
                        {languageName[language]["children"]}
                      </Box>
                      {languageName[currentLocale][language]}
                    </MenuItem>
                  )
                })}
              </MenuList>
            </Menu>
          </Box>
        )
      }}
    </IntlContextConsumer>
  )
  //   }}
  // </InView>
  // )s
})

export default LanguageMenu
