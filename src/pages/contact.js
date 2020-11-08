import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout/Layout"
import ContactForm from "../components/contactForm/ContactForm"
import GithubCard from "../components/githubCard/GithubCard"

import './styles.css';

const ContactContainer = styled.div`
  padding: 0;
  margin: auto;
  margin-top: 10vh;
  margin-bottom: 5vh;
  height: 100%;
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  align-items: center;
  justify-items: center;
  @media (max-width: 823px) {
    margin: 20px 0 0 0;
    grid-gap: 2rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }
`
const LeftDiv1 = styled.div`
  max-width: 400px;
  width: 100%;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  @media (max-width: 823px) {
    grid-row: 1 / 2;
    grid-column: 1 / 1;
  }
`
const LeftDiv2 = styled.div`
  max-width: 400px;
  width: 100%;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  @media (max-width: 823px) {
    grid-row: 2 / 3;
    grid-column: 1 / 1;
  }
`

const Contact = () => {
  return (
    <div>
      <Layout>
        <ContactContainer>
          <LeftDiv1><GithubCard></GithubCard></LeftDiv1>
          <LeftDiv2><GithubCard></GithubCard></LeftDiv2>
          <ContactForm></ContactForm>
        </ContactContainer>
      </Layout>
    </div>
  )
}

export default Contact;