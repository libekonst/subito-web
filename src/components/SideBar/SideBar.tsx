import React, { FC } from 'react';
import s from './SideBar.module.scss';

export const SideBar: FC<any> = props => {
  return (
    <aside className={s.SideBar}>
      <button>Προσθήκη Υπαλλήλου</button>
    </aside>
  );
};
