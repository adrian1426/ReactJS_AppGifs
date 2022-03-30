import { LinkStyled } from "./Button.styles";

const Button = (props) => {
  const { children, href } = props;

  return (
    <LinkStyled to={href}>
      {children}
    </LinkStyled>
  );
};

export default Button;