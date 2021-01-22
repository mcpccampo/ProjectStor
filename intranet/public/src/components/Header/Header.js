import React from 'react';

const Header = (props) => {
  return (
    <div>
      <nav>
        <div className="container">
          <span>Resources</span>
          <div>
            <button onClick={(e) => props.showForm()}>
              Add
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
