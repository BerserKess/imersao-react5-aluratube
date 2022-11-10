import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, {
  ColorModeContext,
} from "../src/components/Menu/ColorMode";
import RegisterVideo from "../src/components/RegisterVideo";
/**
 * _app.js: Um arquivo de definições globais do NextJS
 *  ThemeProvider -> Tem função de prover um tema para a aplicação toda
 * ColorModeProvider -> Mudança de estado entre os temas para toda aplicação
 */
export function MyApp({ Component, pageProps }) {
  const theme = {
    light: {
      backgroundLevel1: "#FFFFFF",
      backgroundLevel2: "#F0F0F0",
      backgroundBase: "#F9F9F9",
      borderBase: "#E5E5E5",
      textColorBase: "#222222",
    },
    dark: {
      backgroundBase: "#181818",
      backgroundLevel1: "#202020",
      backgroundLevel2: "#313131",
      borderBase: "#383838",
      textColorBase: "#FFFFFF",
    },
  };

  const contexto = React.useContext(ColorModeContext);
  return (
    <ThemeProvider theme={theme[contexto.mode]}>
      <CSSReset />
      <Component {...pageProps} />
      <RegisterVideo/>
    </ThemeProvider>
  );
}

function ProviderWraper(props) {
  return (
    <ColorModeProvider initialMode={"dark"}>{props.children}</ColorModeProvider>
  );
}

export default function App(props) {
  return (
    <ProviderWraper>
      <MyApp {...props} />
    </ProviderWraper>
  );
}
