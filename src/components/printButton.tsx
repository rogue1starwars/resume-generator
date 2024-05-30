"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { PrintableTemplate } from "./printableTemplateExample";
import { InputChunkType, TemplateChunkType } from "@/lib/types";

interface RequestEvaluationDocumentButtonProps {
  inputData: InputChunkType;
  template: TemplateChunkType;
}

const PrintButton = ({
  inputData,
  template,
}: RequestEvaluationDocumentButtonProps) => {
  console.log(inputData);

  const documentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => documentRef.current,
    documentTitle: `${inputData.name.data[0].title}'s CV`,
    bodyClass: "p-2", // some padding
  });

  return (
    <div>
      <button
        style={{ border: "1px solid black" }}
        onClick={() => {
          handlePrint();
        }}
      >
        download PDF
      </button>
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
    </div>
  );
};

export default PrintButton;
