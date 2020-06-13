import React, { Component } from "react";
import styled from 'styled-components'
import "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
  border: 1px solid blue;
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  padding: 8px;
  cursor: pointer;
  transition: 2s all ease;
  &:hover {
    background-color: ${props => props.alt ? 'yellow' : 'blue'};
    transition: 2s all ease;
  }
`

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    display: false,
  };
  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    const person = {...this.state.persons[personIndex]}
    person.name = e.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons})
  };
  displayHandler = () => {
    const displaychange = this.state.display;
    this.setState({ display: !displaychange });
  };
  deleteHandler = (index) => {
    console.log(index);
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };
  DC = () => {
    let classes = ''
    classes += this.state.display === true ? 'red bold' : ''
    return classes
  }
  render() {
    // let style = {
    //   border: "1px solid blue",
    //   backgroundColor: "green",
    //   color: 'white',
    //   font: "inherit",
    //   padding: "8px",
    //   cursor: "pointer",
    //   transition: "2s all ease",
    //   ':hover' : {
    //     backgroundColor: 'blue',
    //     transition: "2s all ease"
    //   }
    // };
    let persons = null;
    // let classes = []
    if (this.state.display) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              change={(e) => this.nameChangeHandler(e, person.id)}
              key={person.id}
              click={() => this.deleteHandler(index)}
              name={person.name}
              age={person.age}
            />
          ))}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'yellow',
      //   transition : '2s all linear'
      // }
      // classes = ['red', 'bold'].join(' ')
    }
    return (
        <div className="App">
        <h1 className={this.DC()}>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <StyledButton alt={this.state.display} onClick={this.displayHandler}>
          Switch Name
        </StyledButton>
        {persons}
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;
