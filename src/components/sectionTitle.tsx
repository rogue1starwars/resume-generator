import { Sections } from "@/lib/types";

// type Props = {
//   sec: {
//     title: string;
//     description: string;
//   };
// };

type Props = {
  title: string;
  description?: string;
};

export default function SectionTitle({ title, description }: Props) {
  return (
    <div className="my-4">
      <h2 className="font-semibold text-xl">{title}</h2>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
}
