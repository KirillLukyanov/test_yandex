import { Outlet } from 'react-router-dom';
import { AppBar } from 'components';
import s from './App.module.css';

export const App = () => (
  <div className={s.app}>
    <AppBar />
    <div className={s.app_content}>
      <Outlet />
    </div>
  </div>
);
