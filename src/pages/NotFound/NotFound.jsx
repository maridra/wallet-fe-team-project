import s from '../NotFound/NotFound.module.scss';

import sadLeopardIcon from '../../assets/Images/NotFoundPage/sad_leopard.png';

console.log(s);

export default function NotFound() {
  return (
    <>
      <div className={s.bg_page}>
        <div className={s.bg_blur}>
          <div className={s.container}>
            <div className={s.wrapper}>
              <img className={s.img} src={sadLeopardIcon} alt="sad leopard" />
              <h2 className={s.title}>NotFound</h2>
              <p className={s.desc}>NotFound</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
