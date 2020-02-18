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
		alignSelf: 'center'		
	}

  return (
    <div className='tc br3 pa3 ma2 dib bw2 shadow-5 fl w-30'>
      
      <div>
        <h2 className='f6 '>{family}</h2>
		         
		        
		        <br />
		        <p style={cardStyle}>{textfield}</p>
      </div>
    </div>
  );
}

export default Card;
