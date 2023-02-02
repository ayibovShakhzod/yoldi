import { ThemeProvider } from "styled-components"
import { ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

import { theme } from "../src/styles/theme"

import { GlobalStyles } from "../src/styles"
import { Nav } from "@/components/Nav"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Nav />
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  )
}

export default MyApp
