import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (data) => `
    <div class="detail">
        <h2 class="headerInformation">Informasi Resto</h2>
        <div class="headerInfo">
            <div class="pictureRestoDetail">
                <img src="${CONFIG.BASE_IMAGE_URL + data.pictureId}" alt="${data.name}">
            </div>
            <div class="infoNameAndDesc">
                <h1 class="titleRestoDetail_desktop">${data.name}</h1>
                <p class="infoDescDetail">${data.description}</p>
            </div>
        </div>

        <div class="otherInfo">
            <div class="subOtherInfo">
                <p class="itemCity">${data.city}</p>
                <p class="infoAddress">Alamat: ${data.address}</p>
                <p class="infoCategories">
                    Kategori: ${data.categories.map((category) => `${category.name}`).join(' - ')}
                </p>
                <h3 class="InfoFood">Daftar Panganan:</h3>
                <ol>
                ${data.menus.foods.map((menu) => `
                    <li>${menu.name}</li>
                    `).join('')}
                </ol>
                <h3 class="InfoDrinks">Daftar Ombenan:</h3>
                <ol>
                ${data.menus.drinks.map((menu) => `
                    <li>${menu.name}</li>
                    `).join('')}
                </ol>
                <p class="itemRating">Rating: <a href="#">${data.rating}</a></p>
            </div>

            <div class="reviewCust">
                <h2 class="headerInformation">Ulasan</h2>
                ${data.customerReviews.map((review) => `
                <div class="customerReview">
                    <p class="custReview">"${review.review}"</p>
                    <p class="custName">${review.name},</p>
                    <p class="custDate">${review.date}</p>
                </div>`).join('')}
            </div>
        </div>
    </div> 
`;

const createRestoTemplate = (data) => `
    <div class="item">
        <div>
            <img class="itemPicture" src="${CONFIG.BASE_IMAGE_URL + data.pictureId}" alt="${data.name}" title="${data.name}">
        </div>
        <p class="itemCity">${data.city}</p>
        <div class="itemDesc">
            <h1><a href="${`/#/detail/${data.id}`}">${data.name}</a></h1>
            <div>
                <p>${data.description.slice(0, 150)}...</p>
            </div>
            <p class="itemRating">Rating: <a href="#">${data.rating}</a></p>
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this resto" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this resto" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestoDetailTemplate,
  createRestoTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
