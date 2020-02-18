import React from 'react';
import Card from './Card';

const CardList = ({ fonts, textfield, size }) => {
  return (
    <div className='center'>
      {
        fonts.map((user, i) => {        
          return (<Card key={i} family={fonts[i].family} textfield={textfield}/>)
       })
      }
    </div>
  );
}

export default CardList;