import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import CardList from './CardList';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import {robots} from './robots'

ReactDOM.render(
    // CardList = ({ robots })
    // render CardList 中robots這個結構，資料來自{robots}，結構呈現樣子在Cardlist中實現
    <CardList robots={robots}/>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
