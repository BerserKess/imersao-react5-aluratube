import React from "react";
import { StyledRegisterVideo } from "./style";
import { createClient } from "@supabase/supabase-js";

//Custom Hook
function useForm() {
  const [values, setValues] = React.useState("");
  return {
    values,
    handleChange: (evento) => {
      const value = evento.target.value;
      const name = evento.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}
const PROJECT_URL = "https://orgpddrveviplfaeiokr.supabase.co";
const PROJETC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yZ3BkZHJ2ZXZpcGxmYWVpb2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzY5NjIsImV4cCI6MTk4Mzc1Mjk2Mn0.4IsBNSF2VypKaBGbu1FCC8I3TYXPtn5jcszBCYG8-jc";
const supabase = createClient(PROJECT_URL, PROJETC_KEY);

function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

export default function RegisterVideo() {
  const [formVisivel, setFormVisivel] = React.useState(false);
  const formCadastro = useForm({
    initialValues: {
      titulo: "Frost punk",
      url: "https://www.youtube.com/watch?v=QsqatJxAUtk",
    },
  });

  return (
    <StyledRegisterVideo>
      <button
        className="add-video"
        onClick={() => {
          setFormVisivel(true);
        }}
      >
        +
      </button>
      {formVisivel ? ( // abre e fecha o modal
        <form
          onSubmit={(evento) => {
            evento.preventDefault();
            supabase
              .from("video")
              .insert({
                title: formCadastro.values.titulo,
                url: formCadastro.values.url,
                thumb: getThumbnail(formCadastro.values.url),
                playlist: "music",
              })
              .then((oqueveio) => {
                console.log(oqueveio);
              })
              .catch((err) => {
                console.log(err);
              });
            setFormVisivel(false);
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => {
                setFormVisivel(false);
              }}
            >
              x
            </button>
            <input
              placeholder="Titulo do Video"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}
