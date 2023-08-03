import { Routes, Route } from "react-router-dom";
import { PAGES } from "./consts/routes";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {PAGES.map((page) => (
            <Route key={page.path} path={page.path} element={page.element()}>
              {page.children.map((childRoute, index) =>
                index === 0 ? (
                  <Route
                    key={childRoute.path}
                    index
                    element={childRoute.element()}
                  />
                ) : (
                  <Route
                    key={childRoute.path}
                    path={childRoute.path}
                    element={childRoute.element()}
                  />
                )
              )}
            </Route>
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;
