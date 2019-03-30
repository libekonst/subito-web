import React, { FC } from 'react';
import s from './ListView.module.scss';
import { IEmployee } from '../../interfaces/IEmployee';
interface IProps {
  employee: IEmployee;
}
export const ListTile: FC<IProps> = props => (
  <li className={s.ListTile}>
    <div className={s.ListTile__avatar} />
    <dl className={s.ListTile__info}>
      <dt className={s.ListTile__info__name}>{props.employee.name}</dt>
      <dd className={s.ListTile__info__vat}>{props.employee.vat}</dd>
    </dl>
  </li>
);
