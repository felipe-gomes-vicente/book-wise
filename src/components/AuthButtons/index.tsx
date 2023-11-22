import { AuthButton, Container } from "./styles"

export const AuthButtons = () => {
  return (
    <Container>
      <AuthButton>
        <img src="/images/icons/google.svg" alt="" />
        Entrar com Google
      </AuthButton>

      <AuthButton>
        <img src="/images/icons/github.svg" alt="" />
        Entrar com Github
      </AuthButton>

      <AuthButton>
        <img src="/images/icons/rocket.svg" alt="" />
        Acessar como visitante
      </AuthButton>
    </Container>
  )
}