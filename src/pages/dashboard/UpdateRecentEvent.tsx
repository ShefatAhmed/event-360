import { getRecentEvent, updateEvent } from "@/api/recentEvent.api";
import Form from "@/components/form/EventForm";
import Error from "@/components/ui/error";
import Progress from "@/components/ui/progress";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const UpdateRecentEvent = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: items,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recent-events", id],
    queryFn: () => getRecentEvent(),
  });

  const updatePostMutation = useMutation({
    mutationFn: updateEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recent-events"] });
      navigate("/dashboard/recent-events");
    },
  });
  const handleSubmit = (updatedEvent: { name: string; imglink: string }) => {
    updatePostMutation.mutate({ id, ...updatedEvent });
  };

  if (isLoading) {
    return <Progress />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <div className="flex items-center justify-center min-h-screen  flex-col">
    <h1 className="text-center items-center mb-8 text-4xl font-extrabold">
      Update this event data
    </h1>
    <Form onSubmit={handleSubmit} initialValue={items} />
  </div>
  );
};

export default UpdateRecentEvent;
