import * as React from 'react';
import { Article } from '../graphql';
import Text from './Text';

interface Props {
  news: Article[];
}

const NewsList: React.StatelessComponent<Props> = ({ news }) => {
  return (
    <div className="NewsList">
      {news &&
        news.map(article => {
          return (
            <a
              className="NewsList__item"
              href={article.url}
              target="_blank"
              key={article.url}
            >
              <Text className="NewsList__headline" weight="medium">
                {article.headline}
              </Text>
              <Text color="light" size="sm">
                {article.source}
              </Text>
            </a>
          );
        })}
    </div>
  );
};

export default NewsList;
