import React, { Component } from 'react';
import CardList from '../components/CardList';
import MainMenu from '../components/MainMenu.js';
import SearchMenu from '../components/SearchMenu.js';
import Footer from '../components/Footer.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      fonts: [],
      searchfield: '',
      textfield: 'Then came the night of the first falling star',
      size: '40px'
    }
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyA5GrPS2LztYbvuq-S38sx6CieY17p9FOY')
    .then(response=> response.json())
    .then(data=> this.setState({fonts: data.items}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  onTextChange = (event) => {
    this.setState({textfield: event.target.value })
  }

  onSearchReset = () => {
    this.setState({searchfield: '', textfield: 'Then came the night of the first falling star' })
  }

  onSizeValueChange = (event) => {
    this.setState({size: event.target.value })
  }

  render() {
    const {fonts, searchfield, textfield, size} = this.state;
    const filteredFonts = fonts.filter(font => {
      return font.family.toLowerCase().includes(searchfield.toLowerCase());
      })
    return !fonts.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <MainMenu />
        <SearchMenu 
          searchChange={this.onSearchChange} 
          textChange={this.onTextChange} 
          sizeChange={this.onSizeValueChange}
          searchReset={this.onSearchReset}
        />
        <CardList 
            fonts={filteredFonts} 
            textfield={textfield} 
            size={size}
          />        
        <Footer />
        </div>
      );
  }
}

export default App;