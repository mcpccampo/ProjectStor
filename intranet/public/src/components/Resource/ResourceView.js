import React from 'react';
import './resource.css';

const ResourceView = (props) => {
  const resourceData = [...props.resourceData].filter(
    (element) => element.group === 'Resources'
  );

  const resources = resourceData.map((element) => {
    return (
      <div key={element.id} className="url-container">
        <div>
          <a href={element.url} rel="noreferrer" target="_blank">
            {element.title}
          </a>
        </div>
        <div>
          <button onClick={() => props.selectedData(element)}>Edit</button>
          <button onClick={() => props.resourceDelete(element.id)}>Delete</button>
        </div>
      </div>
    );
  });
  return <div className="resource_component">{resources}</div>;
};

export default ResourceView;
