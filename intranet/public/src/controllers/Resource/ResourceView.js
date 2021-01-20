import React, { Component } from 'react';
import './resource.css';

const ResourceView = (props) => {
  const resourceData = [...props.resourceData];
  const resources = resourceData.map((element) => {
    return (
      <>
        <p>{element.title}</p>
        <a href={element.url}>Click</a>
      </>
    );
  });
  return <div className="resource_component">{resources}</div>;
};

export default ResourceView;
