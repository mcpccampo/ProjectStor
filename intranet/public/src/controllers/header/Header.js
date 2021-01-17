import React from 'react';

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-01 h1">Resources</span>
          <div className="d-flex">
            <button className="btn btn-outline-secondary" onClick={(e) => props.showForm()}>
              Add
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
