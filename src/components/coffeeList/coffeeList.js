import CoffeeItem from '../coffeeItem/coffeeItem';

import './coffeeList.scss';

const CoffeeList = ({data}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <CoffeeItem key={id} {...itemProps} />
        )
    })

    const list = () => {
        if (data.length === 0){
            return(
                
                <p className="error">Products not found</p>
            )
        }

        return (
            <ul className='coffeeList'>
                {elements}
            </ul>
        );
    }
    return(
        list()
    )
}

export default CoffeeList;