import React from "react";
import config from "../aluratube-config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledHeader } from "../src/components/Header";
import { StyledFavorites } from "../src/components/Favorites";

function HomePage() {
  const homePageStyles = {
    // backgroundColor: "red"
  };
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  
  
  return (
    // colocando entre parenteses tem mais felxibilidade na hroa de fazer o return
    <>
      <CSSReset />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          // backgroundColor: "red",
        }}
      >
        {/*Prop Drilling: Vai perfurando a aplicação passando as propriedades*/ }
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
        <Header />
        <Favorites favorites={config.favorites}></Favorites>
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>Conteudo</Timeline>
      </div>
    </>
  );
}

export default HomePage;

function Header() {
  return (
    <StyledHeader>
      <div className="banner"></div>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Favorites({ favorites }) {
  return (
    <StyledFavorites>
      <h3>Favorites</h3>
      <div className="favorite-content">
        {favorites.map((favorite) => (
          <a
            href={`https://github.com/${favorite.github}`}
            target="_blank"
            className="favorite-info"
            key={favorite.id}
          >
            <img src={`https://github.com/${favorite.github}.png`} alt="###" />
            <p>@{favorite.github}</p>
          </a>
        ))}
      </div>
    </StyledFavorites>
  );
}

function Timeline({searchValue,...props}) {
  // tudo que se passa para um componente vem para um variavel só
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        //para cada playlist vai pegar os videos
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos.filter((video) => {
                const titleNormalized = video.title.toLowerCase()
                const searchValueNormalized = searchValue.toLowerCase()
                return titleNormalized.includes(searchValueNormalized)
              }).map((video) => {
                return (
                  <a key={video.url} href={video.url} target="_blank">
                    <img src={video.thumbnail} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
