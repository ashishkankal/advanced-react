import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
const ArticlesList = (props, context) => {
  return (
    <div>
      {Object.values(props.articles).map(article => (
        <Article
          key={article.id}
          article={article}
          actions={props.articleActions}
        />
      ))}
    </div>
  );
};

export default ArticlesList;
ArticlesList.childContextTypes = {
  store: PropTypes.object
};
