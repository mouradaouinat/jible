import React from "react";
import { Link } from "@reach/router";

const Navlink = props => {
  return (
    <Link
      getProps={({ isCurrent }) =>
        isCurrent
          ? { className: props.activeClassName }
          : { className: props.defaultClassName }
      }
      {...props}
    />
  );
};

export default Navlink;
