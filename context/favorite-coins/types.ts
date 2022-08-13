export type Action =
  | { type: "addToFavorite"; payload: string }
  | { type: "removeFromFavorite"; payload: string };

export type State = {
  readonly favorites: Array<string>;
};
