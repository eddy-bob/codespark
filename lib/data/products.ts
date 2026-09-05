import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "aurora-tee",
    name: "Aurora Graphic Tee",
    description:
      "A soft, breathable cotton tee with a gradient aurora print. Runs true to size.",
    price: 28,
    category: "Apparel",
    image: "/products/aurora-tee.svg",
    stock: 24,
  },
  {
    id: "canvas-tote",
    name: "Canvas Utility Tote",
    description:
      "Heavyweight canvas tote with reinforced straps and an interior pocket for everyday carry.",
    price: 34,
    category: "Accessories",
    image: "/products/canvas-tote.svg",
    stock: 15,
  },
  {
    id: "trailhead-cap",
    name: "Trailhead Cap",
    description:
      "A low-profile six-panel cap with an adjustable strap and moisture-wicking sweatband.",
    price: 22,
    category: "Apparel",
    image: "/products/trailhead-cap.svg",
    stock: 40,
  },
  {
    id: "summit-mug",
    name: "Summit Ceramic Mug",
    description:
      "12oz double-wall ceramic mug that keeps drinks hot longer. Dishwasher and microwave safe.",
    price: 18,
    category: "Home",
    image: "/products/summit-mug.svg",
    stock: 32,
  },
  {
    id: "glow-desk-lamp",
    name: "Glow Desk Lamp",
    description:
      "Adjustable LED desk lamp with three brightness settings and a USB charging port.",
    price: 46,
    category: "Home",
    image: "/products/glow-desk-lamp.svg",
    stock: 12,
  },
  {
    id: "wander-backpack",
    name: "Wander Daypack",
    description:
      "A weatherproof 20L daypack with a padded laptop sleeve and side water bottle pockets.",
    price: 65,
    category: "Accessories",
    image: "/products/wander-backpack.svg",
    stock: 8,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
