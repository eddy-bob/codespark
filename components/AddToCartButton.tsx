"use client";

import { useState } from "react";
import { useAppDispatch } from "@/lib/store/hooks";
import { addItem } from "@/lib/features/cart/cartSlice";
import type { Product } from "@/lib/types";

export default function AddToCartButton({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const [justAdded, setJustAdded] = useState(false);

  function handleClick() {
    dispatch(addItem({ product }));
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1200);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
    >
      {justAdded ? "Added!" : "Add to cart"}
    </button>
  );
}
