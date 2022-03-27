import { IRoute } from '@/models';
import { Dashboard, ItemList } from '@/pages';

const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    component: Dashboard,
  },
  {
    path: '/detail/:id',
    exact: true,
    component: ItemList,
  },
];

export default routes;
