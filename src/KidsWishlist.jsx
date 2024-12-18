import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  height: 440px;
  background: radial-gradient(circle, rgba(145, 248, 71, 0.98) 0%, #016d0b 95%);
  border: 3px solid #ffd700;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  padding: 5px;
  transition: transform 0.3s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: "✨✨✨✨✨✨✨✨✨✨";
    left: 5px;
  }
  &::after {
    content: "✨✨✨✨✨✨✨✨✨✨";
    position: absolute;
    left: 10px;
    bottom: 5px;
  }
`;

const Name = styled.h2`
  font-size: 26px;
  font-style: italic;
  margin: 0 15px 5px;
  padding: 5px 0 5px 0;
  color: rgb(1, 59, 207);
`;

const ID = styled.h3`
  font-size: 14px;
  font-style: normal;
  color: hsl(0, 0%, 0%);
  margin-top: 15px;
  margin-left: 15px;
  padding-top: 5px;
`;

const Age = styled.h3`
  font-size: 16px;
  font-weight: 300;
  margin: 0 15px 30px;
  color: rgb(228, 244, 8);
`;

const ListItem = styled.li`
  border-radius: 5px;
  padding: 6px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-style: italic;
  font-weight: 600;
  line-height: 0.5rem;
  color: rgb(12, 2, 87);

  &::before {
    content: "🎁";
    padding: 5px;
  }
`;

const Character = styled.p`
  color: rgb(176, 9, 9);
  font-size: 20px;
  font-weight: 600;
  font-family: "Times New Roman", Times, serif;
  position: absolute;
  bottom: 36px;
  right: 15px;
`;

const SnilleBarn = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  font-weight: 600;
  color: rgb(176, 9, 9);
  position: absolute;
  bottom: 36px;
  right: 15px;
}

  // &::before {
  //   content: "";
  //   position: absolute;
  //   // top: -4px;
  //   // left: -4px;
  //   // right: -4px;
  //   // bottom: -4px;
  //   // background: linear-gradient(
  //   //   90deg,
  //   //   rgb(228, 100, 228),
  //   //   rgb(227, 227, 94),
  //   //   rgb(109, 227, 227),
  //   //   rgb(224, 96, 224)
  //   // );
  //   // background-size: 300%;
  //   // border-radius: 10px;
  //   animation: gradient-border 3s infinite;
  //   z-index: -1;
  // }

  // @keyframes gradient-border {
  //   0% {
  //     background-position: 0% 50%;
  //   }
  //   50% {
  //     background-position: 100% 50%;
    //  }
    //  100% {
    //    background-position: 0% 50%;
    //  }
 }
`;

export default function KidsWishlist({
  data: { id, name, age, wishlist, naughty },
}) {
  return (
    <Card className={`${!naughty ? "snille-barn" : ""}`}>
      <ID>{id}</ID>
      <Name>{name}</Name>
      <Age>({age} years)</Age>

      <ul>
        {wishlist.map((e, index) => (
          <ListItem key={index}>{e}</ListItem>
        ))}
      </ul>
      {naughty && <Character>Naughty! 😎</Character>}
      {!naughty && (
        <SnilleBarn>
          <p>Snille Barn! 🤩</p>
        </SnilleBarn>
      )}
    </Card>
  );
}
