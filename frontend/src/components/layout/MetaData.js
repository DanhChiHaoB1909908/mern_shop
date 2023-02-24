import React from "react";
import { Helmet } from "react-helmet";

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} - Shop quà online`}</title>
    </Helmet>
  );
};

export default MetaData;
