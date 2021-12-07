import React from "react";
import { gql, useQuery } from "@apollo/react-hooks";
import { characterType } from "../../utils/types";
import { LoadingButton } from "../generalButton/generalButton";
import { useNavigate } from "react-router-dom";

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

function Characters(): React.ReactElement {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) console.log("loading");
  if (error) console.log(`Error! ${error.message}`);

  return (
    <section className="character__card--main--container">
      {!loading &&
        data.characters.results.map((character: characterType) => (
          <div key={character.id} className="character__card">
            <div className="character__card--content">
              <p>{character.name}</p>
              <LoadingButton
                handleClick={() => navigate("details/" + character.id)}
                sendingText="Loading "
                idleText="More info"
                type="button"
              />
            </div>
            <img
              className="character__card--image"
              src={character.image}
              alt="rick-morty-picture"
            />
          </div>
        ))}
    </section>
  );
}

export default Characters;
