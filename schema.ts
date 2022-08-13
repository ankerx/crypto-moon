import z from "zod";

export const favoritesSchema = z.object({
  name: z.string(),
});
export const favoritesArraySchema = z.array(
  z.object({
    name: z.string(),
  })
);
