import React from "react";

import { ReactComponent as Lizard } from "../icons/icon-lizard.svg";

const LizardResult = () => {
  return (
    <div>
        <button className=" sm-w-28 md-32 sm:h-28 md:h-32 aspect-square rounded-full bg-blue flex justify-center items-center op-shadow">
          <div className="btn w-3/4 h-auto aspect-square rounded-full flex justify-center items-center bg-white in-shdw">
            <Lizard />
          </div>
        </button>
    </div>
  );
};

export default LizardResult;