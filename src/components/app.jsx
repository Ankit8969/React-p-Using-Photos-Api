import React from "react";
import SearchBar from "./searchBar";
import unsplash from "../api/unsplash";
import ImageList from "./imageList";

class App extends React.Component {
  state = {
    images: [],
  };
  handleSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    console.log(this.state.images);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

// f6trr0cLd_EmfDVjWKQy4W1UiI5r4jHKO9w - p5sJrsw;
