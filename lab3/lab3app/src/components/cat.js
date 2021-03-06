import React from 'react';
import '../styles.css';

//creating Cat component
class Cat extends React.Component {
    render (cat, pet) {
        return (
            //defining props for onClick
            <div>
                <img onClick = {this.props.catpets} src = {this.props.catimage} alt = "Kitten" />
            </div>
        )
    }
}

//exporting component
export default Cat;