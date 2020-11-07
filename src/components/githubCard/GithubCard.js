import React from "react"
import styled from 'styled-components'

class GithubCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: {},
            commits: []
        };
    }

    componentDidMount() {
        fetch("https://api.github.com/users/reedjoe")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        item: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
            fetch("https://api.github.com/users/reedjoe/events")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        commits: result
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, item, commits } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <GithubCardContainer>
                    <Header href={item.html_url}>
                        <ProfileImage src={item.avatar_url}></ProfileImage>
                        <ProfileName>{item.login}</ProfileName>
                        <ProfileBio>{item.bio}</ProfileBio>
                    </Header>
                    <StatsSection>
                        <GithubLink href={item.html_url + '?tab=repositories'}>
                            <ProfileName>
                                {item.public_repos}
                            </ProfileName> Repos
                        </GithubLink>
                        <GithubLink href={item.html_url + '?tab=followers'}>
                            <ProfileName>
                                {item.followers}
                            </ProfileName> Followers
                        </GithubLink>
                        <GithubLink href={item.html_url + '?tab=following'}>
                            <ProfileName>
                                {item.following}
                            </ProfileName> Following
                        </GithubLink>
                    </StatsSection>
                    <CommitHeader>Latest Commits</CommitHeader>
                    <StatsSection>
                        {commits
                        .filter((i, index) => i.type === "PushEvent")
                        .filter((i, index) => (index < 3))
                        .map((i, index) => (
                            <div key={i.id}>
                                <GithubLink href={`https://github.com/${i.repo.name}/commit/${i.payload.commits[0].sha}`}>
                                    {i.payload.commits[0].message}
                                </GithubLink>
                            </div>
                        ))}
                    </StatsSection>
                </GithubCardContainer>
            );
        }
    }
}

export default GithubCard;

const GithubCardContainer = styled.div`
    border-radius: 5px;
    padding: 10px 10px 0;
    background: #fff;
    color: #555;
`

const Header = styled.a`
    padding: 3px 0 4px 57px;
    min-height: 48px;
    position: relative;
    display: block;
    text-align: left;
    text-decoration: none;
    :hover div {
        text-decoration: underline;
    }
`

const ProfileImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 48px;
    height: 48px;
    background: #fff;
    border-radius: 4px;
`

const ProfileName = styled.div`
    display: block;
    color: #292f33;
    font-size: 16px;
    line-height: 1.6;
    font-weight: bold;
`

const ProfileBio = styled.span`
    color: #707070;
    font-size: 14px;
    padding-right: 25px;
`

const StatsSection = styled.div`
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    text-transform: uppercase;
    font-size: 12px;
    color: #707070;
    text-align: left;
    text-decoration: none;
    margin-bottom: 10px;
    a:first-child {
        border-left: 0;
        padding-left: 0;
    }
`
const GithubLink = styled.a`
    display: inline-block;
    padding: 4px 18px;
    border-left: 1px solid #eee;
    text-decoration: none;
    font-size: 12px;
    color: #707070;
    :hover {
        color: #4183c4;
    }
`

const CommitHeader = styled.div`
    display: block;
    color: #292f33;
    line-height: 1.6;
    font-weight: bold;
    text-align: left; 
    font-size: 14px;
`