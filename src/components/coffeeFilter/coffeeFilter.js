import { Component } from 'react';

import './coffeeFilter.scss';

class CoffeeFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            buttonsData: [
                {name: 'Brazil', id: 1},
                {name: 'Kenya', id: 2},
                {name: 'Columbia', id: 3}
            ]
        }
    }

    onValueChange = (e) => {
        const value = e.target.value;
        this.setState({value});
        this.props.onUpdateSearch(value);
        // console.log(value);
    }

    

    buttons = () => {
        const checkActive = (e, name) => {
            const targetClassList = e.target.classList;
            if(targetClassList && targetClassList.contains('filters__button_active')) {
                this.props.onFilterSelect('');
            } else {
                this.props.onFilterSelect(name);
            }
        }
        return (
            this.state.buttonsData.map(({name, id}) => {
                const active = this.props.filter === name;
                const clazz = active ? 'filters__button filters__button_active' : 'filters__button';
                return (
                    <button 
                        className={clazz}
                        type="button"
                        key={id} 
                        onClick={(e) => checkActive(e, name)}>
                                <span>{name}</span>
                    </button>
                )
            })
        )
    }

    render() {
        return (
            <div className="filters">
                <div className="filters__search">
                    <label htmlFor="filters__input">Looking for</label>
                    <input 
                        type="text"
                        className='filters__input'
                        id="filters__input"
                        value={this.state.value}
                        placeholder='start typing here...'
                        onChange={this.onValueChange}
                    />
                </div>
                <div className="filters__countries">
                    <label>Or filter</label>
                    <div className="filters__list">
                        {this.buttons()}
                    </div>
                </div>
            </div>
        )
    }
}

export default CoffeeFilter;