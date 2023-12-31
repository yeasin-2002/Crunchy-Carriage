import { create } from "zustand";

interface wishlistTypes {
  wishlist: any[];
}

export const useWishlist = create<wishlistTypes>((set) => ({
  wishlist: [],
}));
