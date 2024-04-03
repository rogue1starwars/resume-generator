import { InputType } from "@/lib/types";

export function InputTitle({
  inputState,
  setInputState,
  id,
  index,
}: {
  inputState: { [key: string]: InputType };
  setInputState: React.Dispatch<
    React.SetStateAction<{ [key: string]: InputType }>
  >;
  id: string;
  index: number;
}) {
  return (
    <input
      placeholder="title"
      type={"text"}
      name={id+"Title"+index}
      value={inputState[id].data[index].title}
      onChange={(e) => {
        const newInputState: { [key: string]: InputType } = {
          ...inputState,
        };
        newInputState[id].data[index].title = e.target.value;
        setInputState(newInputState);
        console.log(inputState[id].data[index].title);
      }}
    />
  );
}

export function InputDescription({
  inputState,
  setInputState,
  id,
  index,
}: {
  inputState: { [key: string]: InputType };
  setInputState: React.Dispatch<
    React.SetStateAction<{ [key: string]: InputType }>
  >;
  id: string;
  index: number;
}) {
  return (
    <>
      <br />
      <input
        placeholder="description"
        type="text"
        value={inputState[id].data[index].description}
        name={id+"Description"+index}
        onChange={(e) => {
          const newInputState: { [key: string]: InputType } = {
            ...inputState,
          };
          newInputState[id].data[index].description = e.target.value;
          setInputState(newInputState);
          console.log(inputState[id].data[index].description);
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
