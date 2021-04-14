import React from 'react';


const foodILike = [
  {
    id:'1',
    name: "Orange",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allfreschgroup.com%2Fwp-content%2Fuploads%2F2017%2F01%2FValencia-Orange.png&f=1&nofb=1",
  },
  {
    id:'2',
    name: "1222",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allfreschgroup.com%2Fwp-content%2Fuploads%2F2017%2F01%2FValencia-Orange.png&f=1&nofb=1",
  },
  {
    id:'3',
    name: "3333",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allfreschgroup.com%2Fwp-content%2Fuploads%2F2017%2F01%2FValencia-Orange.png&f=1&nofb=1",
  },

];

function Food({name, picture}) {
  return (
  <div>
    <h1>I like f {name}</h1>
    <img src={picture} alt={name}/>
  </div>);
  
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={true} />
      ))}
      </div>

  );
}

export default App;
