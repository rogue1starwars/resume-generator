import { nanoid } from "nanoid";
import { InputChunkType, TemplateType } from "./types";

import { createClient } from "@supabase/supabase-js";

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

const dummyData: InputChunkType = {
  name: {
    heading: "Name",
    hidden: false,
    data: [
      {
        title: "",
      },
    ],
  },
  address: {
    heading: "Address",
    hidden: false,

    data: [{ title: "" }],
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
        date: "",
      },
    ],
  },
  education: {
    heading: "Education",
    hidden: false,

    data: [{ title: "", description: "", date: "" }],
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

export async function fetchData(userID: string): Promise<InputChunkType> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from("user_data")
    .select("data")
    .eq("user_id", userID)
    // neq nanoid for forcing supabase to fetch instead of using cache
    .neq("user_id", nanoid())
    .single();

  console.log(data, error);
  console.log("query user_id:", userID);
  // console.log(data!.data.name, error);

  // for (let item in data[0].data) {
  // console.log(data[0].data[item]);
  // }

  if (data == null) {
    console.log("Dummy data returned!");
    return dummyData;
  } else return data.data;
}

export function fetchTemplateData() {
  return dummyTemplateData;
}
