import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { CountState } from "../../../recoil/atom/CountState";
import { DivFlex, DivFlexY } from "../../../styles/flex";
import { Button, TextField } from "@mui/material";

function MultiState() {
  const [countState, setCountState] = useRecoilState<number>(CountState);
  const [mul, setMul] = useState(2);

  return (
    <>
      <DivFlexY>
        Multiply countState({countState}) value by{" "}
        <TextField
          type="number"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          value={mul}
          sx={{ width: 150, mx: 1 }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMul(Number(e.target.value))
          }
        />
        :{" "}
      </DivFlexY>
      <DivFlex>
        <Button
          variant="outlined"
          onClick={() => setCountState((prev) => prev * mul)}
          sx={{ mx: 2 }}
        >
          *
        </Button>
        <p>countState value ={countState}</p>
      </DivFlex>
    </>
  );
}

export default MultiState;
