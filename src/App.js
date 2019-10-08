import React, { Fragment, Component } from 'react';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // Search github users
  searchUsers = async text => {
    console.log('Nombre buscado: ', text);
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
    console.log(res.data);
  };

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
      alert: null
    });
  };

  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });
    setTimeout(() => {
      this.setState({
        alert: null
      });
    }, 5000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <Fragment>
        <NavBar title="Github finder" />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            setAlert={this.setAlert}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={this.state.users} />
        </div>
      </Fragment>
    );
  }
}

export default App;
