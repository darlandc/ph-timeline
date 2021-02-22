import React from 'react';
import styled, { css } from 'styled-components';


// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const Post = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
            <h5 className="card-title">{props.post.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.post.title}</h6>
            <p className="card-text">{props.course.title}</p>
            <Button>test</Button>
            <a href={props.post.url} className="card-link"></a>
        </div>
    </div>
);

export default Post;

