/* eslint-disable @typescript-eslint/no-explicit-any */
export const createEventItem = async (data: any) => {
  return await fetch("https://event360-server-psi.vercel.app/events-items", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const getEventItem = async () => {
  return await fetch(
    "https://event360-server-psi.vercel.app/events-items"
  ).then((res) => res.json());
};

export const deleteItem = async (id: any) => {
  const response = await fetch(
    `https://event360-server-psi.vercel.app/events-items/${id}`,
    {
      method: "DELETE",
    }
  );
  return response;
};

export const updateItem = async (updatedItem: { id: any; }) => {
  const response = await fetch(
    `https://event360-server-psi.vercel.app/events-items/${updatedItem.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    }
  );
  return response.json();
};
