"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { PrintableTemplate } from "./printableTemplateExample";
import { InputChunkType, TemplateChunkType } from "@/lib/types";

interface RequestEvaluationDocumentButtonProps {
  inputData: InputChunkType;
  template: TemplateChunkType;
}

const PrintButton = ({ inputData }: RequestEvaluationDocumentButtonProps) => {
  console.log(inputData);

  const documentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => documentRef.current,
    documentTitle: `${inputData.name.data[0].title}'s CV`,
    bodyClass: "p-2", // some padding
  });

  return (
    <div className="flex justify-end">
      {/* TODO: send input data to appropriate template? */}
      {/* switch (template number) {
        case 1:
          template 1
          break;
        case 2:
          template 2
          break;
          default:
            break;
          } */}
      <PrintableTemplate ref={documentRef} inputData={inputData} />
      <button
        className="text-white font-semibold bg-red-400 hover:bg-red-500 py-4 px-4 rounded-full"
        onClick={() => {
          handlePrint();
        }}
      >
        Download PDF →
      </button>
    </div>
  );
};

export default PrintButton;
