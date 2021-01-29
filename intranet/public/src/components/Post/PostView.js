import React from 'react';
import './post.css';

const PostView = (props) => {
  const postData = [...props.postData].filter((element) => element.group === 'Post');

  const post = postData.map((element) => {
    return (
      <div key={element.id} className="url-container">
        <div>
          <a href={element.url} rel="noreferrer" target="_blank">
            {element.title}
          </a>
        </div>
        <div>
          <button onClick={() => props.selectedData(element)}>Edit</button>
          <button onClick={() => props.postDelete(element.id)}>Delete</button>
        </div>
      </div>
    );
  });
  return <div className="post_component">{post}</div>;
};

export default PostView;
