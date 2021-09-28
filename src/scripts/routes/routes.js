import HomeRestaurant from '../views/pages/home-restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': HomeRestaurant, // default page
  '/home': HomeRestaurant,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
