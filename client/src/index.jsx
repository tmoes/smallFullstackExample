import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Dropdown from './Components/Dropdown.jsx';
import MushroomList from './Components/MushroomList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mushroomList: []
    }
  }

  getMushroomList() {
    var region = document.getElementById('region').value;
    console.log(`/${region}`);
    $.ajax({
      type: 'GET',
      url: `/${region}`,
      success: (mushroomList) => {
        console.log('MushroomList success call:', mushroomList);
        this.setState( {mushroomList: mushroomList} );
      },
      error: (err) => {
        console.log('GET request failed:', err);
      }
    });
  }

  render () {
    return (
      <div>
        <h1>Regional Edible Mushroom ID</h1>
        <Dropdown getMushroomList={this.getMushroomList.bind(this)}/>
        <MushroomList mushroomList={this.state.mushroomList}/>
      </div>
    );
  };
}

ReactDom.render(<App />, document.getElementById('app'));