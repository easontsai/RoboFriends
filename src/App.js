import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    }
  }

onSearchChange = (event) => {
  this.setState({ searchfield: event.target.value })

}

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div>
        <h1 className='tc'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        {/*CardList = ({ robots }) - Props passing down
        render CardList 中robots這個結構，資料來自{robots}，結構呈現樣子在Cardlist中實現*/}
        <CardList robots={filteredRobots}/>
      </div>

    );
  }
}


export default App;
