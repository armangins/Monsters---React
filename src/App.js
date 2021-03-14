import React, { Component } from "react";
import { CardList } from "./components/cards-list/card-list-component";
import { Search } from "./components/search/search-component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: "",
    };
  }

  changeHandler = (e)=>{
    this.setState({ searchField: e.target.value });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <Search
          changeHandler={this.changeHandler}
          placeholder="Search user"
        ></Search>
        <CardList users={filteredUsers}></CardList>
      </div>
    );
  }
}

export default App;
