"use strict";

const product_details = document.querySelector('.details');
const product_features = document.querySelector('.product-feature__container');

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = products[id];

console.log(product);

const details_HTML = `
    <div class="details__image">
        <img src="../${product.src}" alt="${product.name}" />
      </div>
      <div class="details__content">
        <h1 class="details__heading">
          ${product.basic_feature}<br />
          <span>${product.name}</span>
        </h1>
        <p class="details__paragraph">
          ${product.product_description}
        </p>
        <div class="details__bottom">
          <span class="details__bottom__price">$${product.price}</span>
          <button class="details__bottom__button">
            <svg class="details__bottom__icon">
              <use xlink:href="../img/spritee.svg#icon-cart"></use>
            </svg>
          </button>
        </div>
        <div class="details__manufacture">
          <h2 class="details__manufacture__heading">Manufactured By</h2>
          <h3 class="details__manufacture__name">${product.manufactured_by}</h3>
        </div>
      </div>
    `;

product_details.insertAdjacentHTML('beforeend' ,details_HTML );


const features_HTML = `
        <h1 class="product-feature__title">PRODUCT FEATURES</h1>

        <div class="product-feature__grid">
          <div class="product-feature__grid__item">
            <span class="label">Connectivity Options</span>
            <h2>${product.features.Connectivity_Options}</h2>
          </div>

          <div class="product-feature__grid__item">
            <span class="label">Dimensions</span>
            <h2>${product.features.Dimensions}</h2>
          </div>

          <div class="product-feature__grid__item">
            <span class="label">Weight</span>
            <h2>${product.features.Weight}</h2>
          </div>

          <div class="product-feature__grid__item">
            <span class="label">Color</span>
            <h2>${product.features.Color}</h2>
          </div>

          <div class="product-feature__grid__item">
            <span class="label">Safety Features</span>
            <h2>${product.features.Safety_Features}</h2>
          </div>

          <div class="product-feature__grid__item">
            <span class="label">Power Source</span>
            <h2>${product.features.Power_Source}</h2>
          </div>

          <div class="product-feature__grid__item">
            <span class="label">Ports</span>
            <h2>${product.features.Ports}</h2>
          </div>

          <div class="product-feature__grid__item">
            <span class="label">Build Material</span>
            <h2>${product.features.Build_Material}</h2>
          </div>
        </div>
        `;

product_features.insertAdjacentHTML('afterbegin' , features_HTML);