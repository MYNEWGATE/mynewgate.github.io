import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "./features/pageError/notFound";
import { routes } from "./utils/pageRoutes";
import { Suspense, lazy } from "react";

import Fallback from "./features/components/Fallback";
import About from "./features/user/About";
import Contact from "./features/user/Contact";
import Project from "./features/user/Project";
import Home from "./features/user/Home";

const DefaultLayout = lazy(() => import("./features/user/DefaultLayout"));

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: routes.base,
        element: <DefaultLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: routes.about, element: <About /> },
          { path: routes.contact, element: <Contact /> },
          { path: routes.project, element: <Project /> },
        ],
        errorElement: <NotFound />,
      },
    ],
  );

  return (
    <Suspense fallback={<Fallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
