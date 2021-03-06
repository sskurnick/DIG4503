import React from 'react';
import '../styles.css';

//creating Paragraph component
class Paragraph extends React.Component {

    //render function passes cat name prop
    render (cname) {
        return <div>
        <p>This past weekend, I adopted a new kitten named {this.props.catname}. 
        Her favorite things to do are jump and play with her toys! 
        Click on her picture to give her some pets. :)</p>
    </div>
    } 
}

//exporting component
export default Paragraph;