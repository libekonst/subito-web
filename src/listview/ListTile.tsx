import React, { FC } from 'react';
import s from './ListTile.module.scss';
export const ListTile: FC<any> = props => (
  <section className={s.container}>
    <div className={s.avatar} />
    <div className={s.info}>
      <p className={s.info__name}>Αλεξανδρος Λιγκας</p>
      <p className={s.info__vat}>123123123</p>
    </div>
  </section>
);
