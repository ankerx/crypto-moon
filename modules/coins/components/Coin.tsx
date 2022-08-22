import { QueryClient, useMutation } from "@tanstack/react-query";
import { remove, create } from "../api";

interface IProps {
  name: string;
  id: string;
}
export const Coin = ({ name, id }: IProps) => {
  const queryClient = new QueryClient();
  const { mutateAsync } = useMutation(remove);

  const deleteFav = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries(["fav"]);
  };

  const addFav = useMutation(create, {
    onSuccess: () => {
      queryClient.invalidateQueries(["fav"]);
      console.log("added");
    },
  });
  const creates = async (id: string) => {
    try {
      await addFav.mutateAsync(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p className="text-red-700">{name}</p>
      <button onClick={() => creates(id)}>Add</button>
      <button onClick={deleteFav}>Remove</button>
    </div>
  );
};
