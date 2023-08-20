import React, { Component } from "react";
import css from "./Searchbar.module.css";
import PropTypes from "prop-types";

class Searchbar extends Component {
  state = {
    inputValue: "",
    searchName: "",
  };

  onValueChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.searchName.value.trim();
    this.props.onSubmit(searchQuery);
    e.target.reset();
  };
  render() {
    const { inputValue } = this.state;
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.onSubmitForm}>
          <button className={css.searchbar__button} type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="27px"
              height="27px"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
            </svg>
          </button>
          <input
            name="searchName"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={this.onValueChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
