"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useAppContext } from "@/context/AppContext";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const AllProductsContent = () => {
  const { products } = useAppContext();
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  // 🔹 Filter by multiple fields (name, description, category)
  const filteredProducts = query
    ? products.filter((p) =>
        [p.name, p.description, p.category]
          .filter(Boolean) // ignore undefined fields
          .some((field) => field.toLowerCase().includes(query))
      )
    : products;

  return (
    <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
      <div className="flex flex-col items-end pt-12">
        <p className="text-2xl font-medium">All products</p>
        <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
      </div>

      {query && (
        <p className="mt-4 text-gray-600">
          Showing results for: <span className="font-semibold">{query}</span>
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12 pb-14 w-full">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default function AllProductsPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p className="text-center py-10">Loading...</p>}>
        <AllProductsContent />
      </Suspense>
      <Footer />
    </>
  );
}
