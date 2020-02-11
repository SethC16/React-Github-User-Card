import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import axios from "axios";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  state = {
    user: [],
    followers: []
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/SethC16")
    .then(res => {
      console.log(res.data)
      this.setState({
        user: res.data
      });
      })
      .catch ( err => {
        console.log(err, 'this is an error');
    });
    axios.get('https://api.github.com/users/SethC16/followers')
    .then ( response => {
      console.log(response.data)
      this.setState({
        followers: response.data
      })
    })
    .catch ( err => {
      console.log( err, 'this is an error')
    })
  }

 

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub Profiles</h1>
          <div className="user">
            <Card>
              <CardImg  src={this.state.user.avatar_url} alt="user"/>
                <CardBody>
                  <CardTitle>{this.state.user.name}</CardTitle>
                  <CardSubtitle>Username: {this.state.user.login}</CardSubtitle>
                  <CardText>Bio: {this.state.user.bio}</CardText>
                </CardBody>
          </Card>
          </div>
         </header>
          <div className="followerscard">
            {this.state.followers.map( person => {
              return (
              <div>
                <Card className="followers"> 
                  <CardImg src={person.avatar_url} alt="followerimg" />
                  <CardTitle><h3>{person.login}</h3></CardTitle>
                </Card>
              </div>
              )
              })}
          </div>
        
      </div>
    );
  }
}
export default App;
