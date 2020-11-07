import React from 'react'
import styled from 'styled-components'

import Link from '../link/Link'

const StyledContainer = styled.div`
  border: ${(props) => `1px solid ${props.containerBorder}`};
  padding: 25px 12px 18px;
  margin: 20px;
  background: ${(props) => `linear-gradient(
    45deg, ${props.linGradMain}, ${props.linGradSecond}
  )`};
`

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`

const Description = styled.p`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`

const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`

const Action = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: ${(props) => props.linGradMain};
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: #fff;
  text-decoration: none;
`;

const BlogCard = ({
  title,
  date,
  description,
  actions,
}) => (
  <StyledContainer containerBorder="#fff" linGradMain="" linGradSecond="">
    <Title>{title}</Title>
    <Date>{date}</Date>
    <Description>{description}</Description>
    <Actions linGradMain="">
      {actions.map(({ label, path }) => (
        <StyledLink key={path} to={path}><Action>{label}</Action></StyledLink>
      ))}
    </Actions>
  </StyledContainer>
)

export default BlogCard