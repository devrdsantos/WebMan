import styled from "styled-components";

const HomePage = () => {
  return (
    <ContenedorPrincipal>
      <h1>Esto es el home</h1>
    </ContenedorPrincipal>
  );
};

const ContenedorPrincipal = styled.div`
  background-color: lightgreen;
`;

export default HomePage;
