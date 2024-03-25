"use client";

import { InputType } from "@/lib/types";
import { useState } from "react";
import { InputDescription, InputTitle } from "./input";

export default function Input_section({
  inputData,
}: {
  inputData: { [key: string]: InputType };
}) {
  const [inputState, setInputState] = useState({ ...inputData });
  return (
    <>
      {Object.keys(inputState).map((id) => {
        return (
          <>
            <div className="text-lg font-semibold">
              {inputState[id].heading}
            </div>
            {inputState[id].data.map((data, index) => {
              return (
                <>
                  <InputTitle
                    inputState={inputState}
                    setInputState={setInputState}
                    id={id}
                    index={index}
                  />
                  {typeof inputState[id].data[0].description !== "undefined" ? (
                    <InputDescription
                      inputState={inputState}
                      setInputState={setInputState}
                      id={id}
                      index={index}
                    />
                  ) : null}
                </>
              );
            })}
          </>
        );
      })}
      <div></div>
    </>
  );
}
