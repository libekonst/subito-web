import React, { FC } from 'react';
import style from './ListTile.module.scss';
export const ListTile: FC<any> = props => (
  <div className={style.container}>
    <div className={style.hour}>
      <div className={style.hour__start}>9:00</div>
      <div className={style.hour__finish}>17:00</div>
    </div>
    <div className={style.info}>
      <div className={style.info__name}>Αλεξανδρος Λιγκας</div>
      <div className={style.info__vat}>123123123</div>
    </div>
  </div>
);
