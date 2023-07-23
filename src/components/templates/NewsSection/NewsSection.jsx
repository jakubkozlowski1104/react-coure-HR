import { useState, useEffect } from 'react';
import { NewsWrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import Button from '../../atoms/Button/Button';
import axios from 'axios';

const API_TOKEN = '02d3e6c04ab5b5a7dc2094d59983cc';
// const QUERY = `{
//   allArticles {
//     id
//     title
//     category
//     content
//     image {
//       url
//     }
//   }
// }
// '

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
        {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }
        
        `,
        },
        {
          headers: {
            authorization: `Baerer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch((err) => {
        setError(`Sorry, we coldn't load articles for you`);
        console.log(err);
      });
  }, []);

  return (
    <NewsWrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ title, category, content, image = 'null' }) => (
          <ArticleWrapper key={title}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p className="p-news">{content}</p>
              {image ? <img src={image.url} alt="article img" /> : null}
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
      {error ? <NewsSectionHeader>{error}</NewsSectionHeader> : null}
    </NewsWrapper>
  );
};

export default NewsSection;
