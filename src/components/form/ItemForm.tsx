import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";

export type TItemFormProps = {
  onSubmit: (event: { name: string; imglink: string }) => void;
  initialValue: { name?: string; imglink?: string };
};

const Form: React.FC<TItemFormProps> = ({ onSubmit, initialValue }) => {
  const [item, setItem] = useState({
    name: initialValue.name || "",
    imglink: initialValue.imglink || "",
  });
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const renderField = (label: keyof typeof item) => (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        onChange={handleChangeInput}
        type="text"
        name={label.toLowerCase()}
        value={item[label]}
        className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
      />
    </div>
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(item);
    setItem({
      name: "",
      imglink: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto border shadow-md p-20 rounded bg-white"
    >
      {renderField("name")}
      {renderField("imglink")}
      <Button type="submit" className="w-full rounded-full text-xl hover:bg-black hover:text-white">
        Submit
      </Button>
    </form>
  );
};

export default Form;
