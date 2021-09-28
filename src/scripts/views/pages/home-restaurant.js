import restaurantDbSource from '../../data/restaurantdb-source';
import { createRestoTemplate } from '../templates/templates-creator';

const Restaurant = {
  async render() {
    return `
        <div id="main" class="mainContent">
            <div class="mainList">
                <div class="mainItem" id="mainItem">
                
                </div>
            </div>
        </div>
    `;
  },

  async afterRender() {
    const restos = await restaurantDbSource.restaurantList();
    // console.log(resto);

    const restaurantContainer = document.querySelector('#mainItem');
    restos.forEach((data) => {
      restaurantContainer.innerHTML += createRestoTemplate(data);
    });
  },
};

export default Restaurant;
