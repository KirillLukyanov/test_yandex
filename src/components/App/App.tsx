import { Outlet } from 'react-router-dom';
import { AppBar } from 'components';
import 'styles/index.css';
import s from './App.module.css';

export const App = () => (
  <div className={s.app}>
    <AppBar />
    <Outlet />
  </div>
);
