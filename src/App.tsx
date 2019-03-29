import React, { Component } from 'react';
import s from './App.module.scss';
import { ListTile } from './ListTile/ListTile';
import { IEmployee } from './interfaces/IEmployee';

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
  renderListTiles = (employees: IEmployee[]) => {
    return employees.map(emp => <ListTile employee={emp} />);
  };
  render() {
    return (
      <div className={s.App}>
        <header className={s.header}>Subito</header>
        <div className={s.ListView}>
          <div className= {s.ListViewHeader}></div>
          <ul className={s.employeesList}>
            {this.renderListTiles(this.state.employees)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
