import './coffeeItem.scss';

const CoffeeItem = ({imgProduct, nameProduct, country, price}) => {
    
    return (
        <li className='coffee-item'>
            <a className="coffee-item__link" href="#somelink">
                <img 
                    src={process.env.PUBLIC_URL + `/images/products/${imgProduct}.png`}
                    alt={nameProduct}
                    className="coffee-item__img"
                />
                <p className='descr coffee-item__title'>{nameProduct}</p>
                <p className="descr coffee-item__country">{country}</p>
                <p className='descr coffee-item__price'>{`${price}$`}</p>
            </a>
        </li>
    )
}

export default CoffeeItem;