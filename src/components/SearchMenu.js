import React from 'react';




const SearchMenu = ({searchfield, searchChange, textfield, textChange, sizeChange, size, searchReset}) => {
  const menuStyle = {    
    textAlign: 'center',
    alignSelf: 'center',    
  }
	return (
		<div style={menuStyle} className='center bg-white w-100 dib mt2'>		  
      <nav className="ma1 dib ba br-pill tc w-80 center flex justify-around">        
        <input className="f6 black-80 bw0 dib ma2 .w5 fl w-40" 
          type='search' 
          placeholder='Search fonts'
          onChange={searchChange} />
        <input className="f6 black-80 bw0 dib ma2 .w5 fl w-40" 
          type='text' 
          placeholder='Type something'
          onChange={textChange}
          value={textfield} />
        <select id="Size" 
          className='pl2 pr2 bl mr3 fl w-5 bw0'
          onChange={sizeChange}>
            <option value="20">20px</option>
            <option value="24" >24px</option>
            <option value="32">32px</option>
            <option value="40" selected="selected">40px</option>
        </select>
        <button onClick={searchReset}>
        Reset
        </button>
      </nav>

		</div>
	);
}

export default SearchMenu;