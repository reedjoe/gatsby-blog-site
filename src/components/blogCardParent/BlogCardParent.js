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

	return (
		<StyledRoot>
			<StyledContainer>
				<Card
					title="Face Detection Web App"
					date="13/04/2020"
					description="A web app that allows users to sign in/register and will detect any faces 
						in an image using the Clarifai API. It comprises a React frontend, a Node.js/Express.js 
						backend with a PostgreSQL database and is deployed on Heroku. This was the final project 
						for a web development Udemy course."
					actions={
						[
							{
								label: (
									<>
										Keep Reading
									</>
								),
								path: "/blog/aws-cert-saa"
							},
							{
								label: (
									<>
										FE Code
									</>
								),
								path: "https://github.com/reedjoe/face-recognition-brain",
							},
							{
								label: (
									<>
										BE Code
									</>
								),
								path: "https://github.com/reedjoe/face-recognition-brain-api",
							},
							{
								label: (
									<>
										Site
									</>
								),
								path: "https://face-recognition-brain-web-app.herokuapp.com",
							},
						]
					}
				/>
			</StyledContainer>
			<StyledContainer>
				<Card
					title="AWS Lambda Web Scraper"
					date={"28/08/20"}
					description="An AWS Lambda function built using the Serverless framework that runs 
						on a daily cron job. It uses the Cheerio library to scrape Smooth 4000's Souncloud 
						page and checks whether a new song has been uploaded. If a new song is found it 
						then triggers SES to send me an email."
					actions={
						[
							{
								label: (
									<>
										Keep Reading
									</>
								),
								path: "/blog/aws-cert-saa",
							},
							{
								label: (
									<>
										Code
									</>
								),
								path: "https://github.com/reedjoe/soundcloud-web-scraper",
							},
						]
					}
				/>
			</StyledContainer>
			<StyledContainer>
				<Card
					title="Pass the AWS Certified Solutions Architect - Associate exam in one month"
					date={date}
					description="I managed to pass the AWS Certified Solutions Architect - Associate exam 
						on the first attempt, after only one month of learning. In this post I list some of 
						the resources I used and provide some advice for anyone considering studying for the exam."
					actions={
						[
							{
								label: (
									<>
										Keep Reading
                            		</>
								),
								path: "/blog/aws-cert-saa",
							}
						]
					}
				/>
			</StyledContainer>
		</StyledRoot>
	)
}

export default BlogCardParent