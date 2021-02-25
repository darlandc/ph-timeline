import React, { useState } from 'react';
import styled from 'styled-components';
import ToggleDisplay from 'react-toggle-display';
import Post from '../../components/post';
import { Query } from 'react-apollo';
import GET_POSTS_MOST_POPULAR from '../../queries/listPopular';
import GET_POSTS_MOST_RECENT from '../../queries/listRecent';
import client from '../../client';
import { ApolloProvider } from 'react-apollo';

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
`;


const PostWrapper = styled.button`
  font-size: 14px;
  padding: 0;
  cursor: pointer;
  border: 0;
  outline: 0;
  background: white;
`;

const types = ['Most Popular', 'Most Recent'];

const Home = () => {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <ButtonGroup>
        {types.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type) + console.log(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>

      <ToggleDisplay if={active === 'Most Popular'} tag="section">
      
      <ApolloProvider client={client}>
        <PostWrapper>
      <Query query={GET_POSTS_MOST_POPULAR}>
        {({loading, error, data}) => {
          let posts;
          data ? posts = data.posts.edges : error = true;

            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error :(</p>;
              let list = posts.map(post => 
                <Post key={post.node.name} postInfo={post.node}/>,
              );
            if(data) return list;
          
        }}
        </Query>
        </PostWrapper>
    </ApolloProvider>

      </ToggleDisplay>

      <ToggleDisplay if={active === 'Most Recent'} tag="section">
            
      <ApolloProvider client={client}>
        <PostWrapper>
      <Query query={GET_POSTS_MOST_RECENT}>
        {({loading, error, data}) => {
          let posts;
          data ? posts = data.posts.edges : error = true;

            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error :(</p>;
              let list = posts.map(post => 
                <Post key={post.node.name} postInfo={post.node}/>,
              );
            if(data) return list;
          
        }}
        </Query>
        </PostWrapper>
    </ApolloProvider>
      </ToggleDisplay>
    </>
  );
}

export default Home;