import { Product } from "@/types/products";
import React from "react";
import { View, Text, Image } from "react-native";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <View
      className="bg-white p-3 rounded-lg flex flex-row"
      style={{
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
      }}
    >
      <Image className="w-40 h-40 mr-4" src={product.thumbnail} />
      <View className="flex-1 flex justify-between">
        <View>
          <Text className="font-semibold text-lg">{product.title}</Text>
          <Text numberOfLines={3}>{product.description}</Text>
        </View>
        <Text className="font-bold text-xl" numberOfLines={2}>
          {product.price}$
        </Text>
      </View>
    </View>
  );
}
