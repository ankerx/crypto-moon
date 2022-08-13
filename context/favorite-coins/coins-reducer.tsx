import type { Action, State } from "./types";

export const favoriteCoinsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "addToFavorite": {
      const favorites = [...state.favorites];
      const newFavorite = action.payload;
      if (!favorites.includes(action.payload)) {
        return {
          ...state,
          favorites: [...favorites, newFavorite],
        };
      } else {
        return state;
      }
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};
