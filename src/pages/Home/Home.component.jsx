import React from "react";

import Directory from "@components/directory/directory.component";
import { HomePageContainer } from "./Home.styles";

export const Home = () => (
  <div className="homepage">
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  </div>
);
