import styled from '@emotion/styled';
import { Link } from 'wouter';

const common = `
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

export const LinkStyled = styled(Link)(common);

//se estila con el componente o etiqueta button de html y se reutiliza los estilo
export const LinkButton = LinkStyled.withComponent('button');