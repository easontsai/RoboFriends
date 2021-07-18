import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { Button, Modal } from "antd";
import Scroll from "../components/Scroll";

class App extends Component {
  // class - constructor
  // set state
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
      visible: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  onClick = (event) => {
    this.setState({ visible: true });
  };

  handleOk = () => {
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (robots.length === 0) {
      return <h1>LOADING ....</h1>;
    } else {
      return (
        <>
          <h1 className="tc">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />

          {/*CardList = ({ robots }) - Props passing down
          render CardList 中robots這個結構，資料來自{robots}，結構呈現樣子在Cardlist中實現*/}
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </>
      );
    }
  }
}

export default App;
