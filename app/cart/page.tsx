import CartView from "@/components/CartView";

export default function CartPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Your cart</h1>
      <CartView />
    </div>
  );
}
