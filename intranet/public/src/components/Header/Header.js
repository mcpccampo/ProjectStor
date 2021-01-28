import React from 'react';

const Header = (props) => {
  return (
    <div>
      <nav>
        <div className="container">
          <div>
            <button onClick={(e) => props.showResourceForm()}>New Resource</button>
            <span> - </span>
            <button onClick={(e) => props.showPostForm()}>New Post</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
