import React, { Component } from 'react';
import s from './App.module.scss';
import { ListView } from './components/ListView/ListView';
import { SideBar } from './components/SideBar/SideBar';
import { AppBar } from './components/AppBar/AppBar';

class App extends Component {
  state = {
    employees: [
      {
        name: 'Παπαγεωργίου Ηλιάνα',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Αλέξανδρος Λίγκας-Τριαντόπουλος',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Χιονίδης Ιωάννης',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Ταργκαρίδη Δανάη',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Παπαγεωργίου Ηλιάνα',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Αλέξανδρος Λίγκας-Τριαντόπουλος',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Χιονίδης Ιωάννης',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Ταργκαρίδη Δανάη',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Παπαγεωργίου Ηλιάνα',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Αλέξανδρος Λίγκας-Τριαντόπουλος',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Χιονίδης Ιωάννης',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Ταργκαρίδη Δανάη',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Ριχάρδος Γρίμης',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Κωσταnτίνος Λυμπερόπουλος',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Παπαγεωργίου Ηλιάνα',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Αλέξανδρος Λίγκας-Τριαντόπουλος',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Χιονίδης Ιωάννης',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Ταργκαρίδη Δανάη',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Ριχάρδος Γρίμης',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
      {
        name: 'Κωσταnτίνος Λυμπερόπουλος',
        vat: '123123123',
        startHour: '8:00',
        finishHour: '16:00',
      },
    ],
  };

  render() {
    return (
      <div className={s.App}>
        <AppBar />
        <SideBar />
        <ListView employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
