import { useParams } from "@remix-run/react";

export const loader = () => {
  return null;
};

const PostId = () => {
  const { id } = useParams();

  return <div>postId is :{id}</div>;
};

export default PostId;
