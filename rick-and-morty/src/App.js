import React from "react";
import "./App.css";
import CharactersList from "./components/CharactersList";
import { Container } from "reactstrap";

function App() {
  return (
    <Container>
      <CharactersList />
    </Container>
  );
}

export default App;
