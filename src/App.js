import './App.css';
import { Root } from './components/Root/Root';
import { HomePage } from './components/HomePage/HomePage';
import { BlogList } from './components/Blog/BlogList';
import { BlogArticle } from './components/Blog/BlogArticle';
import { BlogArticleNotFound } from './components/Blog/BlogArticleNotFound';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// create router with JSX Route elements
const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<HomePage />} />
    <Route path="/blog" element={<BlogList />} />
    <Route path="/blog/:title" element={<BlogArticle />} />
    <Route path="/blog-title-not-found" element={<BlogArticleNotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
