import styled from "styled-components";

const HomePage = () => {
  return (
    <ContenedorPrincipal>
      <H1deprueba>Esto es el home</H1deprueba>
    </ContenedorPrincipal>
  );
};

const ContenedorPrincipal = styled.div`
  background-color: lightgreen;
`;

const H1deprueba = styled.h1`
  color: purple;
`;

export default HomePage;
