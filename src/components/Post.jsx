import React from 'react';
import styled, { css } from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #5B5EA6;
`;

const Card = styled.section`
  padding: 10px 0;
  box-shadow: 1px 5px 5px #EEE;
  border-radius: 6px;
  border: 1px solid #EEE;
  margin: 0 5px;
  width: 500px;
`;

const Post = ({postInfo}) => (
    <div style={{'width': '100%', 'marginTop': '10px'}}>
        <Card>
            <Title>{postInfo.name}</Title> 
        </Card>   
    </div>
);



export default Post;

