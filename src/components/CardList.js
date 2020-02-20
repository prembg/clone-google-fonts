import React from 'react';
import Card from './Card';

const CardList = ({ fonts, textfield, size}) => {
  return (
    <div className='pt6 center flex flex-wrap justify-center'>
      {
        fonts.map((user, i) => {
        	if (i<10)       
          {return (<Card 
                      key={i} 
                      family={fonts[i].family} 
                      textfield={textfield} 
                      size={size}
          />)}
       })
      }
    </div>
  );
}

export default CardList;