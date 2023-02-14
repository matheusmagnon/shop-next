import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam autem
          voluptas ex sint fuga omnis minima voluptatem voluptatibus nihil
          dolore quae animi hic perferendis officia veniam quaerat, facilis
          obcaecati beatae.
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
