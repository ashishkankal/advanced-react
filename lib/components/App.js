import React, { Component } from 'react';
import DataApi from './../DataApi';
import axios from 'axios';
import ArticlesList from './ArticlesList';
import PropTypes from 'prop-types';
export default class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  };
  getChildContext() {
    return {
      store: {}
    };
  }
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors
  };

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId]
  };

  render() {
    return (
      <div>
        <ArticlesList
          articles={this.state.articles}
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}
