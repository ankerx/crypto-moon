import axios from "axios";

const url = "http://localhost:3000/api/favorites";

const favApi = axios.create({
  baseURL: url,
});

export const create = async (id: string) => {
  return await favApi.post(`/add-to-favorites`, { data: id });
};
export const remove = async (id: string) => {
  return await favApi.delete(`/delete`, { data: { id } });
};
