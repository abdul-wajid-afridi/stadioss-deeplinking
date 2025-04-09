import { useParams } from "@remix-run/react";

const UserId = () => {
  const { id } = useParams();

  return <div>userId:{id}</div>;
};

export default UserId;
