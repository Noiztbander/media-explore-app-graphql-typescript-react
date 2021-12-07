import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/react-hooks";
import { Icharacter, characterCardProps } from "../utils/types";
import { useNavigate } from "react-router-dom";

const GET_CHARACTER = gql`
  query GetCharacters($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      gender
      location {
        name
        dimension
        type
      }
    }
  }
`;

export const Detailed = () => {
  const navigate = useNavigate();
  const [characterId, setCharacterId] = useState<string>("");

  useEffect(() => {
    const windowUrl = window.location.href;
    const id: string = windowUrl.substr(32);
    setCharacterId(id);
  }, []);

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: characterId },
  });

  return (
    <main className="body">
      <header className="p-4">
        <nav className="d-flex justify-content-between align-items-center w-100">
          <h4 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            Media Explorer App
          </h4>
          <h6>By Erick Noiztbander</h6>
        </nav>
      </header>
      {!loading && data ? (
        <CharacterCard data={data.character} />
      ) : (
        <h1 className="text-center w-100">loading</h1>
      )}
    </main>
  );
};

const CharacterCard = ({ data }: characterCardProps) => {
  const { name, status, species, image, gender, location }: Icharacter = data;

  return (
    <article className="card">
      <div className="card-header">
        <h1 className="pt-2">{name}</h1>
      </div>
      <div className="card-body flex-row d-flex gap-5">
        <img src={image} alt="character-picture" />
        <div className="d-flex flex-row gap-3">
          <div className="h-100 d-flex flex-column gap-3 pe-3">
            <h2>General Information</h2>
            <h4>Status: {status}</h4>
            <h4>Specie: {species}</h4>
            <h4>Gender: {gender}</h4>
            <h4>Location: {location.name}</h4>
          </div>
          <div className="h-100 d-flex flex-column gap-3">
            <h2>Loaction</h2>
            <h4>Name: {location.name}</h4>
            <h4>Dimension: {location.dimension}</h4>
            <h4>Type: {location.type}</h4>
          </div>
        </div>
      </div>
    </article>
  );
};
