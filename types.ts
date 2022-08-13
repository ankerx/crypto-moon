import { favoritesSchema } from "schema";
import z from "zod";
import type Prisma from "@prisma/client";

export type favoritesType = z.infer<typeof favoritesSchema>;
export type favType = Array<Prisma.Favorites>;
