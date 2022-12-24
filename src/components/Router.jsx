import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

const Home = lazy(() => import("./Home"));
const NotFound = lazy(() => import("./NotFound"));

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
