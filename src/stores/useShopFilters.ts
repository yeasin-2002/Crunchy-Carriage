import { create } from "zustand";

interface Types {
  isListedView: Boolean;
  selectedCategory: string;
  sortBy:
    | ""
    | "popularity"
    | "average rating"
    | "latest"
    | "price: low to high"
    | "price: high to low";
  //   setListedView: (isListedView: Boolean) => void;
}

export const useShopFilters = create<Types>((set) => {
  return {
    isListedView: false,
    selectedCategory: "",
    sortBy: "",
  };
});
