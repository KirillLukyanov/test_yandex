import { Navigate, Outlet } from 'react-router-dom';
import { AppBar } from 'components';
import 'styles/index.css';
import { ROUTER_PATHS } from 'router';
import s from './App.module.css';

export const App = () => (
  <div className={s.app}>
    <AppBar />
    <Outlet />
    <Navigate to={ROUTER_PATHS.COUNTER} />
  </div>
);
