import React from 'react';

const Header = (props) => {
  return (
    <div>
      <nav>
        <div className="container">
          <div>
            <h1>Camilo's DevMountain Resource Directory</h1>
            <br />
            <button onClick={(e) => props.showResourceForm()}>Link</button>
            <span> - </span>
            <button onClick={(e) => props.showPostForm()}>Post</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
