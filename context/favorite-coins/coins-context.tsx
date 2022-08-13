import {
  ReactNode,
  createContext,
  useReducer,
  useContext,
  useMemo,
  useState,
} from "react";
import { favoriteCoinsReducer } from "./coins-reducer";
import { Action, State } from "./types";

type Dispatch = (action: Action) => void;
type FavoriteCoinsProvider = { readonly children: React.ReactNode };

export const FavoriteCoinsContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const initalState: State = { favorites: [] };

export const FavoriteCoinsProvider = ({ children }: FavoriteCoinsProvider) => {
  const [state, dispatch] = useReducer(favoriteCoinsReducer, initalState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <FavoriteCoinsContext.Provider value={value}>
      {children}
    </FavoriteCoinsContext.Provider>
  );
};
