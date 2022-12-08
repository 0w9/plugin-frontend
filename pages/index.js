import { styled } from '@stitches/react'
import styles from '../styles/Home.module.css'
import CTA from "https://framer.com/m/CTA-A1me.js@VE9RMvUx59fz9x1iUtXH"
import Subheader from "https://framer.com/m/Subheader-MMpZ.js@iozDOowJR1Lp5jlQzQaI"
import { motion } from 'framer-motion'

export default function Home() {
  const Box = styled("div")

  const Header = styled("h1", {
    width: "auto",
    height: "auto",
    whiteSpace: "pre",
    fontFamily: `"Inter", sans-serif`,
    color: "#000000",
    fontSize: "6.3vw",
    letterSpacing: 0,
    lineHeight: 1.2,
    textAlign: "center",
  })

  const Subheader_Wrapper = styled("div", {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",

    fontSize: "100px"
  })

  const CTA_wrapper = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: "30vh"
  })

  const test_header = styled("a")
  return <>
    <Header>
      Design your next landing page. <br />
      Suported by AI.
    </Header>



      <test_header css={{
        fontSize: "3.5vw"
      }}>
        We've made a Plugin, that uses AI to design your next landing page. Customized by your words.
      </test_header>



      <CTA_wrapper>
          <motion.div
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.1 },
          }}

          whileTap={{
            scale: 0.9
          }}
        >
          <CTA />
        </motion.div>
      </CTA_wrapper>

  </>
}