import "@fontsource/fredericka-the-great"
import "@fontsource/new-tegomin"

import "./src/styles/style.scss"

import { wrapRootElement as customWrapRootElement } from "./src/wrap-root-element"
import { wrapPageElement as customWrapPageElement } from "./src/wrap-page-element"

export const wrapRootElement = customWrapRootElement

export const wrapPageElement = customWrapPageElement
