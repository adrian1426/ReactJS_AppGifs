import React from 'react';
import { gifSearchBR } from '../../constants/appRouterConstants';
import { CategoryTitle, CategoryList, CategoryListItem, CategoryLink } from './GifCategory.styles';

const GifCategory = (props) => {
  const { name, options } = props;

  return (
    <section>
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>
        {
          options.map(popular => (
            <CategoryListItem
              key={popular}
            >
              <CategoryLink to={`${gifSearchBR}/${popular}`}>
                Gifs de {popular}
              </CategoryLink>
            </CategoryListItem>
          ))
        }
      </CategoryList>
    </section>
  );
};

export default GifCategory;