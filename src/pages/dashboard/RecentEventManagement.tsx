import { deleteRecentEvent, getRecentEvent } from "@/api/recentEvent.api";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Error from "@/components/ui/error";
import Progress from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AddRecentEvent from "./AddRecentEvent";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const RecentEventManagement = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    data: items,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recent-events"],
    queryFn: getRecentEvent,
    select: (data) => {
      const items = data.map((item: { _id: any; name: any; manager: any; imglink: any; }) => ({
        id: item._id,
        name: item.name,
        manager: item.manager,
        imglink: item.imglink,
      }));
      return items;
    },
  });

  const deleteRecentEventMutaion = useMutation({
    mutationFn: deleteRecentEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recent-events"] });
    },
  });

  const handleDelete = (id: any) => {
    deleteRecentEventMutaion.mutate(id);
  };

  if (isLoading) {
    return <Progress />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <Container>
      <div className="mt-20 bg-white py-5">
        <h1 className="text-4xl font-extrabold text-center my-10 text-black">
          Here are all recent event
        </h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event Image</TableHead>
              <TableHead>Event Name</TableHead>
              <TableHead>Event Manager</TableHead>
              <TableHead>Update Event</TableHead>
              <TableHead>Delete Event</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item: { id: Key | null | undefined; imglink: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; manager: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
              <TableRow key={item.id}>
                <TableCell>
                  <img className="lg:w-1/4 " src={item.imglink} alt="" />
                </TableCell>
                <TableCell><p className="text-black">{item.name}</p></TableCell>
                <TableCell><p className="text-black">{item.manager}</p></TableCell>
                <TableCell>
                  <Button
                    onClick={() =>
                      navigate(`/dashboard/recent-events/${item.id}`)
                    }
                    className="rounded-full font-extrabold hover:bg-black hover:text-white"
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDelete(item.id)}
                    className="bg-transparent hover:text-red-500 hover:bg-transparent"
                  >
                    <Trash />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <AddRecentEvent />
    </Container>
  );
};

export default RecentEventManagement;
