import ProductCard from "@/components/ProductCard";
import { ScrollView, Pressable, View, Platform } from "react-native";
import { useEffect, useState } from "react";
import { Product, ProductsResponse } from "@/types/products";
import { Link, router } from "expo-router";
import { useNavigationState } from "@react-navigation/native";
import { Navbar } from "@/components/Navbar";

export default function App() {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data: ProductsResponse) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <ScrollView>
      {products?.map((product) => (
        <Pressable
          className="m-4"
          key={product.id}
          onPress={() => router.navigate("/product/" + product.id)}
        >
          <ProductCard product={product} />
        </Pressable>
      ))}
    </ScrollView>
  );
}
