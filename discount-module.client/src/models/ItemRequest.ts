export type ItemCategory = 0 | 1 | 2;

export type ItemRequest = {
  name: string;
  price: number;
  quantity: number;
  category: ItemCategory;
};

export type ItemRequestForm = ItemRequest & {
  id: number;
};
