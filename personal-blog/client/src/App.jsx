import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ArticleDetails from "./pages/ArticleDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/article/:articleId" element={<ArticleDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;