import { createEventItem } from "@/api/eventItem.api";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const AddEventItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemImage, setItemImage] = useState("");
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: createEventItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const itemData = {
      name: itemName,
      imglink: itemImage,
    };
    await mutateAsync(itemData);
  };
  return (
    <div className="mb-20">
      <hr className="mt-20" />
      <h1 className="text-center font-extrabold text-4xl pt-10">
        Add an Event Item
      </h1>
      <div className="mx-auto px-20">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Item Name
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              id=""
              type="text"
              placeholder="Enter item name"
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Item Image
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              id=""
              type="text"
              placeholder="Enter item image URL"
              onChange={(e) => setItemImage(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button className="rounded-full px-5 font-extrabold hover:bg-black hover:text-white" type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventItem;
