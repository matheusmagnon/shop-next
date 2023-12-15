
import Link from "next/link"
import {ImageContainer,SuccessContainer} from "../styles/pages/success"
import React from "react"

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>

      <ImageContainer>

      </ImageContainer>
      <p>
        Uhuul <strong>Matheus Magno</strong>,
        sua <strong>Camiseta xxx</strong> já está a caminho da sua casa.
      </p>

      <Link href='/'>
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}
