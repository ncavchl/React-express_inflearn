import React from 'react';

function Food({key, name, picture}) {
  return (
  <div>
    <h1>I like {name} + {key}</h1>
    <img src={picture}/>
  </div>);
  
}
const foodILike = [
  {
    key:'1',
    name: "Orange",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allfreschgroup.com%2Fwp-content%2Fuploads%2F2017%2F01%2FValencia-Orange.png&f=1&nofb=1",
  },
  {
    key:'2',
    name: "1222",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allfreschgroup.com%2Fwp-content%2Fuploads%2F2017%2F01%2FValencia-Orange.png&f=1&nofb=1",
  },
  {
    key:'3',
    name: "3333",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allfreschgroup.com%2Fwp-content%2Fuploads%2F2017%2F01%2FValencia-Orange.png&f=1&nofb=1",
  },

];

function renderFood(dish){
  return <Food name={dish.name} picture={dish.image} />
}

function App() {
  return (
    <div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map( renderFood )}
    </div>

  );
}

export default App;
