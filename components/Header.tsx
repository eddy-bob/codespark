"use client";

import Link from "next/link";
import { useAppSelector } from "@/lib/store/hooks";
import { selectCartTotalQuantity } from "@/lib/features/cart/cartSlice";
import Logo from "@/components/Logo";

export default function Header() {
  const totalQuantity = useAppSelector(selectCartTotalQuantity);

  return (
    <header className="glass sticky top-0 z-10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Logo />
        </Link>
        <Link
          href="/cart"
          className="flex items-center gap-2 rounded-full border border-black/10 bg-white/40 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/60 dark:border-white/15 dark:bg-white/[.06] dark:hover:bg-white/[.12]"
        >
          Cart
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground px-1 text-xs font-semibold text-background">
            {totalQuantity}
          </span>
        </Link>
      </div>
    </header>
  );
}
