import { InputChunkType, Sections, TemplateType } from "./types";

const dummyTemplateData: { [key: string]: TemplateType } = {
  1: {
    templateName: "Template 1",
    imageUrl: "/resume1.jpg",
    selected: false,
  },
  2: {
    templateName: "Template 2",
    imageUrl: "/resume2.jpg",
    selected: false,
  },
  3: {
    templateName: "Template 3",
    imageUrl: "/resume3.jpg",
    selected: false,
  },
};

const dummySectionData: Sections = [
  {
    label: "basics",
    title: "Basics",
    description: "Input your basic information.",
  },
  {
    label: "work",
    title: "Work Experience",
    description: "Input your work experience information",
  },
  {
    label: "education",
    title: "Education",
    description: "Input your education information",
  },
  {
    label: "others",
    title: "Others",
    description: "Input other information about yourself",
  },
];

const dummyData: InputChunkType = {
  name: {
    heading: "Name",
    hidden: false,
    label: "basics",
    data: [
      {
        title: "",
      },
    ],
  },
  address: {
    heading: "Address",
    hidden: false,
    label: "basics",
    data: [{ title: "" }],
  },
  phone: {
    heading: "Phone Number",
    hidden: false,
    label: "basics",
    data: [
      {
        title: "",
      },
    ],
  },
  linkedin: {
    heading: "LinkedIn",
    hidden: false,
    label: "basics",
    data: [
      {
        title: "",
      },
    ],
  },
  facebook: {
    heading: "Facebook",
    hidden: false,
    label: "basics",
    data: [
      {
        title: "",
      },
    ],
  },
  WorkExperience: {
    heading: "Work Experience",
    hidden: false,
    label: "work",
    data: [
      {
        title: "",
        description: "",
        date: "",
      },
    ],
  },
  education: {
    heading: "Education",
    hidden: false,
    label: "education",
    data: [{ title: "", description: "", date: "" }],
  },
  skills: {
    heading: "Skills",
    hidden: false,
    label: "others",
    data: [{ title: "", description: "" }],
  },
  languages: {
    heading: "Languages",
    hidden: false,
    label: "others",
    data: [{ title: "", description: "" }],
  },
  nationality: {
    heading: "Nationality",
    hidden: false,
    label: "others",
    data: [{ title: "", description: "" }],
  },
  interests: {
    heading: "Interests",
    hidden: false,
    label: "others",
    data: [{ title: "", description: "" }],
  },
  certificates: {
    heading: "Certificates",
    hidden: false,
    label: "others",
    data: [{ title: "", description: "" }],
  },
  awards: {
    heading: "Awards",
    hidden: false,
    label: "others",
    data: [{ title: "", description: "" }],
  },
};

export function fetchData(lsKey: string): InputChunkType {
  const cachedData = localStorage?.getItem(lsKey);
  const initialData = cachedData ? JSON.parse(cachedData) : dummyData;
  console.log(cachedData);
  return initialData;
}

export function fetchSectionData(): Sections {
  return dummySectionData;
}

export function fetchTemplateData(lsKey: string): {
  [key: string]: TemplateType;
} {
  const cachedData = localStorage.getItem(lsKey);
  const templateData = cachedData ? JSON.parse(cachedData) : dummyTemplateData;
  return templateData;
}

// deprecated.
// export async function fetchData(userID: string): Promise<InputChunkType> {
//   const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
//   );

//   const { data, error } = await supabase
//     .from("user_data")
//     .select("data")
//     .eq("user_id", userID)
//     // neq nanoid for forcing supabase to fetch instead of using cache
//     .neq("user_id", nanoid())
//     .single();

//   console.log(data, error);
//   console.log("query user_id:", userID);
//   // console.log(data!.data.name, error);

//   // for (let item in data[0].data) {
//   // console.log(data[0].data[item]);
//   // }

//   if (data == null) {
//     console.log("Dummy data returned!");
//     return dummyData;
//   } else return data.data;
// }
