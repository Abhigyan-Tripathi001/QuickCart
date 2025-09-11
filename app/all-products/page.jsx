"use client";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";
import { useSearchParams } from "next/navigation";

const AllProducts = () => {
  const { products } = useAppContext();
  const searchParams = useSearchParams();

  // 🔹 Get "search" query param
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // 🔹 Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery) ||
    product.description.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
        <div className="flex flex-col items-end pt-12">
          <p className="text-2xl font-medium">All products</p>
          <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
        </div>

        {/* 🔹 Show results count if searching */}
        {searchQuery && (
          <p className="mt-4 text-gray-600">
            Showing results for <span className="font-semibold">"{searchQuery}"</span> ({filteredProducts.length})
          </p>
        )}

        {/* 🔹 Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12 pb-14 w-full">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No products found.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
