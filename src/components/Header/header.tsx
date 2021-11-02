import { Container, StyledLink } from './style_header'


export const Header = (): JSX.Element => {
  return (
    <Container>
      <button>
        <StyledLink to='/'>Cadastre-se</StyledLink>
      </button>
      <button>
        <StyledLink to='/leads'>Leads</StyledLink>
      </button>  
    </Container>
  );
}