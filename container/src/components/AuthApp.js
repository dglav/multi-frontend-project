import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/AuthApp";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        // if statement to prevent infinite loop
        if (history.location.pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn: () => {
        console.log("user signed in");
        onSignIn();
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};
