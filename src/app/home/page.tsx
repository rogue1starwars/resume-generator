import Title from "@/components/title";
import { fetchData, fetchTemplateData } from "@/lib/data";
import Image from "next/image";
import Input_section from "@/components/input_section";

export default function Home() {
  const initialData = fetchData();
  const templateData = fetchTemplateData();
  return (
    <>
      <Title title="Resume Generator" />
      <Input_section initialData={initialData} templateData={templateData} />;
    </>
  );
}