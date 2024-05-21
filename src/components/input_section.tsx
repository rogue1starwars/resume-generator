/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { InputTitle, InputDate, InputDescription } from "@/components/input";
import Image from "next/image";
import { InputChunkType, Sections, TemplateChunkType } from "@/lib/types";
import { fetchData, fetchSectionData, fetchTemplateData } from "@/lib/data";

const LS_INPUT_DATA_KEY = "resume-generator-input-data-key";
const LS_TEMPLATE_KEY = "resume-generator-template-key";

export default function Input_section({}: {}) {
  const [template, setTemplate] = useState<TemplateChunkType>({});
  const [sections, setSections] = useState<Sections>(fetchSectionData());
  const [inputState, setInputState] = useState<InputChunkType>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTemplate({ ...fetchTemplateData(LS_TEMPLATE_KEY) });
    setInputState({
      ...fetchData(LS_INPUT_DATA_KEY),
    });
    setSections(fetchSectionData());

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(LS_INPUT_DATA_KEY, JSON.stringify(inputState));
    console.log("LocalStorage Update: input state");
  }, [inputState]);
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(LS_TEMPLATE_KEY, JSON.stringify(template));
    console.log("LocalStorage Update: template");
  }, [template]);

  return (
    // <form action={saveData}>
    <>
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
              onChange={(e) => {
                const newTemplateState: TemplateChunkType = {
                  ...template,
                };
                for (let tp in newTemplateState) {
                  newTemplateState[tp].selected = false;
                }
                newTemplateState[id].selected = e.target.checked;
                setTemplate(newTemplateState);
              }}
              checked={template[id].selected}
            />
          </div>
        );
      })}
      {/* {Object.keys(inputState).map((id) => {
        // console.log(id);
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
      })} */}
      {sections.map((section) => {
        return (
          <div>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            {Object.keys(inputState).map((id) => {
              if (inputState[id].label === section.label) {
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
                            {typeof inputState[id].data[0].date !==
                            "undefined" ? (
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
              }
            })}
          </div>
        );
      })}
      {/* <button onClick={() => saveData(userID, inputState)}>Save</button> */}
      {/* <input type="submit" /> */}
    </>
    // </form>
  );
}
