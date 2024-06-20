import { getEventItem, updateItem } from "@/api/eventItem.api";
import Form from "@/components/form/ItemForm";
import Error from "@/components/ui/error";
import Progress from "@/components/ui/progress";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEventItem = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  
  const {
    data: items,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["events", id],
    queryFn: () => (id ? getEventItem() : undefined),
  });

  const updatePostMutation = useMutation({
    mutationFn: updateItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      navigate("/dashboard/events-item");
    },
  });
  const handleSubmit = (updatedItem: { name: string; imglink: string }) => {
    updatePostMutation.mutate({ id, ...updatedItem });
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
        Update this item data
      </h1>
      <Form onSubmit={handleSubmit} initialValue={items} />
    </div>
  );
};

export default UpdateEventItem;
