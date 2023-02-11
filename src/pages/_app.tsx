import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";
import type { AppProps } from "next/app";
import Image from "next/image";

import logoImg from "../assets/logo.svg";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  console.log(logoImg);

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
