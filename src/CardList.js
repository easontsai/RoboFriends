import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const cardArray = robots.map((user, index) => {
    // use Array to collect all the robot list
    return (
      // Card.js定義props
      // robots.js is just datas
      // render Card 中id,name,eamil這個結構，資料來自{robots}，結構呈現樣子在Card中實現
      <Card
        key={ index }
        id={robots[index].id}
        name={robots[index].name}
        email={robots[index].email}/>
    )
  })
  return(
    <div>
      { cardArray }
    </div>
  )
}

export default CardList;
