import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

const state = {
  robots: robots,
  searchfield: '',
}

//class component vs const props
class App extends Component {
  constrctor() {

  }
  reder() {
    return (
      <div>
        <h1 className='tc'>RoboFriends</h1>
        <SearchBox />
      {/*CardList = ({ robots }) - Props passing down
        render CardList 中robots這個結構，資料來自{robots}，結構呈現樣子在Cardlist中實現*/}
        <CardList robots={robots}/>
      </div>

    );
  }
}
const App = () => {
  return (
    <div>
      <h1 className='tc'>RoboFriends</h1>
      <SearchBox />
    {/*CardList = ({ robots }) - Props passing down
      render CardList 中robots這個結構，資料來自{robots}，結構呈現樣子在Cardlist中實現*/}
      <CardList robots={robots}/>
    </div>

  );

}

export default App;
