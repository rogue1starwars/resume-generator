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
      className="py-2 px-3 rounded w-[60%]"
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
      className="py-2 px-3 rounded  ml-4 w-[30%]"
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
    <>
      <br />
      <textarea
        placeholder="description"
        className="py-2 px-3 rounded w-full mt-2 "
        
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
      <br />
      <button
        type="button"
        onClick={() => {
          const newInputState: { [key: string]: InputType } = {
            ...inputState,
          };
          newInputState[id].data.push({
            title: "",
            description: "",
          });
          setInputState(newInputState);
        }}
        className="text-2xl"
      >
        +
      </button>
      <br />
    </>
  );
}
