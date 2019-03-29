import React, { FC } from 'react';
import s from './ListTile.module.scss';
import { IEmployee } from '../interfaces/IEmployee';
interface IProps {
  employee: IEmployee;
}
export const ListTile: FC<IProps> = props => (
  <li className={s.container}>
    <div className={s.avatar} />
    <dl className={s.info}>
      <dt className={s.info__name}>{props.employee.name}</dt>
      <dd className={s.info__vat}>{props.employee.vat}</dd>
    </dl>
  </li>
);
