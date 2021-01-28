import React from 'react';

const Header = (props) => {
  return (
    <div>
      <nav>
        <div className="container">
          <div>
            <button onClick={(e) => props.showForm()}>New Resource</button>
            <span> - </span>
            <button>New Post</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
