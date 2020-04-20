import React, {Component} from 'react';
import './App.css';
import {CardList} from  './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super(); //calls the constructor method on the component class
    
    this.state = {
      monsters:[],
      searchField: ''
    }

    //this.handleChange = this.handleChange.bind(this);//.bind is a method on any function that returns a ne function where the context 
    //of THIS is set to whatever we pass to it-> or we can do an arrow function in handleChange
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) //takeing the response and converting to json for javascript to understand
      .then(users => this.setState({monsters: users}));
  }

  handleChange = e => {//in the context of this function, THIS is not defined! we need to state what context we want it to be--> define in constructor or create an ARROW FUNCTION
    this.setState({searchField: e.target.value})

  }

  render (){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox 
          placeHolder= 'Search Monsters'
          handleChange={this.handleChange}
        //THIS is a special keyword in javascript that references the context in which is being invoked. this.state is trying to reference the state on 
        //the class component. 
        
        />
        <CardList monsters={filteredMonsters}/>     
      </div>
    );
  }
}
 

export default App;
