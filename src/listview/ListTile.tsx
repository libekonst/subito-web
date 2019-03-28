import React, { FC } from 'react';
import s from './ListTile.module.scss';
export const ListTile: FC<any> = props => (
  <li className={s.container}>
    <div className={s.avatar} />
    <dl className={s.info}>
      <dt className={s.info__name}>Αλεξανδρος Λιγκας</dt>
      <dd className={s.info__vat}>123123123</dd>
    </dl>
  </li>
);
