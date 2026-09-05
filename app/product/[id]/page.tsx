import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/data/products";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "@/components/AddToCartButton";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductPage({
  params,
}: PageProps<"/product/[id]">) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-12">
      <Link
        href="/"
        className="text-sm text-zinc-500 hover:underline dark:text-zinc-400"
      >
        &larr; Back to shop
      </Link>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="glass overflow-hidden rounded-2xl">
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={800}
            priority
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            {product.category}
          </span>
          <h1 className="text-2xl font-semibold tracking-tight">
            {product.name}
          </h1>
          <span className="text-xl font-medium">
            {formatPrice(product.price)}
          </span>
          <p className="text-zinc-600 dark:text-zinc-400">
            {product.description}
          </p>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {product.stock > 0
              ? `${product.stock} in stock`
              : "Out of stock"}
          </span>
          <div className="max-w-xs">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
