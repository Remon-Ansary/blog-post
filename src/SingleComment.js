import React from 'react';
const SingleComment = (props) => {
  // console.log(props)
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.picture} alt="" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">
          </span>
        </div>
        {props.date}
        <div className="text">
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default SingleComment;