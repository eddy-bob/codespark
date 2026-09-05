import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="glass flex flex-col gap-3 rounded-2xl p-4 transition-shadow hover:shadow-lg">
      <Link
        href={`/product/${product.id}`}
        className="overflow-hidden rounded-xl bg-black/[.03] dark:bg-white/[.04]"
      >
        <Image
          src={product.image}
          alt={product.name}
          width={800}
          height={800}
          className="aspect-square w-full object-cover transition-transform hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          {product.category}
        </span>
        <Link href={`/product/${product.id}`} className="font-medium">
          {product.name}
        </Link>
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          {formatPrice(product.price)}
        </span>
      </div>
      <AddToCartButton product={product} />
    </div>
  );
}
