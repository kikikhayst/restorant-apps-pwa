import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestoTemplate } from '../templates/templates-creator';

const Like = {
  async render() {
    return `
        <div id="main" class="mainContent">
            <div class="mainList">
                <div class="notFound">

                </div>
                <div class="mainItem" id="mainItem">
                
                </div>
            </div>
        </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestaurantIdb.getAllRestos();
    // console.log(resto);

    const restaurantContainer = document.querySelector('#mainItem');
    if (restos.length === 0) {
      document.querySelector('.notFound').innerHTML = `
        <h2>Maaf belum ada restaurant yang menjadi favorit Anda</h2>
      `;
    } else {
      restos.forEach((data) => {
        restaurantContainer.innerHTML += createRestoTemplate(data);
      });
    }
  },
};

export default Like;
