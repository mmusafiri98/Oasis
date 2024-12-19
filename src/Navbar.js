import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavWrapper>
      {/* Barre promotionnelle */}
      <PromoBar>
        <p>Voyages d'exception : une sélection d'offres haut de gamme ! Je succombe &gt;&gt;&gt;</p>
        <a href="#en-savoir-plus">En savoir plus</a>
      </PromoBar>

      {/* Section principale du Navbar */}
      <Nav>
        <LogoContainer>
          <img src="Logo Oasis .svg" alt="Logo Oasis Journeys" />
          <p>Oasis, la compagnie des voyages réussis</p>
        </LogoContainer>

        <NavOptions>
          <Option>
            <span>💙</span> Mes favoris
          </Option>
          <Option>
            <span>📅</span> Ma réservation
          </Option>
          <Option>
            <span>❓</span> Besoin d'aide ?
          </Option>
          <ContactInfo>
            <strong>📞 053 28 01 38</strong>
            <small>Du lundi au samedi de 9h à 21h</small>
            <small>Le dimanche de 10h à 19h</small>
          </ContactInfo>
        </NavOptions>
      </Nav>

      {/* Menu principal */}
      <MainMenu>
        <MenuItem href="#sejours">Séjours</MenuItem>
        <MenuItem href="#clubs">Clubs</MenuItem>
        <MenuItem href="#circuits">Circuits</MenuItem>
        <MenuItem href="#bons-plans">Les bons plans</MenuItem>
        <MenuItem href="#destinations">Destinations</MenuItem>
      </MainMenu>

      {/* Image de fond avec la barre de filtres */}
      <BackgroundImage>
        <FilterContent>
          <h2>Voyages avec notre compagnie des voyages, choisissez votre destination</h2>
          <p>Plus que des vacances, une expérience</p>

          {/* Barre de filtres */}
          <FilterBar>
            <FilterItem>
              <span>📍</span> Destinations
            </FilterItem>
            <FilterItem>
              <span>🌐</span> Indifférent
            </FilterItem>
            <FilterItem>
              <span>📅</span> Date de départ
            </FilterItem>
            <FilterItem>
              <span>🌐</span> Indifférent
            </FilterItem>
            <FilterItem>
              <SearchButton>
                <span>🔍</span> Rechercher
              </SearchButton>
            </FilterItem>
          </FilterBar>
        </FilterContent>
      </BackgroundImage>

      {/* Section des pépites du moment */}
      <DestinationsHighlight>
        <h3>Les pépites du moment</h3>
        <DestinationsGrid>
          <Card>
            <Image src="Maurice.jpg" alt="Île Maurice" />
            <CardText>
              <Title>Île Maurice</Title>
              <Description>Les beautés divines d'une île paradisiaque</Description>
              <Price>À partir de 951€</Price>
            </CardText>
          </Card>
          <Card>
            <Image src="repubblica domenicana.jpg" alt="République Dominicaine" />
            <CardText>
              <Title>République Dominicaine</Title>
              <Description>Vivez l'évasion avec nous</Description>
              <Price>À partir de 899€</Price>
            </CardText>
          </Card>
          <Card>
            <Image src="thailande.jpg" alt="Thaïlande" />
            <CardText>
              <Title>Thaïlande</Title>
              <Description>Culture et nature en harmonie</Description>
              <Price>À partir de 832€</Price>
            </CardText>
          </Card>
          <Card>
            <Image src="Egypte.jpg" alt="Égypte" />
            <CardText>
              <Title>Égypte</Title>
              <Description>Découvrez l'histoire antique</Description>
              <Price>À partir de 476€</Price>
            </CardText>
          </Card>
        </DestinationsGrid>
        <ActionButton>Voir tous nos bons plans</ActionButton>
      </DestinationsHighlight>

      {/* Section des meilleures ventes */}
      <SalesSection>
        <SalesTitle>Les meilleures ventes</SalesTitle>
        <SalesGrid>
          <SalesCard>
            <SalesImage src="spagna.jpg" alt="Espagne" />
            <SalesText>
              <h4>Club Coralia Valeria Dar Atlas Marrakech 4*</h4>
              <p>3 jours / 2 nuits - tout inclus</p>
              <SalesPrice>266€</SalesPrice>
            </SalesText>
          </SalesCard>
          <SalesCard>
            <SalesImage src="francia.jpg" alt="France" />
            <SalesText>
              <h4>Croisière au fil du Nil By Club Coralia</h4>
              <p>8 jours / 7 nuits - pension complète hors boissons</p>
              <SalesPrice>791€</SalesPrice>
            </SalesText>
          </SalesCard>
          <SalesCard>
            <SalesImage src="America.jpg" alt="Amérique" />
            <SalesText>
              <h4>BAHIA PRINCIPE GRAND PUNTA CANA 5*</h4>
              <p>5 jours / 5 nuits - tout inclus</p>
              <SalesPrice>1065€</SalesPrice>
            </SalesText>
          </SalesCard>
          <SalesCard>
            <SalesImage src="versace.jpg" alt="Versace" />
            <SalesText>
              <h4>Kappa Club Waridi Beach Resort & Spa 4</h4>
              <p>7 jours / 5 nuits - tout inclus</p>
              <SalesPrice>1179€</SalesPrice>
            </SalesText>
          </SalesCard>
        </SalesGrid>
      </SalesSection>
      <SalesCard>
        <h2>un monde de club des vacance que est on vous propose sur notre site </h2>
        <SalesImage src="ristorante.jpg" alt="ristorante" />
        <SalesText>
          <h3>Club Coralia Valeria Dar Atlas Marrakech 4 restaurant*</h3>
          <ActionButton>decouvre</ActionButton>
        </SalesText>
      </SalesCard>
      <SalesCard>
        <SalesImage src="club.jpg" alt="club" />
        <SalesText>
          <h3>Croisière au fil du Nil By Club Coralia</h3>
          <ActionButton>decouvre</ActionButton>
        </SalesText>
      </SalesCard>
      <SalesCard>
        <SalesImage src="game.jpg" alt="game" />
        <SalesText>
          <h3>BAHIA Club CANA 5*</h3>
          <ActionButton>decouvre</ActionButton>
        </SalesText>
      </SalesCard>
      <SalesCard>
        <SalesImage src="palla.jpg" alt="palla" />
        <SalesText>
          <h3>Kappa Club Waridi Beach Resort & Spa 4</h3>
          <ActionButton>decouvre</ActionButton>
        </SalesText>
      </SalesCard>
      <SalesCard>
        <SalesImage src="robot.jpg" alt="robot" />
        <SalesText>
          <a href="https://webdev05.masterthecode.eu/assistente%20virtuale%20AI/veronica.php">
            <ActionButton> veronica Ai Assistent virtual for guide you in this homepage</ActionButton>
          </a>
        </SalesText>
      </SalesCard>
    </NavWrapper>
  );
};

