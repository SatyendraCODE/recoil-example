import { Typography, useTheme } from "@mui/material";
import {
  DivFlex,
  DivFlexColumnX,
  DivFlexColumnXY,
  DivFlexXY,
} from "../styles/flex";
import { ColorModeContext } from "../App";
import React from "react";
import { defaultMode } from "../consts/mode";
import { useRecoilState } from "recoil";
import { UserAtom } from "../recoil/atom/UserAtom";
import SvgLogo from "../asset/SvgLogo";

function HomePage() {
  const { mode } = React.useContext(ColorModeContext);
  const [userAtom] = useRecoilState(UserAtom);
  const theme = useTheme();

  return (
    <>
      <DivFlexColumnXY mt={15} mb={30}>
        <Typography variant="h4">
          {`Hello, ${userAtom.firstName} ${userAtom.lastName}.`}
        </Typography>
        <DivFlexXY my={10}>
          <Typography marginRight={3} fontSize={25}>
            Welcome to
          </Typography>
          <SvgLogo
            icon={theme.palette.primary.main}
            color={theme.palette.primary.main}
          />
          <Typography marginLeft={3} fontSize={25}>
            Project
          </Typography>
        </DivFlexXY>
        <DivFlexColumnXY mt={10}>
          <Typography
            fontSize={25}
            borderBottom={1}
            marginBottom={1}
            sx={{ color: theme.palette.error.main }}
          >
            Note
          </Typography>
          <Typography fontSize={25}>
            Count number stored in localStorage
            <br />
            User Data stored in sessionStorage
          </Typography>
        </DivFlexColumnXY>
      </DivFlexColumnXY>
      <DivFlexColumnX mt={5}>
        <Typography>
          Recoil is a state management library for React developed by Facebook.
          It provides an elegant and flexible approach to managing and sharing
          state in your React applications. Recoil is designed to make state
          management simple and efficient, especially for complex applications
          with multiple components that need to access and update shared data.
        </Typography>
        <Typography my={3}>Key Features and Concepts of Recoil:</Typography>

        <DivFlex>
          <Typography marginRight={2}>1.</Typography>
          <Typography>
            Atoms: Atoms are units of state in Recoil. They represent individual
            pieces of state, like variables. You can think of atoms as the
            single source of truth for specific data in your application.
            Components can read and subscribe to an atom, and when the atom's
            value changes, all the components that use that atom will
            automatically re-render to reflect the updated state.
          </Typography>
        </DivFlex>
        <DivFlex>
          <Typography marginRight={2}>2.</Typography>
          <Typography>
            Selectors: Selectors are derived state in Recoil. They allow you to
            derive new data from one or more atoms or other selectors. Selectors
            are used to compute values based on existing state without directly
            modifying the original atoms. Similar to atoms, components can
            subscribe to selectors, and when the underlying atoms change, the
            selector will recompute its value, triggering re-renders for the
            components that depend on it.
          </Typography>
        </DivFlex>
        <DivFlex>
          <Typography marginRight={2}>3.</Typography>
          <Typography>
            Asynchronous State: Recoil makes handling asynchronous data flows
            straightforward. It provides built-in utilities for managing
            asynchronous operations, such as data fetching. This ensures that
            components respond correctly to loading, error, and success states
            during asynchronous operations.
          </Typography>
        </DivFlex>
        <DivFlex>
          <Typography marginRight={2}>4.</Typography>
          <Typography>
            Minimal Boilerplate: Recoil minimizes the amount of boilerplate code
            needed for state management. It encourages a more straightforward
            mental model by directly reading and writing state, avoiding complex
            actions and reducers found in traditional Redux-based approaches.
          </Typography>
        </DivFlex>
        <DivFlex>
          <Typography marginRight={2}>5.</Typography>
          <Typography>
            Dependency Graph: Recoil builds a dependency graph to efficiently
            track relationships between atoms and selectors. This enables Recoil
            to manage and update state more efficiently, leading to optimized
            performance.
          </Typography>
        </DivFlex>
        <DivFlex>
          <Typography marginRight={2}>6.</Typography>
          <Typography>
            Flexible and Scalable: Recoil is designed to be flexible and
            scalable, making it suitable for small and large React applications
            alike. Its simplicity and modularity allow for easy integration into
            existing projects.
          </Typography>
        </DivFlex>
        <Typography mt={3}>
          Overall, Recoil aims to provide a more intuitive and React-friendly
          way to manage state, avoiding the boilerplate and ceremony associated
          with some other state management solutions. Its adoption is growing
          rapidly, and many React developers find it to be a valuable addition
          to their toolkit for building robust and maintainable applications.
        </Typography>
      </DivFlexColumnX>
    </>
  );
}

export default HomePage;
