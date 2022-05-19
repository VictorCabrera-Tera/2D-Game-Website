import axios from "axios"
import React, { useEffect, useState } from "react"
import * as ReactBootStrap from 'react-bootstrap'
import { Button} from 'react-bootstrap'

/*async componentDidMount() {
  let debits = await axios.get('https://moj-api.herokuapp.com/debits');
  this.setState({ debits: debits.data });
  let credits = await axios.get('https://moj-api.herokuapp.com/credits');
  this.setState({ credits: credits.data });
} */

function LeaderBoard() {
  const [scores, setEmail] = useState([
    {
      name: "",
      score: "",
    },
  ]);
  const [name, setName] = useState([
    {
      name: "",
      score: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((jsonRes) => (setName,setEmail)(jsonRes));
  }, []); 


  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((jsonRes) => console.log(jsonRes));
  }, [setEmail]); 
  return (
    <div className="leaderBoard">
      <div class="align-items-center my-5">
        <h1 class="font-weight-light">Top 10 scores</h1>
        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>Place</th>
              <th>UserName</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Intero99</td>
              <td>3000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>impishperth</td>
              <td>2795</td>
            </tr>
            <tr>
              <td>3</td>
              <td>incisivelincoln</td>
              <td>2560</td>
            </tr>
            <tr>
              <td>4</td>
              <td>trenchcoatpeterborough</td>
              <td>2460</td>
            </tr>
            <tr>
              <td>5</td>
              <td>tailsurrey</td>
              <td>2399</td>
            </tr>
            <tr>
              <td>6</td>
              <td>discoursemadison</td>
              <td>2320</td>
            </tr>
            <tr>
              <td>7</td>
              <td>historyalabama</td>
              <td>2250</td>
            </tr>
            <tr>
              <td>8</td>
              <td>sunflowersalisbury</td>
              <td>2230</td>
            </tr>
            <tr>
              <td>9</td>
              <td>criticallouisiana</td>
              <td>2200</td>
            </tr>
            <tr>
              <td>10</td>
              <td>homesvancouver</td>
              <td>2156</td>
            </tr>
          </tbody>
        </ReactBootStrap.Table>
        <h2>Submit your score here! </h2>
        <div className="col">
      <h1>Mi Casa</h1>
      <p>This is my house y&apos;all!</p>
      {(name,scores).map(scores => <div> this is your score {(name,scores).score} this is your name {(name,scores).name}</div>)}
    </div>
     {/* <Button variant = "success">button</Button>   {(name,score).map(score => <div>{(name,score).score}</div>)}  
     <form>
				<input type="text" placeholder="User Name"
				value={name} onChange={(e) => setName(e.target.value)} />
				<input type="number" placeholder="Score"
				value={score} onChange={(e) => setEmail(e.target.value)} />
				<button type="submit"
				onClick={handleOnSubmit}>submit</button>
  </form> */}
      </div>
      
    </div>
  );
}
export default LeaderBoard;