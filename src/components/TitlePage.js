import React from 'react';

const TitlePage = (props) => {
  return (
      <div className="title-page">
          <h1>
              {props.title}
          </h1>
      </div>
  );
};

export default TitlePage;
