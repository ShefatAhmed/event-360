import { createRecentEvent } from "@/api/recentEvent.api";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const AddRecentEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventManger, setEventManger] = useState("");
  const [eventImage, setEeventImage] = useState("");
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: createRecentEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recent-events"] });
    },
  });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const eventData = {
      name: eventName,
      manager: eventManger,
      imglink: eventImage,
    };
    await mutateAsync(eventData);
  };
  return (
    <div className="mb-20">
      <hr className="mt-20" />
      <h1 className="text-center font-extrabold text-4xl pt-10">
        Add an recent event
      </h1>
      <div className="mx-auto px-20 mt-5">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Event Name
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              id=""
              type="text"
              placeholder="Enter event name"
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Manger Name
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              id=""
              type="text"
              placeholder="Enter event name"
              onChange={(e) => setEventManger(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Event Image
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              id=""
              type="text"
              placeholder="Enter event image URL"
              onChange={(e) => setEeventImage(e.target.value)}
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

export default AddRecentEvent;
