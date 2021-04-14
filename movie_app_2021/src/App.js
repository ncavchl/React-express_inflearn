import React from 'react';

function Food({fav}) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>main</h1>

      <Food fav="kimchi" />
      <Food fav="aaabb" />
      <Food fav="smsm" />
      <Food fav="long" />
    </div>

  );
}

export default App;
