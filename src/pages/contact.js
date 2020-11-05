import React from "react"
import Layout from "../components/layout/Layout"
import ContactForm from "../components/ContactForm/ContactForm"

import './styles.css';

const Contact = () => {
  return (
    <div>
      <Layout>
        <ContactForm></ContactForm>
      </Layout>
    </div>
  )
}

export default Contact;