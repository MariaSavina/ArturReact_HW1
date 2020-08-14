import React from "react";

class GithubUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result,
          });
          console.log(this.state.items);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul className="usersBoxContent">
          {this.state.items.map((item) => (
            <li key={item.id} className="usersBox">
              <div>
                <div>{item.login}</div>
                <img src={item.avatar_url} className="avatarPic" />
              </div>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default GithubUsers;
