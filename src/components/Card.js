import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
var WebFont = require('webfontloader');

const element = <FontAwesomeIcon icon={faPlusCircle} className='pt2' />

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
    <div className='bt pa3 ma2 b--light-silver fl w-auto mb5'
    	style={{width: "28rem"}}>
      
      <div>
      	<div className="flex justify-between">
        <h2 className='f6 fl'>{family}</h2>
        {element}
        </div>
		         
		        
		        <br />
		        <p className='p3 pt4 tl'
		        style={cardStyle}>{textfield}</p>
      </div>
    </div>
  );
}

export default Card;
