import React from 'react';

class AgeSearch extends React.Component {
    readAge(event) {
        //stops any steps and functions
        event.preventDefault();
        
        let element = document.querySelector("#age");

        //finds path /ages/ and variable's element value
        fetch("/ages/" + element.value)
        .then((res) => {
            return res.json();
        })
        .then((processed) => {
            let reporting = document.querySelector("#reportingArea");

            //if processed data returns an error
            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.name;
            }
        });

        element.value = "";
    }
    render() {
        return(
            <div>
                <h2>Age</h2>
                <form onSubmit={this.readAge}>
                    <input id="age" type="text"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AgeSearch;