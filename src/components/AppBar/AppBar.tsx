import { Link } from 'react-router-dom';
import { routerPathsList } from 'router';
import s from './AppBar.module.css';

export const AppBar = () => (
  <div className={s.appBar}>
    {routerPathsList.map(({ path, name }) => (
      <Link
        to={path}
        key={path}
      >
        {name}
      </Link>
    ))}
  </div>
);
