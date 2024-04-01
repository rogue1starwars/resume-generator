"use client";

import { InputType, TemplateType } from "@/lib/types";
import { useState } from "react";
import { InputDescription, InputTitle } from "./input";
import Image from "next/image";

export default function Input_section({
  inputData,
  templateData,
}: {
  inputData: { [key: string]: InputType };
  templateData: { [key: string]: TemplateType };
}) {
  const [template, setTemplate] = useState({ ...templateData });
  const [selectedTemplate, setSelectedTemplate] = useState("Template 1");
  const [inputState, setInputState] = useState({ ...inputData });

  const handleTemplateOnchange = (e) => {
    setSelectedTemplate(e.target.value);
  };
  return (
    <>
      <div className="text-lg font-semibold">Template</div>
      {Object.keys(template).map((data, index) => {
        return (
          <>
            <div className="text-lg font-semibold">
              {template[data].templateName}
            </div>
            <Image
              src={template[data].imageUrl}
              alt={template[data].templateName}
              width="100"
              height="100"
            />
            <input
              type="radio"
              name="templates"
              value={template[data].templateName}
              checked={template[data].templateName === selectedTemplate}
              onChange={handleTemplateOnchange}
            ></input>
          </>
        );
      })}
      <input></input>
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
