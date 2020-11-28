import React from 'react';
import  './Loader.scss';

export default () => {
  return (
    <div className={ "loaderWrapper" }>
      <img  src={ "https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" } alt='loading...' />
    </div>
  );
};
