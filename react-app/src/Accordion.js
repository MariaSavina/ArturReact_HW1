import React from "react";

// const Accordion = (props) => {
//   return props.expanded === false ? (
//     <button onClick={Mess}>hide</button>
//   ) : (
//     <button>show</button>
//   );
// };

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "",
      textBut: "show",
    };
  }
  showText = () => {
    this.state.count == ""
      ? this.setState({
          count: "Hidden text",
          textBut: "hide",
        })
      : this.setState({
          count: "",
          textBut: "show",
        });
  };
  render() {
    return (
      <div>
        <div className="accord" onClick={this.showText}>
          {this.state.textBut}
        </div>
        <div>{this.state.count}</div>
      </div>
    );
  }
}

export default Accordion;
