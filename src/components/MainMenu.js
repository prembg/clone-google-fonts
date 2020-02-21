import React from 'react';


const MainMenu = () => {
	return (
		<div className='center bg-white w-100 top navigation pb3'>
		<div>
      <nav className="db dt-l w-100 border-box pa3 ph5-l bb f5">
  <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" 
    href="https://fonts.google.com/" 
    title="Home"
  >
    Google Fonts
  </a>
  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
    <a className="link dim dark-gray f6 dib mr3 mr4-l" href="https://fonts.google.com/#" title="Catalog">CATALOG</a>
    <a className="link dim dark-gray f6 dib mr3 mr4-l" href="https://fonts.google.com/#" title="Featured">FEATURED</a>
    <a className="link dim dark-gray f6 dib mr3 mr4-l" href="https://design.google/library/google-fonts/?utm_source=Google&utm_medium=Fonts&utm_campaign=Article%20Tab" title="Articles">ARTICLES</a>    
    <a className="link dim dark-gray f6 dib" href="https://fonts.google.com/#" title="About">ABOUT</a>
  </div>
</nav>

    </div>
			    
		</div>
	);
}

export default MainMenu;