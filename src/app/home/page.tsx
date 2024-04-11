import Title from "@/components/title";
import { fetchData, fetchTemplateData } from "@/lib/data";
import Image from "next/image";
import Input_section from "@/components/input_section";

// const USER_ID: string = "user_id_example";
// const USER_ID: string = "user_id_example2";
const USER_ID: string = "user_id_example3";

export default async function Home() {
  const initialData = await fetchData(USER_ID);
  const templateData = fetchTemplateData();
  return (
    <>
      <Title title="Resume Generator" />
      <Input_section
        initialData={initialData}
        templateData={templateData}
        userID={USER_ID}
      />
    </>
  );
}
