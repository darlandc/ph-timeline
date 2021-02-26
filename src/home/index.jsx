import React, { useState } from 'react';
import styled from 'styled-components';
import client from '../client';
import { Query } from 'react-apollo';
import Post from '../components/posts/post';
import { ApolloProvider } from 'react-apollo';
import { gql } from '@apollo/client';
import { DisplayList } from '../components/posts/list';

const PostWrapper = styled.button`
  font-size: 14px;
  padding: 0;
  cursor: pointer;
  border: 0;
  outline: 0;
  background: white;
`;

export class Home extends React.Component {

  type;
  query;

  constructor(props){
    super(props)
    this.changeOrder.bind(this);
    
    console.log('home rendering')
    this.state = {
      selectedTab: 0,
      pages: 0 
    };
  }

  changeOrder(order){
    this.order = order;
    console.log(this.order);
  }

  GET_POSTS = gql`
  query {
    posts(order: RANKING, first: 50) {
      pageInfo{
        endCursor
      }
      edges {
        cursor,
        node {
          id,
          tagline,
          url,
          thumbnail{
            url
          }
          user{
            username,
          },
          votesCount,
          commentsCount,
          name,
          createdAt
        }
      }
    }
  }
  `;

  render(){
    return (
      <>
      <button onClick={()=> this.changeOrder('RANKING')}>Most Popular</button>
      <button onClick={()=> this.changeOrder('NEWEST')}>Most Recent</button>

        <ApolloProvider client={client}>
        {/* <DisplayList type={this.type}/> */}
          <PostWrapper>
              <Query query={this.GET_POSTS}>
                {({loading, error, data}) => {
                  let posts;
                  data ? posts = data.posts.edges : error = true;    
                    if (loading) return <p>Loading ...</p>;
                    if (error) return <p>Error :(</p>;
                      let list = posts.map(post => 
                        <Post key={post.node.name} postInfo={post.node}/>,
                      );
                      console.log(list.length)
                    if(data) return list;        
                }}
              </Query>
            </PostWrapper>
        </ApolloProvider>
      </>
    )
  }

}

export default Home;