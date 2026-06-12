import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Loader from "./Loader";

const Home = lazy(() => import("../pages/Home"));
const MuiCaseStudy = lazy(() => import("../pages/case-studies/MuiCaseStudy"));
const ThemingCaseStudy = lazy(() => import("../pages/case-studies/ThemingCaseStudy"));
const ComponentSystemCaseStudy = lazy(() => import("../pages/case-studies/ComponentSystemCaseStudy"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<MuiCaseStudy />} path="/case-study/mui-design-system" />
          <Route element={<ThemingCaseStudy />} path="/case-study/theming-platform" />
          <Route element={<ComponentSystemCaseStudy />} path="/case-study/component-system" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Suspense>
    </Layout>
  </BrowserRouter>
);

export default Router;
