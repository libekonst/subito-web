import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.module.scss';
import { ListTile } from './listview/ListTile';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <ul>
          <ListTile />
          <ListTile />
          <ListTile />
          <ListTile />
          <ListTile />
          <ListTile />
          <ListTile />
        </ul>
      </div>
    );
  }
}

export default App;
