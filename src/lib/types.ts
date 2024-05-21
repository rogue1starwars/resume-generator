export type InputType = {
  heading: string;
  hidden: boolean;
  label: "basics" | "work" | "education" | "others";
  data: {
    title: string;
    description?: string;
    date?: string;
  }[];
};

export type InputChunkType = { [key: string]: InputType };

export type TemplateType = {
  templateName: string;
  imageUrl: string;
  selected: boolean;
};

export type TemplateChunkType = { [key: string]: TemplateType };
