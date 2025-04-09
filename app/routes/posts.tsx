import { Outlet } from "@remix-run/react";

const Posts = () => {
  return (
    <div>
      {/* <h1>this is main posts file</h1> */}
      {/* this outlet triggers the nested routes of the posts folder
      if i hit /posts it will hit posts file but when hit posts/newPosts then it will hit the nested posts routes and show the items
      down here after the above <h1> </h1> tag

      i used index file inside posts folder so now this will hit posts/index file
      */}
      <Outlet />
    </div>
  );
};

export default Posts;
