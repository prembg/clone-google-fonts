import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faRedo} />

const SearchMenu = ({searchfield, searchChange, textfield, textChange, sizeChange, size, searchReset}) => {
  const menuStyle = {    
    textAlign: 'center',
    alignSelf: 'center',    
  }
	return (
		<div style={menuStyle} className='mt3 center bg-white w-100 dib mt2 navigation'>		  
      <nav className="ma1 dib ba b--light-silver br-pill tc w-90 center flex justify-around">        
        <input className="f6 black-80 bw0 dib ma2 .w5 fl w-40" 
          type='search' 
          placeholder='Search fonts'
          onChange={searchChange} />
        <span className='bl b--light-silver'></span>
        <input className="f6 black-80 bw0 dib ma2 .w5 fl w-40 bl b--light-silver" 
          type='text' 
          placeholder='Type something'
          onChange={textChange}
          value={textfield} />
        <span className='bl b--light-silver'></span>
        <select id="Size" 
          value={size}          
          className='pl2 pr2 bl mr3 fl w-5 bw0 '
          onChange={sizeChange}>
            <option value="20px">20px</option>
            <option value="24px" >24px</option>
            <option value="32px">32px</option>
            <option value="40px" selected="selected">40px</option>
        </select>
        <span className='dim pointer pa2 pt2 bl b--light-silver' onClick={searchReset}>
        {element}
        </span>
      </nav>

		</div>
	);
}

export default SearchMenu;