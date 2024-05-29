import { InputType } from "@/lib/types";

type Props = {
  inputState: { [key: string]: InputType };
  setInputState: React.Dispatch<
    React.SetStateAction<{ [key: string]: InputType }>
  >;
  id: string;
  index: number;
};

export function InputTitle({ inputState, setInputState, id, index }: Props) {
  return (
    <input
      placeholder="title"
      className="py-2 px-3 rounded sm:col-span-6 col-span-10"
      type={"text"}
      name={id + "Title" + index}
      value={inputState[id].data[index].title}
      onChange={(e) => {
        const newInputState: { [key: string]: InputType } = {
          ...inputState,
        };
        newInputState[id].data[index].title = e.target.value;
        setInputState(newInputState);
      }}
    />
  );
}

export function InputDate({ inputState, setInputState, id, index }: Props) {
  return (
    <input
      placeholder="date"
      className="py-2 px-3 rounded sm:col-span-3 col-span-10"
      type="text"
      name={id + "Date" + index}
      onChange={(e) => {
        const newInputState: { [key: string]: InputType } = { ...inputState };
        newInputState[id].data[index].date = e.target.value;
        setInputState(newInputState);
      }}
    />
  );
}

export function InputDescription({
  inputState,
  setInputState,
  id,
  index,
}: Props) {
  return (
    <textarea
      placeholder="description"
      className="py-2 px-3 rounded w-full mt-2 col-span-10"
      value={inputState[id].data[index].description}
      name={id + "Description" + index}
      onChange={(e) => {
        const newInputState: { [key: string]: InputType } = {
          ...inputState,
        };
        newInputState[id].data[index].description = e.target.value;
        setInputState(newInputState);
      }}
    />
  );
}
