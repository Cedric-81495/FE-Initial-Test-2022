import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

// import { TestPage } from './components/test-p/test-page';

import './App.css';

class App extends Component {
constructor() {
super();

this.state = {      
monsters: [],
searchField: '',
employees: ['ralph','Cedric','kristel']
};

}

componentDidMount() {
fetch('http://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => this.setState({ monsters: users }));
}

handleClick1 = () => console.log('Hello');
render() {
const { monsters, searchField} = this.state;
const filteredMonsters = monsters.filter(monster =>
monster.name.toLowerCase().includes(searchField.toLowerCase())

);

return (
        <div className="App">
        <SearchBox
        placeholder='search monsters'
        handleChange={e => this.setState({ searchField: e.target.value })}
        />

        <CardList monsters={filteredMonsters}/>

        </div>

        );
    }
}

export default App;



