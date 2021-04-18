import React from 'react';
import PropTypes from 'prop-types'; 

const foodILike = [
  {
    id:'1',
    name: "Orange",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allfreschgroup.com%2Fwp-content%2Fuploads%2F2017%2F01%2FValencia-Orange.png&f=1&nofb=1",
    rating: 5,
  },
  {
    id:'2',
    name: "1222",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allfreschgroup.com%2Fwp-content%2Fuploads%2F2017%2F01%2FValencia-Orange.png&f=1&nofb=1",
      rating: 3,
    },
  {
    id:'3',
    name: "3333",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allfreschgroup.com%2Fwp-content%2Fuploads%2F2017%2F01%2FValencia-Orange.png&f=1&nofb=1",
      rating: 4.3,
    },

];

function Food({name, picture, rating}) {
  return (
  <div>
    <h1>I like f {name}</h1>
    <h4>{rating}/5</h4>
    <img src={picture} alt={name}/>
  </div>);
  
}


Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
  // rating: PropTypes.number 인 경우 꼭 없어도 됨
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} rating={dish.rating} picture={dish.image} />
      ))}
      </div>

  );
}

export default App;
