import React from "react";
import KidsWishlist from "./KidsWishlist";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import Snowfall from "react-snowfall";

const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family: 'Lucida Sans', sans-serif;    
}

body {
   margin: 0;
   padding:0;
   height: 100%;
}
`;

const AppContainer = styled.div`
  background: linear-gradient(rgb(176, 90, 78) 0%, rgb(209, 39, 39) 95%);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const scaleInOut = keyframes`
  0% {
    transform: scale(1); 
  }
  50% {
    transform: scale(1.2); 
  }
  100% {
    transform: scale(1); 
  }
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: rgb(251, 226, 1);
  font-style: italic;
  font-size: 60px;
  font-family: "Sriracha", cursive;
  text-decoration: underline;
  padding-top: 20px;
  animation: ${scaleInOut} 3s infinite;
`;

const WishlistContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6rem;
  padding: 5% 25%;
  max-width: fit-content;
  justify-self: center;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 40px;
    justify-items: center;
  }
`;

function App() {
  const kidsWishlist = [
    {
      id: 1,
      name: "Emilie",
      age: 8,
      wishlist: [
        "Dukkehus",
        "Enhjørningbamse",
        "Fargeleggingsbok",
        "Hoppeball",
      ],
      naughty: false,
    },
    {
      id: 2,
      name: "Jakob",
      age: 10,
      wishlist: ["Fjernstyrt bil", "Lego-sett", "Videospill"],
      naughty: true,
    },
    {
      id: 3,
      name: "Sofie",
      age: 6,
      wishlist: ["Tryllestav", "Fe-kostyme", "Glitterpenner", "Dansesko"],
      naughty: false,
    },
    {
      id: 4,
      name: "Lars",
      age: 9,
      wishlist: [
        "Basketball",
        "Drone",
        "Tegneseriebøker",
        "Kikkert",
        "Byggesett",
      ],
      naughty: false,
    },
    {
      id: 5,
      name: "Mia",
      age: 7,
      wishlist: ["Puslespill", "Kunstutstyr", "Prinsessekjole"],
      naughty: true,
    },
    {
      id: 6,
      name: "Noa",
      age: 11,
      wishlist: ["Skateboard", "Vitenskapssett", "Brettspill", "Fotball"],
      naughty: true,
    },
    {
      id: 7,
      name: "Oda",
      age: 5,
      wishlist: [
        "Lekekjøkken",
        "Kosedyr",
        "Boblemaskin",
        "Tesett",
        "Leketallerkener",
      ],
      naughty: false,
    },
    {
      id: 8,
      name: "Adrian",
      age: 8,
      wishlist: ["Fotball", "Actionfigurer", "Togbane"],
      naughty: false,
    },
    {
      id: 9,
      name: "Anna",
      age: 6,
      wishlist: [
        "Tesett",
        "Dukketeater",
        "Glitterklistremerker",
        "Prinsessekrone",
      ],
      naughty: false,
    },
    {
      id: 10,
      name: "Elias",
      age: 9,
      wishlist: ["Elektrisk sparkesykkel", "Rubiks kube", "Tegneserieromaner"],
      naughty: true,
    },
    {
      id: 11,
      name: "Ella",
      age: 7,
      wishlist: [
        "Prinsesseslott",
        "Kostymer",
        "Lekekjøkken",
        "Perlesett",
        "Interaktiv bok",
      ],
      naughty: false,
    },
    {
      id: 12,
      name: "Lukas",
      age: 8,
      wishlist: [
        "Drone",
        "Fjernstyrt båt",
        "Lego-romskip",
        "Skissebok",
        "LED-nattlampe",
      ],
      naughty: true,
    },
    {
      id: 13,
      name: "Charlotte",
      age: 6,
      wishlist: ["Kosehund", "Kunstsett", "Glow-stick-armbånd", "Mini-piano"],
      naughty: false,
    },
    {
      id: 14,
      name: "Marius",
      age: 9,
      wishlist: [
        "Basketballkurv",
        "Robotbyggesett",
        "Fotballsko",
        "Actionkamera",
        "Fjernstyrt lastebil",
      ],
      naughty: false,
    },
    {
      id: 15,
      name: "Aria",
      age: 5,
      wishlist: ["Fevinger", "Glitterlim", "Tryllestav", "Tesett", "Leketlf"],
      naughty: false,
    },
    {
      id: 16,
      name: "Benjamin",
      age: 10,
      wishlist: [
        "Fjernstyrt helikopter",
        "Eksperimentsett",
        "VR-briller",
        "Tursekk",
      ],
      naughty: true,
    },
    {
      id: 17,
      name: "Isabella",
      age: 6,
      wishlist: [
        "Havfruedukke",
        "Kunststativ",
        "Malesett",
        "Enhjørningsekk",
        "Ballettsko",
      ],
      naughty: true,
    },
    {
      id: 18,
      name: "Henrik",
      age: 11,
      wishlist: [
        "Spillkonsoll",
        "Skateboard",
        "Elektrisk gitar",
        "Støydempende hodetelefoner",
        "Tegneseriebokserie",
        "Bygg-din-egen-drone-sett",
      ],
      naughty: true,
    },
    {
      id: 19,
      name: "Liva",
      age: 5,
      wishlist: ["Boblemaskin", "Leketamera", "Modell-leire", "Koseenhjørning"],
      naughty: false,
    },
    {
      id: 20,
      name: "Sander",
      age: 9,
      wishlist: [
        "Sportsdrakt",
        "Basketball",
        "Fjernstyrt bil",
        "Bygg-din-egen katapult-sett",
        "Walkie-talkier",
      ],
      naughty: false,
    },
  ];

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Snowfall color="skyblue" height="300vh" snowflakeCount={200} />

        <Heading>Ønskelister Fra Barn</Heading>
        <WishlistContainer>
          {kidsWishlist.map((e) => (
            <KidsWishlist key={e.id} data={e} />
          ))}
        </WishlistContainer>
      </AppContainer>
    </>
  );
}

export default App;
