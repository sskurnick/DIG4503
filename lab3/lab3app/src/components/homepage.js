import React from 'react';
import '../styles.css';

//component from original lab
class HomePage extends React.Component {

    //name prop passed to display name
    render(fname) {
        return <h1>Hi! My name is {this.props.firstName}</h1>;
    }
}

export default HomePage;