import React from "react";

class SearchingAdvice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);

    fetch(`https://api.adviceslip.com/advice/search/${event.target.value}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw res.status;
      })
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result,
          });
          console.log(result.total_results);
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
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div>
          {error ? (
            <div>Error: {error.message}</div>
          ) : !isLoaded ? (
            <div>Loading...</div>
          ) : (
            <div>
              <button>Clear</button>
              <div>total_results: {this.state.items.total_results}</div>
              <div>query: {this.state.items.query}</div>
              <div>
                {this.state.items.query ? (
                  <ul>
                    {this.state.items.slips.map((item) => (
                      <li key={item.id} className="usersBox">
                        <div>
                          {item.advice}--{item.date}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div>No advice slips found matching that search term</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SearchingAdvice;
