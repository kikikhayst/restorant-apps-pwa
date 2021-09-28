import FavoriteRestaurantIdb from '../data/favoriterestaurant-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/templates-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this.LikeButtonContainer = likeButtonContainer;
    this.Restaurant = restaurant;

    await this.RenderButton();
  },

  async RenderButton() {
    const { id } = this.Restaurant;

    if (await this.IsRestaurantExist(id)) {
      this.RenderLiked();
    } else {
      this.RenderLike();
    }
  },

  async IsRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getResto(id);
    return !!restaurant;
  },

  RenderLike() {
    this.LikeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putResto(this.Restaurant);
      this.RenderButton();
    });
  },

  RenderLiked() {
    this.LikeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteResto(this.Restaurant.id);
      this.RenderButton();
    });
  },
};

export default LikeButtonInitiator;
