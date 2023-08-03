import React from "react";
import { useRecoilState } from "recoil";
import { CountState } from "../../../recoil/atom/CountState";
import { Button } from "@mui/material";
import { DivFlex } from "../../../styles/flex";

function MinusState() {
  const [countState, setCountState] = useRecoilState<number>(CountState);

  return (
    <>
      <DivFlex>
        <Button
          variant="outlined"
          onClick={() => setCountState((prev) => prev - 1)}
          sx={{ mx: 2 }}
        >
          -
        </Button>
        <p>countState value = {countState}</p>
      </DivFlex>
    </>
  );
}

export default MinusState;
