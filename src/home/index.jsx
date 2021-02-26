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
  state = {
    selectedTab: 'NEWEST',
    pages: 0 
  };
  
  changeOrder(order){
    this.setState({
      selectedTab: order,
      pages: 0  
    });
    console.log('this.state', this.state)
  }

  GET_NEWEST = gql`
    query {
      posts(order: NEWEST) {
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

  GET_POPULAR = gql`
    query {
      posts(order: VOTES) {
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
  
      <button onClick={()=> this.changeOrder('NEWEST')}>Most Recent</button>
      <button onClick={()=> this.changeOrder('POPULAR')}>Most Popular</button>
        
      {console.log(this.state.selectedTab)}

        <ApolloProvider client={client}>

          {this.state.selectedTab == `POPULAR` && 
                  <PostWrapper>
                    <Query query={this.GET_POPULAR}>
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
          }
          {this.state.selectedTab == `NEWEST` && 
                <PostWrapper>
                    <Query query={this.GET_NEWEST}>
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
          }
        </ApolloProvider>
      </>
    )
  }

}

export default Home;