import React from 'react'
import styled from 'styled-components'

import Card from '../blogCard/BlogCard'

const StyledRoot = styled.div`
  padding: 50px 0;
  max-width: 1050px;
  width: 100%;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const StyledContainer = styled.div`
  max-width: 650px;
  @media (max-width: 1191px) {
    width: 100%;
  }
  width: 50%;
  margin: auto;
`

const BlogCardParent = () => {
  const date = new Date().toLocaleDateString()

  const onKeepReadingClick = () => alert('Redirect to blog post');
  const onViewCodeClick = () => alert('Redirect to github repo');
  const onViewSiteClick = () => alert('Redirect to site');

  const buttons = [
    {
      label: (
        <>
          Keep Reading
        </>
      ),
      onClick: onKeepReadingClick,
      path: "/about",
    },
    {
      label: (
        <>
          Code
        </>
      ),
      onClick: onViewCodeClick,
      path: "https://github.com/reedjoe/face-recognition-brain",
    },
    {
      label: (
        <>
          Site
        </>
      ),
      onClick: onViewSiteClick,
    },
  ]

  return (
    <StyledRoot>
      <StyledContainer>
        <Card
          title="Face Detection Web App"
          date={date}
          description="This React App was the final project for the 'The Complete Web Developer 
          in 2020: Zero to Mastery' Udemy course. It comprises a React frontend, a 
          Node.js/Express.js backend with a PostgreSQL database and is deployed on Heroku. 
          The App allows users to sign in/register and will detect the face in an image using the Clarifai API."
          actions={buttons}
        />
      </StyledContainer>
      <StyledContainer>
        <Card
          title="AWS Lambda Web Scraper"
          date={date}
          description="An AWS Lambda function built using the Serverless framework that runs 
          on a daily cron job. It uses the Cheerio library to scrape Smooth 4000's Souncloud 
          page and checks whether a new song has been uploaded. If a new song is found it 
          then triggers SES to send me an email."
          actions={buttons}
        />
      </StyledContainer>
      <StyledContainer>
        <Card
          title="The Benefits of Green Apples"
          date={date}
          description="Green apples have a high fiber content which helps in increasing the
      body's metabolism. While consuming an apple, make sure that you're not
      tossing the peel in the trash. Consuming apple with its peel improves
      the overall health. Due to its high fiber content, apple helps in
      detoxification process. It keeps the liver and digestive system away
      from harmful elements."
          actions={buttons}
        />
      </StyledContainer>
      <StyledContainer>
        <Card
          title="The Benefits of Green Apples"
          date={date}
          description="Green apples have a high fiber content which helps in increasing the
      body's metabolism. While consuming an apple, make sure that you're not
      tossing the peel in the trash. Consuming apple with its peel improves
      the overall health. Due to its high fiber content, apple helps in
      detoxification process. It keeps the liver and digestive system away
      from harmful elements."
          actions={buttons}
        />
      </StyledContainer>
      <StyledContainer>
        <Card
          title="The Benefits of Green Apples"
          date={date}
          description="Green apples have a high fiber content which helps in increasing the
      body's metabolism. While consuming an apple, make sure that you're not
      tossing the peel in the trash. Consuming apple with its peel improves
      the overall health. Due to its high fiber content, apple helps in
      detoxification process. It keeps the liver and digestive system away
      from harmful elements."
          actions={buttons}
        />
      </StyledContainer>
      <StyledContainer>
        <Card
          title="The Benefits of Green Apples"
          date={date}
          description="Green apples have a high fiber content which helps in increasing the
      body's metabolism. While consuming an apple, make sure that you're not
      tossing the peel in the trash. Consuming apple with its peel improves
      the overall health. Due to its high fiber content, apple helps in
      detoxification process. It keeps the liver and digestive system away
      from harmful elements."
          actions={buttons}
        />
      </StyledContainer>
    </StyledRoot>
  )
}

export default BlogCardParent