import {
  BrowserRouter,
  Routes,
  Route,
} from 'react';

import HomePage from "./pages/HomePage";
import FeedPage from "./pages/FeedPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import SearchPage from "./pages/SearchPage";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/feed"
          element={<FeedPage />}
        />

        <Route
          path="/news/:id"
          element={<NewsDetailPage />}
        />

        <Route
          path="/search"
          element={<SearchPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}