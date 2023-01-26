import { Link } from 'react-router-dom';
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
              <h2 className={s.title}>Opps... Page Not Found!</h2>
              <p className={s.desc}>
                But does it matter if leopards are already in Ukraine? Click{' '}
                <Link to="/" className={s.link}>
                  here{' '}
                </Link>{' '}
                to get back to home page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
