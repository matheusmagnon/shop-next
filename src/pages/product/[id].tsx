import Image from "next/image";
import { stripe } from "@/lib/stripe";
import axios from "axios"

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Stripe from "stripe";
import { useRouter } from "next/router";
import { useState } from "react";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession]= useState(false)
  //const { isFallback } = useRouter();


  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout',{
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;

    } catch (error) {
      setIsCreatingCheckoutSession(false)
      // Conectar com uma ferramenta de observabilidade (Datalog / Sentry)
      alert('Falha ao redirecionar ao checkout')
    }

  }

 // if (isFallback) {
  //  return <p>Loading...</p>;
  //}

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={420} height={480} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_NL4Fslal6OIBDh" } }],
    //executa o getStaticProps para buscar os dados
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params?.id);

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    // revalidate: 60 * 60 * 1, //1 hour
  };
};
