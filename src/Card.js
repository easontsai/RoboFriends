import React from 'react';

const Card = (props) => {
  // destructure - 解構賦值
  // mirrors the construction of array and object literals
  // props.name
  // props.email
  // props.id

  const {name, email ,id} = props;
  return(
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?100x100`} />
      <div>
        <h2>{ name }</h2>
        <p>{ email }</p>
      </div>
    </div>
  );
}

export default Card;
