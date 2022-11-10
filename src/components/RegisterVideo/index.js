import React from "react";
import { StyledRegisterVideo } from "./style";

//Custo Hook
function useForm() {
    const [values, setValues] = React.useState("");
    return{
        values,
        handleChange: (evento) => {
            const Value = evento.target.values;
            const name = evento.target.name
            setValues({
              ...values,
              [name]: Value,
            });
          },
          clearForm(){
            setValues({})
          }
    }
}
export default function RegisterVideo() {
  const [formVisivel, setFormVisivel] = React.useState(false);
  const formCadastro = useForm()

  return (
    <StyledRegisterVideo>
      <button
        className="add-video"
        onClick={() => {
          setFormVisivel(true)
        }}
      >
        +
      </button>
      {formVisivel ? ( // abre e fecha o modal
        <form onSubmit={(evento)=>{
            evento.preventDefault();
            setFormVisivel(false);
            formCadastro.clearForm();
        }}>
          <div>
            <button type="button"
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
            <input placeholder="URL"
            name="url"
            value={formCadastro.values.url} onChange={formCadastro.handleChange} />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}
