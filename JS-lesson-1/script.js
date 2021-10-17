"use strict";
const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (cards) => {
  return `<div class="goods-item">
  <h3>${cards.title}</h3>
  <p>${cards.price}</p>
  <img class = "img" src="img/women.png" alt="#">
  <button class="buy-bth">Купить</button>
  </div>`;
};

const renderGoodsList = list => {
  let goodsList = list.map(item => renderGoodsItem(item));
  console.log(goodsList);
  document.querySelector('.goods-list').innerHTML = goodsList.join("");
}

renderGoodsList(goods);
