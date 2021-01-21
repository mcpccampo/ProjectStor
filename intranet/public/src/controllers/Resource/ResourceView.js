import React, { Component } from 'react';
import './resource.css';

const ResourceView = (props) => {
  const resourceData = [...props.resourceData];

  const resources = resourceData.map((element) => {
    return (
      <div>
        <p>{element.title}</p>
        <i className="bi-alarm"></i>
        <a href={element.url} rel="noreferrer" target="_blank">
          Click
        </a>
      </div>
    );
  });
  return <div className="resource_component">{resources}</div>;
};

export default ResourceView;
