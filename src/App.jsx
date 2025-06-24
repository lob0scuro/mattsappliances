import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Landing from "./routes/Landing";
import LakeCharlesHome from "./routes/home/LakeCharlesHome";
import JenningsHome from "./routes/home/JenningsHome";
import LafayetteHome from "./routes/home/LafayetteHome";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Landing />} />
        <Route path="lake-charles-home" element={<LakeCharlesHome />} />
        <Route path="jennings-home" element={<JenningsHome />} />
        <Route path="lafayette-home" element={<LafayetteHome />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
