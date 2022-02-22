import contacts from './contacts.json';
import './App.css';
import {useState} from 'react'

function App() {
  const [firstFive, setFirstfive] = useState(contacts.slice(0, 5)) 

  console.log(firstFive)
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th> Picture</th>
            <th> Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {firstFive.map((elm, idx) => {
            return (
              <tr key={idx}>
                <td><img src={elm.pictureUrl} alt={elm.name} /> </td>
                <td> <p>{elm.name}</p></td>
                <td><p>{elm.popularity}</p></td>
                <td> {elm.wonOscar ? <p>🏆</p> : <p> Good Luck!</p>}</td>
                <td> {elm.wonEmmy ? <p>🏆</p> : <p> Good Luck Friend!</p>}</td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
      {/* <button onClick={ addContacts} > Add Contact</button> */}
    </div>
  );
}

export default App;
