"use client";
import saveData from "@/lib/createItem";
import { fetchData, fetchTemplateData } from "@/lib/data";
import React, { useState } from "react";
import { InputTitle, InputDescription } from "@/components/input";
import Image from "next/image";
export default function Page() {
  const initialData = fetchData();
  const initialTemplate = fetchTemplateData();
  const [template, setTemplate] = useState({ ...initialTemplate });
  //   const [state, dispatch] = useFormState(createItem, initialState);
  const [inputState, setInputState] = useState({ ...initialData });

  return (
    <form action={saveData}>
      <label>Templates</label>
      {Object.keys(template).map((id, index) => {
        return (
          <div key={template[id].templateName}>
            <label className="text-lg font-semibold">
              {template[id].templateName}
            </label>
            <Image
              src={template[id].imageUrl}
              alt={template[id].templateName}
              width="100"
              height="100"
            />
            <input
              type="radio"
              name="templates"
              value={template[id].templateName}
            />
          </div>
        );
      })}
      {Object.keys(inputState).map((id) => {
        return (
          <div key={id}>
            <label className="text-lg font-semibold">
              {inputState[id].heading}
            </label>
            <div>
              {inputState[id].data.map((data, index) => {
                return (
                  <div key={index}>
                    <InputTitle
                      inputState={inputState}
                      setInputState={setInputState}
                      id={id}
                      index={index}
                    />
                    {typeof inputState[id].data[0].description !==
                    "undefined" ? (
                      <InputDescription
                        inputState={inputState}
                        setInputState={setInputState}
                        id={id}
                        index={index}
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <button>Save</button>
    </form>
  );
}
