import styled from "styled-components";

export const Body = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
    margin-top: 2vh;
    background: #FF0000;
    height: 30vh;
    width: 97%;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    .local-box {
        display: flex;
        align-items: center;
        flex-direction: column;
        color: #DBFF00;
    }
    .link-box {
        display: flex;
        flex-direction: column;
        gap: 5vw;
        font-size: 1.5vw;
        color: #DBFF00;
    }
    .menu-box,
    .home-box {
        display: flex;
        gap: 1vw;
        align-items: center;
    }
    @media screen and (max-width: 547px) {
        grid-template-columns: 1fr;
        .local-box,
        .link-box,
        .home-box,
        .menu-box {
        width: 100%;
        justify-content: center;
        text-align: center;
        font-size: 3vw;
        }
        height: 20vh;
    }
    @media screen and (max-width: 590px) {
      display: flex;
        flex-direction: row;
    }
    @media screen and (max-width: 870px) {
    
            .link-box{
              display: flex;
              justify-content: center;
            }

            .link-box,
            .home-box,
            .menu-box {
            
            font-size: 4vw;
            }
    }
`;

export const LocalImage = styled.img`
  width: 4vw;
`;

export const H2 = styled.h2`
  margin: 0;
`;

export const LocalParagrafo = styled.p`
  max-width: 30vw;
  font-size: 1.2vw;
  @media screen and (max-width: 547px) {
        font-size: 2.2vw;
    }
    @media screen and (max-width: 870px) {
    
    font-size: 1.5vw;
}
`;

export const LogoImage = styled.img`
  width: 16.8vw;
`;

export const HomeLinkImage = styled.img`
  width: 2vw;
  @media screen and (max-width: 547px) {
        width: 5vw;
    }
    @media screen and (max-width: 870px) {
        width: 5.2vw;
    }
`;

export const HomeLink = styled.a`
  @media screen and (max-width: 870px) {
    
    font-size: 2vw;
}`;

export const MenuLinkImage = styled.img`
  width: 2vw;
  @media screen and (max-width: 547px) {
        width: 5vw;
    }
    @media screen and (max-width: 870px) {
        width: 5.2vw;
    }
`;

export const MenuLink = styled.a`
  @media screen and (max-width: 870px) {
    
    font-size: 2vw;
}`;

export const HeaderTwo = styled.div`
  background-color: #E09426;
  width: 90%;
  max-width: 1200px;
  height: 6vh;
  margin: 2vh auto;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 547px) {
    align-items: center;
  }
`;

export const InstaImageLink = styled.a``;

export const InstaImage = styled.img`
  width: 3vw;
  @media screen and (max-width: 547px) {
    width: 2vh;
  }
  @media screen and (max-width: 870px) {
    width: 3vh;
  }
`;

export const LinkPedidos = styled.a`
  font-size: 1.2vw;
  cursor: pointer;
  color: #E09426;
  background: rgba(69, 0, 0, 0.86);
  width: 11vw;
  height: 4vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    width: 9vw;
    background: rgba(69, 0, 0, 0.6);
    font-size: 1vw;
    margin-left: 1vw;
    margin-right: 1vw;
  }
  @media screen and (max-width: 547px) {
    height: 2vh;
    width: 15vw;
    border-radius: 5px;
  }
  @media screen and (max-width: 870px) {
    width: 18vw;
    font-size: 2vw;
}
`;

export const WhatsImageLink = styled.a``;

export const WhatsImage = styled.img`
  width: 3vw;
  @media screen and (max-width: 547px) {
    width: 2vh;
  }
  @media screen and (max-width: 870px) {
    width: 3vh;
  }
`;

export const Section = styled.div`
  background-color: #F4EFEF;
  margin-top: 2vh;
  border-radius: 20px;
  display: grid;
  justify-items: center;
  align-items: center;
  width:  97%;
  .lanches {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4vh 2vw;
  }
  .lanche-div {
    height: 5vh;
    background-color: #ff9100;
    margin-top: 1vh;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5vw;
    @media screen and (max-width: 870px) {
    
    font-size: 2vw;
}
  }
  @media screen and (max-width: 547px) {
    .lanches {
      align-items: center;
    }
    .lanche-div {
        font-size: 4vw;
    }
    
  }
`;

export const H1 = styled.h1`
    margin-top: 3vh;
    margin-bottom: 5vh ;
    font-size: 6vw;
    color:  #FF0000;
    @media screen and (max-width: 547px) {
        font-size: 4vw;
    }
`;

export const LancheImage = styled.img`
  width: 20vw;
  max-width: 300px;
  border-radius: 20px;
`;

export const Button = styled.button`
  width: 80vw;
  max-width: 70vw;
  height: 4vh;
  border-radius: 7px;
  background: #E09426;
  margin-top: 2vh;
  border: none;
  margin-bottom: 10vh;
  font-size: 1.6vw;
  &&:hover{
    cursor: pointer;
    background-color: rgba(224, 148, 38, 0.8);
    
  }
  @media screen and (max-width: 870px) {
        font-size: 3vw;
    }
`;

export const Footer = styled.div`
  margin-top: 2vh;
  width:  97%;
  height: 10vh;
  background: #FF0000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  h1 {
    color: black;
    font-weight: 100;
    margin: 5vh;
    font-size: 1.5vw;
  }
  @media screen and (max-width: 870px) {
    h1{
    font-size: 2vw;
  }
}
  @media screen and (max-width: 547px) {
    height: 6vh;
    border-radius: 10px;
    
    h1{
        font-size: 2vw;
    }
}
`;
