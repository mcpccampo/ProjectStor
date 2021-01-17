import React, { Component } from 'react';
import './resource.css';

const ResourceView = (prop) => {
  return (
    <div className="resource_component">
      <div className="well">
        <p>Some text..</p>
      </div>
      <div className="well">
        <p>Upcoming Events..</p>
      </div>
      <div className="well">
        <p>Visit Our Blog</p>
      </div>
    </div>
  );
};

export default ResourceView;
