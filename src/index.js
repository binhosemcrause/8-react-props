//Import React
import React from 'react';
import ReactDOM from 'react-dom/client';

const customStyle = {
  height: "300px",
  width: "300px"
}

//You first create  the root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Create a element
const element = (
  <div>
    <h1>My 3 favourite restaurants in Melboune</h1>

    <h2>Mama Manoush</h2>
    <img style={customStyle}
      src="https://thecitylane.com/wp-content/uploads/2018/09/DSCF0250.jpg"
      alt="place_img"
    />
    <p>+123 456 789</p>
    <p>r@mama-manoush.com</p>

    <h2>Universal Restaurant</h2>
    <img style={customStyle}
      src="https://www.bestrestaurants.com.au/media/ep5fwsu0/3.jpg?width=1200&rnd=132893854648570000"
      alt="place_img"
    />
    <p>+987 654 321</p>
    <p>r@universal-restaurant.com</p>

    <h2>Bossa Nova Restaurant</h2>
    <img style={customStyle}
      src="https://bossafood.com/wp-content/uploads/2019/06/ChickenBossaGrill_bossanova_baixa-352.jpg"
      alt="place_img"
    />
    <p>+918 372 574</p>
    <p>r@bossa-nova.com</p>
  </div>
);

//Render the HTML element on the root
root.render(element);