import React, { useState, useRef, useCallback } from 'react'
import GetPaginationList from './pagination'
import Post from './post';
import { Query } from 'react-apollo';
import GET_POSTS_MOST_RECENT from '../queries/recent';
import GET_POSTS_MOST_POPULAR from '../queries/popular';
import client from '../client';
import { ApolloProvider } from 'react-apollo';
import TabGroup from './tabs';
import styled from 'styled-components';

const PostWrapper = styled.button`
  font-size: 14px;
  padding: 0;
  cursor: pointer;
  border: 0;
  outline: 0;
  background: white;
`;


export default function InfinitList() {

  const [category, setCategory] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
    posts,
    hasMore,
    loading,
    error
  } = GetPaginationList(category, pageNumber)

  const observer = useRef()
  const lastPostElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
    debugger
  }, [loading, hasMore])

  function handleSearch(e) {
    //y(e.target.value)
    setPageNumber(1)
  }

  return (
    <>
    <ApolloProvider client={client}>
    {/* <TabGroup/> */}
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
    </>
  )
}

