import * as types from "./actionTypes";

const initialCharacters = [];

export function charactersReducer(characters = initialCharacters, action) {
  switch (action.type) {
    case types.SET_CHAR:
      return action.payload;
    default:
      return characters;
  }
}
