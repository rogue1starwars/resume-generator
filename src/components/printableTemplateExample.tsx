"use client";

import { InputChunkType, TemplateChunkType } from "@/lib/types";
import { forwardRef } from "react";

interface Props {
  inputData: InputChunkType;
  template: TemplateChunkType;
}

const PrintableTemplate = forwardRef<HTMLDivElement, Props>(
  ({ inputData, template }, ref) => {
    return (
      <div className="h-0 overflow-hidden">
        <div ref={ref} className="w-full">
          {/* TODO: define template structure and handle dynamic user data  */}
          <div className="page-break">{JSON.stringify(inputData)}</div>
          <div className="page-break">test1</div>
          <div className="page-break">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            odio ut metus bibendum laoreet. Morbi ligula metus, tempus non
            tincidunt a, bibendum vitae nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Etiam eget
            enim iaculis, venenatis lectus at, ullamcorper neque. Praesent porta
            id nisi at interdum. Ut porta vitae mi sed pharetra. Pellentesque
            congue commodo hendrerit. Nullam placerat fringilla dignissim. Nam
            mi nunc, consequat ut odio vel, molestie rhoncus nisl. Nullam vitae
            molestie quam. Morbi est mi, mattis eget euismod ac, eleifend eu
            tortor. Phasellus dapibus lacus non orci fermentum lacinia. Etiam
            vitae neque pharetra, volutpat nulla id, molestie dolor. Aenean non
            risus venenatis metus commodo aliquam a eget risus. Pellentesque
            accumsan sit amet risus in volutpat.
          </div>
          <br />
          <div className="page-break">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            odio ut metus bibendum laoreet. Morbi ligula metus, tempus non
            tincidunt a, bibendum vitae nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Etiam eget
            enim iaculis, venenatis lectus at, ullamcorper neque. Praesent porta
            id nisi at interdum. Ut porta vitae mi sed pharetra. Pellentesque
            congue commodo hendrerit. Nullam placerat fringilla dignissim. Nam
            mi nunc, consequat ut odio vel, molestie rhoncus nisl. Nullam vitae
            molestie quam. Morbi est mi, mattis eget euismod ac, eleifend eu
            tortor. Phasellus dapibus lacus non orci fermentum lacinia. Etiam
            vitae neque pharetra, volutpat nulla id, molestie dolor. Aenean non
            risus venenatis metus commodo aliquam a eget risus. Pellentesque
            accumsan sit amet risus in volutpat.
          </div>
          <br />
          {/* <div className="page-break"> */}
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            odio ut metus bibendum laoreet. Morbi ligula metus, tempus non
            tincidunt a, bibendum vitae nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Etiam eget
            enim iaculis, venenatis lectus at, ullamcorper neque. Praesent porta
            id nisi at interdum. Ut porta vitae mi sed pharetra. Pellentesque
            congue commodo hendrerit. Nullam placerat fringilla dignissim. Nam
            mi nunc, consequat ut odio vel, molestie rhoncus nisl. Nullam vitae
            molestie quam. Morbi est mi, mattis eget euismod ac, eleifend eu
            tortor. Phasellus dapibus lacus non orci fermentum lacinia. Etiam
            vitae neque pharetra, volutpat nulla id, molestie dolor. Aenean non
            risus venenatis metus commodo aliquam a eget risus. Pellentesque
            accumsan sit amet risus in volutpat.
          </div>
          <br />
          <div className="page-break">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            odio ut metus bibendum laoreet. Morbi ligula metus, tempus non
            tincidunt a, bibendum vitae nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Etiam eget
            enim iaculis, venenatis lectus at, ullamcorper neque. Praesent porta
            id nisi at interdum. Ut porta vitae mi sed pharetra. Pellentesque
            congue commodo hendrerit. Nullam placerat fringilla dignissim. Nam
            mi nunc, consequat ut odio vel, molestie rhoncus nisl. Nullam vitae
            molestie quam. Morbi est mi, mattis eget euismod ac, eleifend eu
            tortor. Phasellus dapibus lacus non orci fermentum lacinia. Etiam
            vitae neque pharetra, volutpat nulla id, molestie dolor. Aenean non
            risus venenatis metus commodo aliquam a eget risus. Pellentesque
            accumsan sit amet risus in volutpat.
          </div>
        </div>
      </div>
    );
  }
);
PrintableTemplate.displayName = "PrintableTemplate";

export { PrintableTemplate };
