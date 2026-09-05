"use client";

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/store/store";
import { hydrate } from "@/lib/features/cart/cartSlice";
import type { CartItem } from "@/lib/types";

const CART_STORAGE_KEY = "codestark:cart";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store] = useState(makeStore);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(CART_STORAGE_KEY);
      if (raw) {
        const items = JSON.parse(raw) as CartItem[];
        store.dispatch(hydrate(items));
      }
    } catch {
      // Ignore malformed or inaccessible storage; cart starts empty.
    }

    const unsubscribe = store.subscribe(() => {
      try {
        window.localStorage.setItem(
          CART_STORAGE_KEY,
          JSON.stringify(store.getState().cart.items),
        );
      } catch {
        // Storage may be unavailable (e.g. private browsing quota); ignore.
      }
    });

    return unsubscribe;
  }, [store]);

  return <Provider store={store}>{children}</Provider>;
}
