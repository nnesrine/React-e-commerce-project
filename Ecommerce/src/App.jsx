
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Hero from "./components/hero/Hero.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme.jsx";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Header1></Header1>
      <Header2></Header2>
      <Header3></Header3>
     <Box bgcolor={theme.palette.bg.main}>
       <Hero></Hero>
      <Main></Main>
     </Box>
     <Footer></Footer>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App
