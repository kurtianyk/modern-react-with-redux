import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }
  render() {
    return (
        <div className="search-bar">
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
      )
    }

    onInputChange(term) {
      const { onSearchTermChange } = this.props;

      this.setState({term});
      onSearchTermChange(term);
    }
}

export default SearchBar;