export default Navbar;

// Styles
const NavWrapper = styled.div`
  font-family: Arial, sans-serif;
`;

const PromoBar = styled.div`
  background-color:rgb(40, 144, 170);
  color: white;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
    font-size: 0.9rem;
  }

  a {
    color: white;
    text-decoration: underline;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 120px;
    height: auto;
  }

  p {
    font-size: 0.9rem;
    color: #333;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 100px;
    }
  }
`;

const NavOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Option = styled.div`
  font-size: 0.9rem;
  color: #333;

  span {
    font-size: 1.2rem;
  }
`;

const ContactInfo = styled.div`
  font-size: 0.8rem;
  color: #666;
  text-align: right;

  small {
    display: block;
    color: #888;
  }
`;

const MainMenu = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(40, 144, 170);
  padding: 1rem 0;

  @media (max-width: 768px) {
    flex-direction: column; /* Disposizione verticale */
    align-items: center;    /* Centrare gli elementi */
    gap: 0.5rem;            /* Aggiungere spaziatura tra gli elementi */
  }
`;

const MenuItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:hover {
    background-color: #1e90ff;
  }

  @media (max-width: 768px) {
    margin: 0; /* Rimuove i margini laterali */
    width: 90%; /* Adatta la larghezza per piccoli schermi */
    text-align: center; /* Centra il testo */
  }
`;


const BackgroundImage = styled.div`
  background-image: url("spiaggia.jpg");
  background-size: cover;
  background-position: center;
  padding: 2rem;
  color: white;
`;

const FilterContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Disposizione verticale */
    gap: 1rem;             /* Spaziatura tra gli elementi */
    align-items: center;   /* Centrare gli elementi */
  }
`;

const FilterItem = styled.div`
  background-color: rgb(40, 144, 170);
  padding: 0.5rem;
  border-radius: 5px;
  text-align: center; /* Centrare il contenuto */

  @media (max-width: 768px) {
    width: 90%; /* Adatta la larghezza per piccoli schermi */
  }
`;

const SearchButton = styled.button`
  background-color: rgb(192, 192, 19);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #c1c11d;
  }

  @media (max-width: 768px) {
    width: 90%; /* Adatta la larghezza per piccoli schermi */
  }
`;




const DestinationsHighlight = styled.section`
  padding: 3rem 0;
  text-align: center;
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardText = styled.div`
  padding: 1rem;
`;

const Title = styled.h4`
  font-size: 1.2rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  color:  black;
`;

const Price = styled.p`
  font-size: 1.2rem;
  color: rgb(192, 192, 19);
  font-weight: bold;
`;

const ActionButton = styled.button`
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: rgb(192, 192, 19);
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c23966;
  }
`;

const SalesSection = styled.section`
  padding: 3rem 0;
  text-align: center;
`;

const SalesTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const SalesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SalesCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
`;

const SalesImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const SalesText = styled.div`
  padding: 1rem;
  text-align: center;
`;

const SalesPrice = styled.p`
  font-size: 1.5rem;
  color: rgb(192, 192, 19;
  font-weight: bold;
  margin-top: 1rem;
`;
