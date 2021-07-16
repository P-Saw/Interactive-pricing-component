const range = document.querySelector('.range');

range.addEventListener('input', () =>{
    const x = range.value;
    const color = `linear-gradient(90deg, hsl(174, 86%, 45%) ${x}%, white ${x}%)`;
    range.style.background = color;
});

const rangeValue = () => {
    return parseInt(range.value);
};

const discount = document.querySelector('.check');
const priceSpan = document.querySelector('.price');

const changePrice = () =>{
    let price;
    switch(rangeValue()){
        case 0:
            price = 8.00;
            break;
        case 25:
            price = 12.00;
            break;
        case 50:
            price = 16.00;
            break;
        case 75:
            price = 24.00;
            break;
        case 100:
            price = 32.00;
            break;
    }
    if(discount.checked){
        const newPrice = price * 0.75;
        priceSpan.classList.add('promo')
        priceSpan.textContent = `$${newPrice.toFixed(2)}`;
    } else {
        priceSpan.classList.remove('promo')
        priceSpan.textContent = `$${price.toFixed(2)}`;
    }
};

range.addEventListener('input',changePrice);
discount.addEventListener('click', changePrice);