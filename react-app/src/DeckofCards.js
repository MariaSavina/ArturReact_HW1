import React from "react";

class DeckofCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      count: 0,
      value: "",
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState((state) => ({
      count: state.count + 1,
    }));
    this.setState({
      value: event.target.value,
    });
    console.log(this.state.value);

    fetch(
      `https://deckofcardsapi.com/api/deck/new/draw/?count=${event.target.value}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw res.status;
      })
      .then(
        (result) => {
          console.log(result);
          console.log(result.cards);
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  render() {
    const { error, isLoaded, items } = this.state;

    return (
      <div>
        <div>
          <input
            type="range"
            min={1}
            max={10}
            value={this.state.value}
            onChange={this.handleChange}
          />
          {this.state.value}
        </div>
        <div>
          {error ? (
            <div>Error</div>
          ) : !isLoaded ? (
            <div>Loading...</div>
          ) : (
            <div key={this.state.count}>
              <ul>
                {this.state.items.cards.map((item, index) => (
                  <li key={index} className="usersBox">
                    <div>
                      <img src={item.image} className="avatarPic" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DeckofCard;
