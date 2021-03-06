import React from 'react';
import '../styles.css';

//component from original lab
class HomePage extends React.Component {

    //name prop passed to display name
    render(fname) {
        return <h1>{this.props.firstName}'s New Kitten</h1>;
    }
}

//exporting component
export default HomePage;