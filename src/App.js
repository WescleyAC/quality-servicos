import React, { useState } from "react";

import ImgQuallyti from './assets/img.quality.jpg'

import {
  Image,
  Button,
  Container,
  ContainerItems,
  H1,
  Paragraph,
  Input,
  Select,
  Option
} from "./styleds"

function App() {





  return (
    <Container>

      <Image alt="img-qaulity" src={ImgQuallyti} />
      

      <ContainerItems>
      <H1>Produtos e Serviços.</H1>

      <Select>
        <Option >Selecione a opções desejada.</Option>
        <Option >Atendimento emergencial.</Option>
        <Option >Verificar se há vazamento de gás.</Option>
        <Option >Instalção de tubulação para gás.</Option>
        <Option >Conversões de equipamentos.</Option>
        <Option >Comprar aquecedores a gás.</Option>
      </Select>

      </ContainerItems>
   
    </Container>
  );
}

export default App;
