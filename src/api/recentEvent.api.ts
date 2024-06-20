export const getRecentEvent = async () => {
  return await fetch(
    "https://event360-server-psi.vercel.app/recent-events"
  ).then((res) => res.json());
};

export const deleteRecentEvent = async (id: any) => {
  const response = await fetch(
    `https://event360-server-psi.vercel.app/recent-events/${id}`,
    {
      method: "DELETE",
    }
  );
  return response;
};

export const createRecentEvent = async (data: any) => {
  return await fetch("https://event360-server-psi.vercel.app/recent-events", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateEvent = async (updatedEvent: { id: any; }) => {
  const response = await fetch(
    `https://event360-server-psi.vercel.app/recent-events/${updatedEvent.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEvent),
    }
  );
  return response.json();
};
