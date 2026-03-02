"use strict";



const productGrid = document.querySelector('.product__grid');
const featuredContainer = document.querySelector('.catalog__content');
const eleSale = document.querySelector('.product__image__badge');

const displayProducts = function (items) {
  items.forEach((element,i) => {
    const stars = '★'.repeat(element.rating);
    const out_of_stock = !element.in_stock ? 'product--out':'';

    const discount = element.discount ? element.discount : 0;

    let saleBadge = element.sale
      ? `<span class="product__image__badge">SALE -${discount}%</span>`
      : "";

    saleBadge = !element.in_stock
      ? `<span class="product__image__badge">OUT OF STOCK</span>`
      : "";

    const discountedPrice = element.sale
      ? Math.round(element.price - (element.price * discount) / 100)
      : element.price;

    const oldPriceHTML = element.sale
      ? `<span class="product__price__old">$${discountedPrice}</span>`
      : "";

    let html;   
    if(element.featured_product){
        html=`
            <div class="featured__container">
            <div class="featured__card">
                <div class="featured__image">
                <img src="${element.src}" alt="${element.name}" />
                </div>

                <div class="featured__details">
                <span class="featured__badge">FEATURED PRODUCT</span>

                <h2 class="featured__title">
                    ${element.basic_feature} <br />
                    ${element.name}
                </h2>

                <p class="featured__description">
                    ${element.product_description}
                </p>

                <div class="product__rating">
                <span class="product__rating__stars">${stars}</span>
                <span class="product__rating__count">(${element.rating_count})</span>
                </div>

                <div class="featured__bottom">
                    <span class="featured__bottom__price">$${element.price}</span>
                    <button class="featured__bottom__button">
                    <svg class="featured__bottom__icon">
                        <use xlink:href="img/spritee.svg#icon-cart"></use>
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            <div class="featured__back">
                <h4>Product Overview</h4>
                <p>
                ${element.product_description}
                </p>

                <a href="product_details/?id=${i}" class="button-light">
                VIEW DETAILS
                </a>
            </div>
            </div>;
        `;
        featuredContainer.insertAdjacentHTML('afterbegin' ,html);

    } 
    else{
        html = `
        <div class="product__container ${out_of_stock}">
            <div class="product__card">
                <div class="product__image">
                    ${saleBadge}
                    <img src="${element.src}" alt="${element.basic_feature} ${element.name}" />
                </div>

                <h3>${element.basic_feature} ${element.name}</h3>

                <div class="product__rating">
                <span class="product__rating__stars">${stars}</span>
                <span class="product__rating__count">(${element.rating_count})</span>
                </div>

                <div class="product__price">
                <div class="product__price__container">
                    ${oldPriceHTML}
                    <span class="product__price__new">$${element.price}Ξ</span>
                </div>
                <button class="featured__bottom__button">
                    <svg class="featured__bottom__icon">
                    <use xlink:href="img/spritee.svg#icon-cart"></use>
                    </svg>
                </button>
                </div>
            </div>
          <div class="product__back">
                <h4>Product Overview</h4>
                <p>
                ${element.product_description}
                </p>
                <a href="product_details/?id=${i}" class="button-light view-details">VIEW DETAILS</a>
          </div>
        </div>
        `;
        productGrid.insertAdjacentHTML('afterbegin' , html);

    }  
    
  });
};

displayProducts(products);


