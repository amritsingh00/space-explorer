import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PictureDay from "./pages/PictureDay";
import ISS from "./pages/ISS";
import Favorites from "./pages/Favorites";
import SearchByDate from "./pages/SearchByDate";
import NotFound from "./pages/NotFound";
import FavoriteDetails from "./pages/FavoriteDetails";
function App() {
  return (
    <>
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/picture" element={<PictureDay />} />
          <Route path="/iss" element={<ISS />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<SearchByDate />} />
          <Route path="/favorite-details" element={<FavoriteDetails />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;