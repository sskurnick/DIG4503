import React, {Component} from 'react';
import Item from './item'

class Market extends Component {
    //including constructor to use state
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };

    render() {
        
        return(
            //use onClick when button is pressed to increase count
            <div>
                <Item count={this.state.count}/>
                <button onClick={() => this.setState({count: this.state.count +1})}>Add Item</button>
            </div>
            //arrow function used to refer this back to class Market
        );
    }
}

export default Market;