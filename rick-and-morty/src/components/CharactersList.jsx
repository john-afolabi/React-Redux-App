import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getChars } from "../state/actionCreators";
import CharacterCard from "./CharacterCard";

export function CharactersList({ getChars, characters }) {
  useEffect(() => {
    getChars();
  }, []);

  return (
    <div>
      {characters.map(char => {
        return <CharacterCard char={char} key={char.id} />;
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}

export default connect(mapStateToProps, { getChars })(CharactersList);
