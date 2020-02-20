import React from 'react';
var WebFont = require('webfontloader');

const Card = ({ family, textfield, size }) => {
	WebFont.load({
    google: {
      families: [`${family}`]
    }
  });

	const cardStyle = {
		fontFamily: family,
		fontSize: size,
		height: "120px",		
		alignSelf: 'left',
		
	}

  return (
    <div className='bt pa3 ma2 b--light-silver fl w-auto'
    	style={{width: "24rem"}}>
      
      <div>
        <h2 className='f6 fl'>{family}</h2>
		         
		        
		        <br />
		        <p className='p3 pt4 tl'
		        style={cardStyle}>{textfield}</p>
      </div>
    </div>
  );
}

export default Card;
