import React from "react";

class FackeLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad: false,
    };
  }

  componentDidMount() {
    this.changeLoader();
  }

  componentWillUnmount() {
    clearTimeout(this.intervalId);
  }

  componentDidUpdate(_, prevState) {
    if (this.state.isLoad && this.state.isLoad !== prevState.isLoad) {
      this.changeLoader();
    }
  }

  changeLoader = () => {
    this.intervalId = setTimeout(() => {
      this.setState({
        isLoad: true,
      });
    }, this.props.delay);
  };

  againChange = () => {
    this.setState({
      isLoad: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.isLoad == true ? (
          <button onClick={this.againChange}>Try Again</button>
        ) : null}
        <div>
          {this.state.isLoad == false ? "Loading..." : this.props.message}
        </div>
      </div>
    );
  }
}

export default FackeLoading;
