import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "./features/pageError/notFound";
import Home from "./features/user/Home";
import { routes } from "./utils/pageRoutes";
import Contact from "./features/user/Contact";
import Project from "./features/user/Project";
import { lazy, Suspense } from "react";
import Fallback from "./features/components/Fallback";
import About from "./features/user/About";

const DefaultLayout = lazy(() => import("./features/user/DefaultLayout"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: routes.base,
      element: (
        <Suspense fallback={<Fallback />}>
          <DefaultLayout />
        </Suspense>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: routes.about, element: <About /> },
        { path: routes.contact, element: <Contact /> },
        { path: routes.project, element: <Project /> },
      ],
      errorElement: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
