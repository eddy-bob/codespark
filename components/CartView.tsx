"use client";

import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  clearCart,
  selectCartItems,
  selectCartTotalPrice,
} from "@/lib/features/cart/cartSlice";
import { formatPrice } from "@/lib/format";
import CartLineItem from "@/components/CartLineItem";

export default function CartView() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotalPrice);

  if (items.length === 0) {
    return (
      <div className="glass flex flex-col items-center gap-4 rounded-2xl px-6 py-24 text-center">
        <p className="text-lg font-medium">Your cart is empty</p>
        <Link
          href="/"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="glass flex flex-col gap-6 rounded-2xl p-6">
      <ul className="divide-y divide-black/10 dark:divide-white/10">
        {items.map((item) => (
          <CartLineItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="flex flex-col gap-4 border-t border-black/10 pt-6 dark:border-white/10">
        <div className="flex items-center justify-between text-lg font-semibold">
          <span>Total</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="flex-1 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Checkout
          </button>
          <button
            type="button"
            onClick={() => dispatch(clearCart())}
            className="rounded-full border border-black/10 px-5 py-3 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/15 dark:hover:bg-white/[.08]"
          >
            Clear cart
          </button>
        </div>
        <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
          Checkout isn&apos;t wired up yet &mdash; there&apos;s no backend.
        </p>
      </div>
    </div>
  );
}
