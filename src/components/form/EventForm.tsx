import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";

export type TEventFormProps = {
  onSubmit: (event: { name: string; manager: string; imglink: string }) => void;
  initialValue: { name?: string; manager?: string; imglink?: string };
};

const Form: React.FC<TEventFormProps> = ({ onSubmit, initialValue }) => {
  const [event, setEvent] = useState({
    name: initialValue.name || "",
    manager: initialValue.manager || "",
    imglink: initialValue.imglink || "",
  });
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const renderField = (label: keyof typeof event) => (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        onChange={handleChangeInput}
        type="text"
        name={label.toLowerCase()}
        value={event[label]}
        className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
      />
    </div>
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(event);
    setEvent({
      name: "",
      manager: "",
      imglink: "",
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto border shadow-md p-20 rounded bg-white"
    >
      {renderField("name")}
      {renderField("manager")}
      {renderField("imglink")}
      <Button
        type="submit"
        className="w-full rounded-full text-xl hover:bg-black hover:text-white"
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
