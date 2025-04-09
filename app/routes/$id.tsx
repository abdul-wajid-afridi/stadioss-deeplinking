import { useParams } from "@remix-run/react";

const Id = () => {
  const { id } = useParams();
  return <div>Id:{id}</div>;
};

export default Id;
