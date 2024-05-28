import { InputChunkType, Labels } from "@/lib/types";

type Props = {
  inputData: InputChunkType;
  label: Labels;
  title?: string;
};

export default function TemplateSection({ inputData, label, title }: Props) {
  return (
    <section className="border-t border-stone-400 py-1 my-1">
      {title && <h2 className="text-amber-950 font-semibold">{title}</h2>}
      {Object.keys(inputData).map((key) => {
        if (inputData[key].label == label) {
          if (inputData[key].data[0].title == "") {
            return;
          }
          return (
            <section key={key}>
              {inputData[key].data[0].description != "" ? (
                <>
                  <h2 className="font-semibold text-amber-950">
                    {inputData[key].heading}
                  </h2>
                  {inputData[key].data.map((work, index) => {
                    return (
                      <div key={index} className="py-1">
                        <p className="text-amber-950">
                          <span>{work.title}</span>
                          {work.date && (
                            <span className="text-right float-right">
                              {work.date}
                            </span>
                          )}
                        </p>
                        <p>{work.description}</p>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <span className="font-semibold text-amber-950">
                    {inputData[key].heading}
                  </span>
                  <span>{": "}</span>
                  {inputData[key].data.map((work, index) => {
                    return (
                      <div key={work.title + index}>
                        <span className="text-amber-950">{work.title}</span>
                        {index < inputData[key].data.length - 1 && (
                          <span>{", "}</span>
                        )}
                      </div>
                    );
                  })}
                </>
              )}
              {/* 
                  {inputData[key].data.map((work, index) => {
                    return (
                      <div key={index} className="py-1">
                        <p className="text-amber-950">
                          <span>{work.title}</span>
                          {work.date && (
                            <span className="text-right float-right">
                              {work.date}
                            </span>
                          )}
                        </p>
                        <p>{work.description}</p>
                      </div>
                    );
                  })} */}
            </section>
          );
        }
      })}
    </section>
  );
}
