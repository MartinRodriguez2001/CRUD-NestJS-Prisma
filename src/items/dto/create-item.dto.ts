import { Item } from "@prisma/client";

export type CreateItemDto = Omit<Item, "id" | "createdAt" | "updatedAt">;
