import React from "react";
import { useRecoilState } from "recoil";
import { UserAtom } from "../../../recoil/atom/UserAtom";
import { TextField } from "@mui/material";
import { DivFlexX } from "../../../styles/flex";

function Page2() {
  const [userAtom, setUserAtom] = useRecoilState(UserAtom);

  return (
    <>
      <div>
        userAtom :-{" "}
        <div>
          {`Hello, ${userAtom.firstName} ${userAtom.lastName}. Your mobile number is 
          ${userAtom.mobileNumber}`}
        </div>
      </div>
      <DivFlexX p={3} gap={2}>
        <TextField
          label="First Name"
          value={userAtom.firstName}
          onChange={(e) =>
            setUserAtom({ ...userAtom, firstName: e.target.value })
          }
        />
        <TextField
          label="Last Name"
          value={userAtom.lastName}
          onChange={(e) =>
            setUserAtom({ ...userAtom, lastName: e.target.value })
          }
        />
        <TextField
          label="Mobile no."
          value={userAtom.mobileNumber}
          onChange={(e) =>
            setUserAtom({ ...userAtom, mobileNumber: e.target.value })
          }
        />
      </DivFlexX>
    </>
  );
}

export default Page2;
