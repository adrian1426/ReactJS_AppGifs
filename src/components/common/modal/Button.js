import styled from '@emotion/styled';
import { Link } from 'wouter';

const LinkStyled = styled(Link)`
  border: 1px solid transparent;
  padding: .5rem 1rem;
  background-color: var(--brand-color_3);
  color: var(--theme-body-txt);
  cursor: pointer;
  font-size: 1rem;

  :hover{
    background-color: var(--brand-color_6);
  }

  [disabled]{
    opacity: .3;
    pointer-events: none;
  }
`;

const Button = (props) => {
  const { children, href } = props;

  return (
    <LinkStyled to={href}>
      {children}
    </LinkStyled>
  );
};

export default Button;