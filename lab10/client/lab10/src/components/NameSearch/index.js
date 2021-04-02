import React from 'react';

class NameSearch extends React.Component {
    readName(event) {
        //stops any steps and functions
        event.preventDefault();

        let element = document.querySelector("#name");

        //finds path /employees/ and variable element value
        fetch("/employees/" + element.value)
        .then((res) => {
            return res.json();
        })
        .then((processed) => {
            let reporting = document.querySelector("#reportingArea");
            //if processed data returns an error
            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.age;
            }
        });
        element.value = "";
    }
    render() {
        return(
            <div>
                <h2>Name</h2>
                <form onSubmit={this.readName}>
                    <input id="name" type="text"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default NameSearch;