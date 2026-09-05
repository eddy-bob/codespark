"use client";

import Image from "next/image";
import { useAppDispatch } from "@/lib/store/hooks";
import { removeItem, updateQuantity } from "@/lib/features/cart/cartSlice";
import { formatPrice } from "@/lib/format";
import type { CartItem } from "@/lib/types";

export default function CartLineItem({ item }: { item: CartItem }) {
  const dispatch = useAppDispatch();

  return (
    <li className="flex items-center gap-4 py-4">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-black/[.03] dark:bg-white/[.04]">
        <Image
          src={item.image}
          alt={item.name}
          width={160}
          height={160}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <span className="font-medium">{item.name}</span>
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          {formatPrice(item.price)} each
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label={`Decrease quantity of ${item.name}`}
          onClick={() =>
            dispatch(
              updateQuantity({ id: item.id, quantity: item.quantity - 1 }),
            )
          }
          className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 dark:border-white/15"
        >
          &minus;
        </button>
        <span className="w-6 text-center text-sm">{item.quantity}</span>
        <button
          type="button"
          aria-label={`Increase quantity of ${item.name}`}
          onClick={() =>
            dispatch(
              updateQuantity({ id: item.id, quantity: item.quantity + 1 }),
            )
          }
          className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 dark:border-white/15"
        >
          +
        </button>
      </div>
      <span className="w-20 text-right font-medium">
        {formatPrice(item.price * item.quantity)}
      </span>
      <button
        type="button"
        aria-label={`Remove ${item.name} from cart`}
        onClick={() => dispatch(removeItem({ id: item.id }))}
        className="text-sm text-zinc-500 underline-offset-2 hover:underline dark:text-zinc-400"
      >
        Remove
      </button>
    </li>
  );
}
