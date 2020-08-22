import React from "react";

const dataTodo = [];

class FormTodo extends React.Component {
  state = {
    valueInp: "",
    valueTarea: "",
    valueRan: "",
    id: 0,
  };

  handleChangeInp = (event) => {
    this.setState({ valueInp: event.target.value });
    console.log(event.target.value);
  };

  handleChangeTarea = (event) => {
    this.setState({ valueTarea: event.target.value });
    console.log(event.target.value);
  };

  handleChangeRan = (event) => {
    this.setState({ valueRan: event.target.value });
    console.log(event.target.value);
  };

  addData = () => {
    console.log(this.state);
    dataTodo.push(this.state);
    this.setState({
      valueInp: "",
      valueTarea: "",
      valueRan: "",
      id: this.state.id + 1,
    });
    console.log(dataTodo);
  };

  render() {
    return (
      <div>
        <div>name:</div>
        <input
          type="text"
          value={this.state.valueInp}
          onChange={this.handleChangeInp}
        />
        <div> description:</div>
        <textarea
          value={this.state.valueTarea}
          onChange={this.handleChangeTarea}
        />
        <div>duration:</div>
        <input
          type="range"
          min={1}
          max={3}
          value={this.state.valueRan}
          onChange={this.handleChangeRan}
        />
        <br />
        <button type="submit" onClick={this.addData}>
          add
        </button>
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.dataTodo.map((item) => (
            <li key={item.id}>
              <div>
                {item.valueInp} -- {item.valueTarea} -- {item.valueRan}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class ToDo extends React.Component {
  state = {
    count: 0,
  };
  showMe = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <FormTodo />
        <TodoList dataTodo={dataTodo} key={this.state.count} />
        <button onClick={this.showMe}>go</button>
      </div>
    );
  }
}

export default ToDo;
