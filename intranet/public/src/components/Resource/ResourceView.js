import React from 'react';
import './resource.css';

const ResourceView = (props) => {
  const resourceData = [...props.resourceData];

  const resources = resourceData.filter(element => element.group === 'Resources').map((element) => {
    return (
      <div key={element.id}>
        <a href={element.url} rel="noreferrer" target="_blank">
          {element.title}
        </a>
        <span> - </span>
        <button onClick={() => props.selectedData(element)}>Edit</button>
        <button onClick={() => props.resourceDelete(element.id)}>Delete</button>
      </div>
    );
  });
  return <div className="resource_component">{resources}</div>;
};

export default ResourceView;
