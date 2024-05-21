export type InputType = {
  heading: string;
  hidden: boolean;
  label: Labels;
  data: {
    title: string;
    description?: string;
    date?: string;
  }[];
};

export type Sections = {
  label: Labels; // This is the label for the section
  title: string; // This is the title for the section
  description: string; //This is the description for each section
}[];

export type Labels = "basics" | "work" | "education" | "others";

export type InputChunkType = { [key: string]: InputType };

export type TemplateType = {
  templateName: string;
  imageUrl: string;
  selected: boolean;
};

export type TemplateChunkType = { [key: string]: TemplateType };
