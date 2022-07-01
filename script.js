const select = (element) => document.querySelector(element);
const selectAll = (element) => document.querySelectorAll(element);

pizzaJson.map((item, index) => {
  let pizzaItem = select('.models .pizza-item').cloneNode(true);

  pizzaItem.setAttribute('data-key', index);

  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML =  item.description;

  pizzaItem.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault();

    let key = event.target.closest('.pizza-item').getAttribute('data-key');

    select('.pizzaBig img').src = pizzaJson[key].img;
    select('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    select('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
    
    
    select('.pizzaWindowArea').style.display.opacity = 0;
    select('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
      select('.pizzaWindowArea').style.opacity = 1;
    }, 200);

  });

  select('.pizza-area').append(pizzaItem);
});