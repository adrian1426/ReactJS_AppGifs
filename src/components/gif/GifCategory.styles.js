import styled from "@emotion/styled";
import { Link } from 'wouter';

export const CategoryTitle = styled.h3`
  color: var(--theme-body-txt);
  font-weight: bold;
  margin-bottom: 0.7rem;
  margin-top: 0.6rem;
`;

export const CategoryList = styled.ul`
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

export const CategoryListItem = styled.li`
  list-style: none;
  padding: 0.3rem;
  margin: 0.2rem;
  font-size: 1.2rem;
`;

export const CategoryLink = styled(Link)`
  color: inherit;
  font-size: 1em;
  text-decoration: none;
  transition:  color ease-in 0.1s;
`;