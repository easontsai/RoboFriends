import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import { Button, Modal } from 'antd';
import TaskTreeWindow from './TaskTreeWindow';




class App extends Component {
  // class - constructor
  // set state
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
      visible: false,
      isModalVisible: false,
    }
  }

onSearchChange = (event) => {
  this.setState({ searchfield: event.target.value })

}
onClick = (event) => {
  this.setState({visible: true});
}
showModal = () => {
  this.setState({isModalVisible: true});
};

handleOk = () => {
  this.setState({isModalVisible: false});
};

handleCancel = () => {
  this.setState({isModalVisible: false});
};

  render() {
    const filteredRobots = this.state.robots.filter( (robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <>
        <h1 className='tc'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <TaskTreeWindow/>

        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        {/*CardList = ({ robots }) - Props passing down
        render CardList 中robots這個結構，資料來自{robots}，結構呈現樣子在Cardlist中實現*/}
        <CardList robots={filteredRobots}/>


      <Modal
         title="Basic Modal"
         visible={this.state.isModalVisible}
         onOk={this.handleOk}
         onCancel={this.handleCancel}>
        <TaskTreeWindow/>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      </>

    );
  }
}


export default App;
