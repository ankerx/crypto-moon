import { useAuth } from "core/hooks/useAuth";
import { ListOfFavoriteCoins } from "modules/profile/favorite-coins/ListOfFavoriteCoins";
import { getSession } from "next-auth/react";
import Button from "@mui/material/Button";

export const Header = () => {
  const { session, signIn, signOut } = useAuth();

  const handleSignIn = () => signIn("github");
  const handleSignOut = () => signOut();

  // console.log(session?.user);
  return (
    <header>
      <h1 className="text-red-500">hello crypto</h1>
      <h2 className="text-lime-300">hello {session?.user?.name}</h2>

      {session ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <Button variant="contained" onClick={handleSignIn}>
          Sign in
        </Button>
      )}
      <ListOfFavoriteCoins />
    </header>
  );
};
