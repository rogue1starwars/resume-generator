export type InputType = {
  heading: string;
  hidden: boolean;
  data: {
    title: string;
    description?: string;
  }[];
};

export type TemplateType = {
  templateName: string;
  imageUrl: string;
};
