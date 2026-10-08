import type { ItemRequest } from "../models/ItemRequest";

export const itemsValidate = (items: ItemRequest[]): boolean => {
  return items.every(
    (item) => item.name.trim() !== "" && item.quantity > 0 && item.price > 0,
  );
};
