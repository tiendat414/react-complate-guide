import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Mr.dat', age: 29 },
      { name: 'Mr.Cuong', age: 21 },
    ],
    differentValue: 'something',
    showContent: true
  }
  functionClick = (data) => {
    // console.log("tested");
    const show = this.state.showContent;
    this.setState({
      // persons:[
      //   { name:data , age:28},
      //   { name:'Mr.Cuong_change' , age:21},
      // ],
      showContent: !show
    })
  }
  functionChange = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: 'Mr.Cuong_change', age: 21 },
      ]
    })
  }

  render() {
    let person = null;
    if (this.state.showContent) {
      person = (
        <div>
          {this.state.persons.map(person=> {
            return <Person name ={person.name} age = {person.age} />
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} change={this.functionChange} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Test Child</Person> */}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, my first app</h1>
        <p>This is second tag</p>
        <p>Different is : {this.state.differentValue}</p>
        <button onClick={this.functionClick.bind(this, "Binding data")}>Hit Me</button>
        {person}
      </div>
    );
  }
}

export default App;
