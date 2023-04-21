import { AboutMe, Home, Publications, ReasearchandTech } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Header, Hero } from "./components";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-me" exact element={<AboutMe />} />
        <Route
          path="/research-technology"
          exact
          element={<ReasearchandTech />}
        />
        <Route path="/publications" exact element={<Publications />} />
        <Route
          path="/training-workshops"
          exact
          element={<ReasearchandTech />}
        />
        <Route path="/team-members" exact element={<ReasearchandTech />} />
        <Route path="/news-highlights" exact element={<ReasearchandTech />} />
      </Routes>
    </div>
  );
}

export default App;
