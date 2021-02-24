import React from 'react';
import styled, { css } from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #5B5EA6;
`;

const Card = styled.section`
  padding: 0;
  border: 1px solid red;
`;

const Post = ({postInfo}) => (
    <div style={{'width': '100%', 'marginTop': '10px'}}>
        <Card>
            <Title>{postInfo.name}</Title> 
        </Card>   
    </div>
);



export default Post;

