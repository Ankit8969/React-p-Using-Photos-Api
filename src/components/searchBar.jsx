import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  handleChange = (e) => {
    this.setState({ term: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form" onSubmit={this.handleSubmit}>
          <label>Image Search</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.term}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
