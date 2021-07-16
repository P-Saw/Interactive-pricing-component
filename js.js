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
const pageviews = document.querySelector('.pageviews');

const changePrice = () =>{
    let price;
    let views;
    switch(rangeValue()){
        case 0:
            price = 8.00;
            views = '10K';
            break;
        case 25:
            price = 12.00;
            views = '50K';
            break;
        case 50:
            price = 16.00;
            views = '100K';
            break;
        case 75:
            price = 24.00;
            views = '500K';
            break;
        case 100:
            price = 32.00;
            views = '1M';
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
    pageviews.textContent = `${views} PAGEVIEWS`;
};

range.addEventListener('input',changePrice);
discount.addEventListener('click', changePrice);