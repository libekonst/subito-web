import React, { FC } from 'react';
import { IEmployee } from '../../interfaces/IEmployee';
import { ListTile } from './ListTile';
import s from './ListView.module.scss';
interface IProps {
  employees: IEmployee[];
}
export const ListView: FC<IProps> = ({ employees }) => {
  return (
    <ul className={s.ListView}>
      {employees.map(e => (
        <ListTile employee={e} />
      ))}
    </ul>
  );
};
