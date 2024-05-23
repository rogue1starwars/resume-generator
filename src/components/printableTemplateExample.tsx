"use client";

import { InputChunkType, TemplateChunkType } from "@/lib/types";
import { forwardRef } from "react";
import TemplateSection from "./templateSection";

interface Props {
  inputData: InputChunkType;
}

const PrintableTemplate = forwardRef<HTMLDivElement, Props>(
  ({ inputData }, ref) => {
    return (
      <div className="h-0 overflow-hidden ">
        <div ref={ref} className="w-full font-serif">
          {/* TODO: define template structure and handle dynamic user data  */}
          {/* <div className="page-break">{JSON.stringify(inputData)}</div> */}
          {/* <div className="page-break">test1</div> */}

          {/*Basic information */}
          <section className="py-3 text-center">
            <h1 className="text-3xl my-2 text-amber-950">
              {inputData.name.data[0].title}
            </h1>

            {inputData.nationality.data[0].title != "" && (
              <>
                <span>Nationality: </span>
                {inputData.nationality.data.map((countryName) => {
                  return <span>{countryName.title}</span>;
                })}
                <br />
              </>
            )}
            <span>{inputData.address.data[0].title}</span>
            <span>{" / "}</span>
            <span>{inputData.phone.data[0].title}</span>
            <span>{" / "}</span>
            <span>{inputData.email.data[0].title}</span>
            <br />

            {inputData.linkedin.data[0].title != "" && (
              <>
                <span>LinkedIn: </span>
                <span>{inputData.linkedin.data[0].title}</span>
                {inputData.facebook.data[0].title != "" && (
                  <>
                    <span>{" / "}</span>
                  </>
                )}
              </>
            )}
            {inputData.facebook.data[0].title != "" && (
              <>
                <span>Facebook: </span>
                <span>{inputData.facebook.data[0].title}</span>
              </>
            )}
          </section>
          <TemplateSection inputData={inputData} label="work" />
          <TemplateSection inputData={inputData} label="education" />

          <TemplateSection
            inputData={inputData}
            label="others"
            title="Additional Information"
          />
        </div>
      </div>
    );
  }
);
PrintableTemplate.displayName = "PrintableTemplate";

export { PrintableTemplate };
