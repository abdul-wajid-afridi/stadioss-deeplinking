// import type { MetaFunction } from "@remix-run/node";
// import { Link, Outlet } from "@remix-run/react";
// import { ReactNode } from "react";

// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

// function Layout({ children }: { children: ReactNode }) {
//   return (
//     <div className="flex h-screen items-center justify-center">
//       <div className="flex justify-center items-center gap-10">
//         <Link to="/posts">Posts</Link>
//         <Link to="/users">Users</Link>
//         <p>this is main home page</p>
//         {children}
//       </div>
//     </div>
//   );
// }

// export default function Index() {
//   return (
//     <div>
//       <Layout>
//         <Outlet />
//       </Layout>
//     </div>
//   );
// }

const HomeMainPage = () => {
  return <div>HomeMainPage manifest</div>;
};

export default HomeMainPage;
