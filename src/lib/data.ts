import { InputType } from "./types";

const dummyData = {
  name: {
    heading: "Name",
    hidden: false,
    data: [
      {
        title: "",
      },
    ],
  },
  id: {
    heading: "Adress",
    hidden: false,

    data: [{ title: "Adress" }],
  },
  phone: {
    heading: "Phone Number",
    hidden: false,

    data: [
      {
        title: "",
      },
    ],
  },
  linkedin: {
    heading: "LinkedIn",
    hidden: false,

    data: [
      {
        title: "",
      },
    ],
  },
  facebook: {
    heading: "Facebook",
    hidden: false,

    data: [
      {
        title: "",
      },
    ],
  },
  WorkExperience: {
    heading: "Work Experience",
    hidden: false,

    data: [
      {
        title: "",
        description: "",
      },
    ],
  },
  education: {
    heading: "Education",
    hidden: false,

    data: [{ title: "", description: "" }],
  },
  skills: {
    heading: "Skills",
    hidden: false,

    data: [{ title: "", description: "" }],
  },
  languages: {
    heading: "Languages",
    hidden: false,

    data: [{ title: "", description: "" }],
  },
  nationality: {
    heading: "Nationality",
    hidden: false,

    data: [{ title: "", description: "" }],
  },
  interests: {
    heading: "Interests",
    hidden: false,

    data: [{ title: "", description: "" }],
  },
  certificates: {
    heading: "Certificates",
    hidden: false,

    data: [{ title: "", description: "" }],
  },
  awards: {
    heading: "Awards",
    hidden: false,

    data: [{ title: "", description: "" }],
  },
};

export function fetchData() {
  return dummyData;
}
