import React from "react";
import PropTypes from "prop-types";
import Card from "./card.js";
import { Catcher } from "./../../img/catcher.jpg";
import { Crime } from "./../../img/crime.jpg";
import { littleprince } from "./../../img/littleprince.jpg";
import { we } from "./../../img/we.jpg";

const ShowAll = () => {
  const list = [
    {
      title: "The Catcher in the Rye",
      title2: "by J. D. Salinger",
      imageUrl: "catcher.jpg",
      description:
        "It is an all-time classic in coming-of-age literature- an elegy to teenage alienation, capturing the deeply human need for connection and the bewildering sense of loss as we leave childhood behind.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "We",
      title2: "by Yevgeny Zamyatin",
      imageUrl: "we.jpg",
      description:
        "We is set in the twenty-sixth century AD in the OneState: a totalitarian society completely based on rationality and mathematics.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Little Prince",
      title2: "by Antoine de Saint-Exupéry",
      imageUrl: "littleprince.jpg",
      description:
        "The Little Prince is a poetic tale, with watercolor illustrations by the author, in which a pilot stranded in the desert meets a young prince visiting Earth from a tiny asteroid.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment1",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment2",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment3",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment4",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment5",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment6",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment7",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment8",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment9",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment10",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment11",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment12",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment13",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment14",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment15",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment16",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
    {
      title: "Crime and Punishment17",
      title2: "by Fiodor Dostoevsky",
      imageUrl: "crime.jpg",
      description:
        "It is about many things—the psychology of crime, the destiny of families, the vanity and anguish of single men adrift.",
      buttonLabel: "Find Out More!",
    },
  ];
  const listOfCards = list.map((cardItem) => {
    return (
      <div className="col">
        <Card
          title={cardItem.title}
          title2={cardItem.title2}
          imageUrl={cardItem.imageUrl}
          description={cardItem.description}
          buttonLabel={cardItem.buttonLabel}
        />
      </div>
    );
  });
  // return <div className="conteiner center">{listOfCards}</div>;
  return (
    <div>
      <h1 className="text-center pt-5">All Books</h1>
      <br />
      <div className="container">
        <div className="row row-cols-auto">{listOfCards}</div>
      </div>
    </div>
  );
};

export default ShowAll;
