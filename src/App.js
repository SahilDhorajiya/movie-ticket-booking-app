import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import ListPage from "./views/movieList";
import DetailPage from "./views/detailPage";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import BookingSummary from "./views/bookingSummary";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route>
          <Route path="/" element={<ListPage />} />
          <Route path="/detailPage/:movieId" element={<DetailPage />} />
          <Route path="/booking-summary-page" element={<BookingSummary />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
