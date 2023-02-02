import { ThemeProvider } from "styled-components"
import { theme } from "../src/styles/theme"
import { GlobalStyles } from "../src/styles"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
