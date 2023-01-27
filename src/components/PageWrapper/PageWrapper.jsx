import React from 'react';

import s from './PageWrapper.module.scss';

export default function PageWrapper({ children }) {
  return (
    <div className={s.bg_page}>
      <div className={s.bg_blur}>
        <div className={s.container}>
          <div className={s.wrapper}>{children}</div>
        </div>
      </div>
    </div>
  );
}
