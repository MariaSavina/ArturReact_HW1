import React from "react";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isLoad: false,
    };
  }

  componentDidMount() {
    this.changeLoading();
  }

  componentWillUnmount() {
    clearTimeout(this.changes);
  }

  componentDidUpdate(_, prevState) {
    if (this.state.isLoad && this.state.isLoad !== prevState.isLoad) {
      this.changeLoading();
    }
  }

  changeLoading = () => {
    this.changes = setTimeout(() => {
      this.setState({
        isLoad: false,
      });
    }, this.props.delay);
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  };
  againChangeLoading = () => {
    this.setState({
      isLoad: true,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />
        <div>
          {this.state.isLoad === false ? (
            <button onClick={this.againChangeLoading}>Show notification</button>
          ) : (
            <div>{this.state.value}</div>
          )}
        </div>
      </div>
    );
  }
}

export default Notification;
