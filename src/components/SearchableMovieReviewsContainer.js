import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
      super();
      this.state = {
        reviews: [],
        searchTerm: "",
      };
    }
    
    handleSearchInput = (event) => {
      this.setState({ searchTerm: event.target.value });
    };

    handleSubmit = (event) => {
      event.preventDefault();
      fetch(URL + "&query=" + this.state.searchTerm)
        .then((resp) => resp.json())
        .then((data) => this.setState({ reviews: data.results }));
    };