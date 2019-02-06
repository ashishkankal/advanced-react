import React, { Component } from 'react';
import DataApi from './../DataApi';
import axios from 'axios';
import ArticlesList from './ArticlesList';
export default class App extends Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors
  };

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId]
  };

  // async componentDidMount() {
  //   const resp = await axios.get('/data');
  //   const api = new DataApi(resp.data);
  //   this.setState({
  //     articles: api.getArticles(),
  //     authors: api.getAuthors()
  //   });
  // }

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
