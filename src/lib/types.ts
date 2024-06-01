export type InputType = {
  heading: string;
  hidden: boolean;
  label: Labels;
  add: boolean;
  data: {
    title: string;
    description?: string;
    date?: string;
  }[];
};

/* Create Section type for the sections. Stores label, title, and description for each section 
   The labvel is used to determine which section the input belongs to
*/
export type Sections = {
  label: Labels; // This is the label for the section
  title: string; // This is the title for the section
  description: string; //This is the description for each section
}[];

// Labels type is to determine which section the input belongs to
export type Labels = "basics" | "work" | "education" | "others";

export type InputChunkType = { [key: string]: InputType };

export type TemplateType = {
  templateName: string;
  imageUrl: string;
  selected: boolean;
};

export type TemplateChunkType = { [key: string]: TemplateType };
