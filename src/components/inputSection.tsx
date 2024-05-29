/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { InputTitle, InputDate, InputDescription } from "@/components/input";
import Image from "next/image";
import { InputChunkType, Sections, TemplateChunkType } from "@/lib/types";
import { fetchData, fetchSectionData, fetchTemplateData } from "@/lib/data";
import PrintButton from "./printButton";
import Background from "./background";
import SectionTitle from "./sectionTitle";
import { InputType } from "zlib";
import { DeleteButton, DeleteButtonSm } from "./deleteButton";
import AddButton from "./addButton";

const LS_INPUT_DATA_KEY = "resume-generator-input-data-key";
const LS_TEMPLATE_KEY = "resume-generator-template-key";

export default function InputSection({}: {}) {
  const [template, setTemplate] = useState<TemplateChunkType>({});
  const [sections, setSections] = useState<Sections>(fetchSectionData()); // Added section state to store section data. (There is no need to change the state of the section data, so setSections function is not used. )
  const [inputState, setInputState] = useState<InputChunkType>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTemplate({ ...fetchTemplateData(LS_TEMPLATE_KEY) });
    setInputState({
      ...fetchData(LS_INPUT_DATA_KEY),
    });

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
      <SectionTitle title="Templates" />
      <div className="flex justify-around">
        {Object.keys(template).map((id, index) => {
          return (
            <div key={template[id].templateName} className="flex flex-col gap-2">
              <label className="text-sm text-gray-700 font-semibold mx-auto text-center">
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
      </div>

      {sections.map((sec) => {
        return (
          <section key={sec.label} className="mb-12">
            <SectionTitle title={sec.title} description={sec.description} />

            {Object.keys(inputState).map((id) => {
              if (inputState[id].label === sec.label) {
                return (
                  <fieldset key={id} className="my-4">
                    <label className="text-sm text-gray-700 mb-2">
                      {inputState[id].heading}
                    </label>
                    <div className="my-2">
                      {inputState[id].data.map((data, index) => {
                        return (
                          <div
                            key={index}
                            className="grid grid-cols-10 gap-2 sm:mb-6 mb-10"
                          >
                            {inputState[id].data.length > 1 && (
                              <DeleteButtonSm
                                inputState={inputState}
                                setInputState={setInputState}
                                id={id}
                                index={index}
                              />
                            )}
                            <InputTitle
                              inputState={inputState}
                              setInputState={setInputState}
                              id={id}
                              index={index}
                            />

                            {typeof inputState[id].data[0].date !==
                              "undefined" && (
                              <InputDate
                                inputState={inputState}
                                setInputState={setInputState}
                                id={id}
                                index={index}
                              />
                            )}
                            {inputState[id].data.length > 1 && (
                              <DeleteButton
                                inputState={inputState}
                                setInputState={setInputState}
                                id={id}
                                index={index}
                              />
                            )}
                            {typeof inputState[id].data[0].description !==
                              "undefined" && (
                              <InputDescription
                                inputState={inputState}
                                setInputState={setInputState}
                                id={id}
                                index={index}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                    {inputState[id].add && (
                      <AddButton
                        inputState={inputState}
                        setInputState={setInputState}
                        id={id}
                      />
                    )}
                  </fieldset>
                );
              }
            })}
          </section>
        );
      })}
      {/* <button onClick={() => saveData(userID, inputState)}>Save</button> */}
      {/* <input type="submit" /> */}
      {isLoaded ? (
        <PrintButton inputData={inputState} template={template} />
      ) : (
        <div />
      )}
    </>
    // </form>
  );
}
