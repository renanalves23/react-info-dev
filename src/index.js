import React from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

/**
 * Our data
 * ------------------------
 */
const user = {
  name: 'Renan on Code',
  location: 'Las Vegas',
  foodType: 'Italian and barbecue',
  age: 25,
  likes: 'Coding',
  githubUsername: 'renanalves23',
  avatar:
    'https://vertigo.com.br/wp-content/uploads/Saiba-o-que-%C3%A9-React-e-porque-voc%C3%AA-gostaria-de-utiliz%C3%A1-lo-1200x675.jpg'
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">
       <h3>{user.name}</h3> 

       <p>
         <strong>Location</strong>
          {user.location}
       </p>

       <p>
         <strong>Eats</strong>
          {user.foodType}
       </p>

       <p>
         <strong>Age</strong>
          {user.location}
       </p>
       
       <p>
         <strong>Github</strong>
          {user.githubUsername}
       </p>

      </div>


      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
