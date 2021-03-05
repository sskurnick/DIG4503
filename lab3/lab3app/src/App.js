import React from 'react';
import HomePage from './components/homepage';
import Paragraph from './components/paragraph';
import Cat from './components/cat';
import cat from './wanda.jpg';
import './styles.css';

function App() {
  //constants to define names
  const fname = 'Sam';
  const cname = 'Wanda';

  //function for pet alert
  function pet() {
    alert('Thanks for giving Wanda pets!');
  }

  //adding components
  return (
    <body>
      <div>
        <HomePage firstName = {fname}/>
        <Cat catimage = {cat} catpets = {pet}/>
        <Paragraph catname = {cname}/>
      </div>
    </body>
  )
}

export default App;