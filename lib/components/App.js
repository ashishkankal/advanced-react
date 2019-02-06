import React, { Component } from 'react';
import DataApi from './../DataApi';
import { data } from '../testData';
import ArticlesList from './ArticlesList';
const api = new DataApi(data);
export default class App extends Component {
  state = {
    articles: api.getArticles(),
    authors: api.getAuthors()
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
