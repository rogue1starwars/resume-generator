"use client";
import saveData from "@/lib/saveData";
import React, { useState } from "react";
import { InputTitle, InputDate, InputDescription } from "@/components/input";
import Image from "next/image";
import { InputType, TemplateType } from "@/lib/types";
import { Input } from "postcss";

export default function Input_section({
  initialData,
  templateData,
}: {
  initialData: { [key: string]: InputType };
  templateData: { [key: string]: TemplateType };
}) {
  const [template, setTemplate] = useState({ ...templateData });
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
          <fieldset key={id}>
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
                    {typeof inputState[id].data[0].date !== "undefined" ? (
                      <InputDate
                        inputState={inputState}
                        setInputState={setInputState}
                        id={id}
                        index={index}
                      />
                    ) : null}
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
          </fieldset>
        );
      })}
      <button>Save</button>
    </form>
  );
}
