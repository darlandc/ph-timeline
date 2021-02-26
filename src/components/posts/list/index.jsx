import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Query } from 'react-apollo';

export const  DisplayList = ({ type }) => {
        const GET_POSTS_POPULAR = gql`
        query {
          posts(order: RANKING) {
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
        const { loading, error, data } = useQuery(GET_POSTS_POPULAR);

      
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
      
        return (
          <select name="type" onChange={type}>
            {data.dogs.map(dog => (
              <option key={dog.id} value={dog.breed}>
                {dog.breed}
              </option>
            ))}
          </select>
        );
      }

export default DisplayList;