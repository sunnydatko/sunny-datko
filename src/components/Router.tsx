import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Loader from "./Loader";

const Home = lazy(() => import("./Home"));
const AboutPage = lazy(() => import("./AboutPage"));
const NotFound = lazy(() => import("./NotFound"));
const ExperiencePage = lazy(() => import("./ExperiencePage"));
const ContactPage = lazy(() => import("./ContactPage"));

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<ExperiencePage />} path="/experience" />
          <Route element={<ContactPage />} path="/contact" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Suspense>
    </Layout>
  </BrowserRouter>
);

export default Router;
