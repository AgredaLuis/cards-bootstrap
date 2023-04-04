import React from "react";
import Card from "./Card";
import { images } from "../constant";

const cards = [
  {
    id: 1,
    title:  "fazt wEb",
    Cardimage: images.image1,
    url: "https://google.com",
  },
  {
    id: 2,
    title: "Fatz Blog",
    Cardimage: images.image2,
    url: "https://google.com",
  },
  {
    id: 3,
    title: "Fatz Youtube",
    Cardimage: images.image3,
    url: "https://google.com",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center h-100 align-items-center">
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-md-4">
            <Card title={card.title} imageSource={card.Cardimage}  url={card.url}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
