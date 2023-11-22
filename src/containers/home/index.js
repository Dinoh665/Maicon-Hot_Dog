import React from "react";

import Local from './assets/local.png'
import Logo from './assets/logo.png'
import HomeImageLink from './assets/homeLink.png'
import MenuImageLink from './assets/hamburguerLink.png'
import logoInstaPreto from './assets/logo-insta-preto.png'
import logoInstaBranco from './assets/logo-insta-branco.png'
import logoWhatsPreto from './assets/logo-whats-preto.png'
import logoWhatsBranco from './assets/logo-whats-branco.png'
import hotDogImage from './assets/hot-dog.png'

import {
  Body,
  Header,
  LocalImage,
  H2,
  LocalParagrafo,
  LogoImage,
  HomeLinkImage,
  HomeLink,
  MenuLinkImage,
  MenuLink,

  HeaderTwo,
  InstaImageLink,
  InstaImage,
  LinkPedidos,
  WhatsImageLink,
  WhatsImage,

  Section,
  LancheImage,
  H1,
  Button,

  Footer
} from './styles'


const App = () => {

  const handleMouseOver = (event, image) => {
    event.target.src = image;
  };

  const handleMouseOut = (event, originalImage) => {
    event.target.src = originalImage;
  };

  return (

    <Body>
      <Header>
        <div className="local-box">
          <LocalImage src={Local} alt="Local Image" />
          <H2>Localização</H2>
          <LocalParagrafo>Av. Papenborg, 239 - Areias de Baixo, Gov. Celso Ramos - SC, 88190-000</LocalParagrafo>
        </div>
        <LogoImage src={Logo} alt="Logo" />
        <div className="link-box">
          <div className="home-box">
            <HomeLinkImage src={HomeImageLink} />
            <HomeLink>Home</HomeLink>
          </div>
          <div className="menu-box">
            <MenuLinkImage src={MenuImageLink} />
            <MenuLink>Cardápio</MenuLink>
          </div>
        </div>
      </Header>

      <HeaderTwo>
        <InstaImageLink href="https://www.instagram.com/maicon_hot_dog/?hl=pt" target="_blank">
          <InstaImage
            src={logoInstaPreto}
            onMouseOver={(e) => handleMouseOver(e, logoInstaBranco)}
            onMouseOut={(e) => handleMouseOut(e, logoInstaPreto)}
          />
        </InstaImageLink>
        <LinkPedidos>Faça seu Pedido</LinkPedidos>
        <WhatsImageLink href="https://wa.me/5548996568165" target="_blank">
          <WhatsImage
            src={logoWhatsPreto}
            onMouseOver={(e) => handleMouseOver(e, logoWhatsBranco)}
            onMouseOut={(e) => handleMouseOut(e, logoWhatsPreto)}
          />
        </WhatsImageLink>
      </HeaderTwo>

      <Section>
        <H1>Produtos</H1>  
        <div className="lanches">
            <div>
              <LancheImage src={hotDogImage}/>
              <div className="lanche-div">R$ 30.00</div>
            </div>

            <div>
            <LancheImage src={hotDogImage}/>
            <div className="lanche-div">R$ 30.00</div>
            </div>

            <div>
            <LancheImage src={hotDogImage}/>
            <div className="lanche-div">R$ 30.00</div>
            </div>

            <div>
            <LancheImage src={hotDogImage}/>
            <div className="lanche-div">R$ 30.00</div>
            </div>

            <div>
            <LancheImage src={hotDogImage}/>
            <div className="lanche-div">R$ 30.00</div>
            </div>

            <div>
            <LancheImage src={hotDogImage}/>
            <div className="lanche-div">R$ 30.00</div>
            </div>

            <div>
            <LancheImage src={hotDogImage}/>
            <div className="lanche-div">R$ 30.00</div>
            </div>

            <div>
              <LancheImage src={hotDogImage}/>
              <div className="lanche-div">R$ 30.00</div>
            </div>
        </div>
        <Button>Ver Mais</Button>
      </Section>

      <Footer>
        <h1>© 2023 Maicon Lanches | All Rights reserved</h1>
      </Footer>
    </Body>
  );


}

export default App