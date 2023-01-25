import { Outlet } from 'react-router-dom';
import s from './HomeTab.module.scss';

const HomeTab = () => {
  return (
    <table>
      <tr>
        <th className={s.test}>Date</th>
        <th>Type</th>
        <th>Category</th>
        <th>Comment</th>
        <th>Sum</th>
        <th>Balance</th>
      </tr>
      <Outlet />
    </table>
  );
};

export default HomeTab;
