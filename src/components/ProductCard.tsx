import { ShoppingBag } from 'lucide-react';
import type { Product } from '@/types';

interface Props {
  product: Product;
  onView?: (product: Product) => void;
}

const formatPKR = (amount: number) =>
  'PKR ' + amount.toLocaleString('en-PK');

export function ProductCard({ product, onView }: Props) {
  const outOfStock = product.stock <= 0;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-forest-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-square overflow-hidden bg-sage-50">
        <img
          src={product.image_url}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {outOfStock && (
          <span className="absolute left-3 top-3 rounded-full bg-forest-900/80 px-3 py-1 text-xs font-semibold text-white">
            Out of stock
          </span>
        )}
        {!outOfStock && product.stock <= 10 && (
          <span className="absolute left-3 top-3 rounded-full bg-sage-100 px-3 py-1 text-xs font-semibold text-forest-700">
            Low stock
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-forest-900">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-forest-600">{product.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-xl font-semibold text-forest-700">
            {formatPKR(product.price_pkr)}
          </span>
          <button
            onClick={() => onView?.(product)}
            disabled={outOfStock}
            className="inline-flex items-center gap-1.5 rounded-full bg-forest-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ShoppingBag className="h-4 w-4" />
            View Product
          </button>
        </div>
      </div>
    </article>
  );
}
