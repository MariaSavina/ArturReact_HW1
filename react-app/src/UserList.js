import React from "react";

class Users extends React.Component {
  state = {
    styled: false,
  };

  letColored = () => {
    this.setState({
      styled: true,
    });
  };
  removeItem = () => {};
  render() {
    return (
      <div>
        <ul>
          {this.props.userslist.map((item, index) => (
            <li key={index}>
              <div
              // onClick={this.letColored}
              // style={{
              //   background: this.state.styled == false ? null : "red",
              // }}
              >
                {index + 1} -- {item.name}
                <button onClick={this.removeItem}>remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class UserList extends React.Component {
  state = {
    // validId: this.props.initialUsers.length,
    validName: "",
    count: 0,
  };

  handleChange = (event) => {
    this.setState({
      validName: event.target.value,
    });
    console.log(event.target.value);
    // console.log(this.state.validId);
  };

  addNewUserToBottom = () => {
    // this.setState({
    //   validId: this.state.validId + 1,
    // });
    this.setState((state) => ({
      count: state.count + 1,
    }));
    this.props.initialUsers.push({
      name: this.state.validName,
      id: this.state.validId,
    });
  };

  addNewUserToTop = () => {
    // this.setState({
    //   validId: this.state.validId + 1,
    // });
    this.setState((state) => ({
      count: state.count + 1,
    }));
    this.props.initialUsers.unshift({
      name: this.state.validName,
      id: this.state.validId,
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange}></input>
        <button onClick={this.addNewUserToBottom}>add to bottom</button>
        <button onClick={this.addNewUserToTop}>add to top</button>
        <Users key={this.state.count} userslist={this.props.initialUsers} />
      </div>
    );
  }
}

export default UserList;
