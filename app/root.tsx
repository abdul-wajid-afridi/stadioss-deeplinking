import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>fix user phones</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="apple-itunes-app"
          content="app-id=BHB9D2VU5J, app-argument=https://stadioss-deeplinking-plum.vercel.app/"
        />

        {/* Android Smart App Banner */}
        <link
          rel="alternate"
          href="https://stadioss-deeplinking-plum.vercel.app/"
          // href=" themasjidappv2://"

          // href="android-app://YOUR_PACKAGE_NAME/YOUR_CUSTOM_URL_SCHEME"
        />

        {/* <meta name="apple-itunes-app" content="app-id=BHB9D2VU5J" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

// import { Link, Meta, Outlet } from "@remix-run/react";
// import type { LinksFunction, MetaFunction } from "@remix-run/node";

// import "./tailwind.css";
// import { ReactNode } from "react";

// export const links: LinksFunction = () => [
//   { rel: "preconnect", href: "https://fonts.googleapis.com" },
//   {
//     rel: "preconnect",
//     href: "https://fonts.gstatic.com",
//     crossOrigin: "anonymous",
//   },
//   {
//     rel: "stylesheet",
//     href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
//   },
// ];

// export const meta: MetaFunction = () => {
//   return [
//     { title: "home page for user" },
//     {
//       name: "description",
//       content: "repair, sell, phones repair,  fix phones, fix mobiles",
//     },
//     { name: "viewport", content: "width=device-width, initial-scale=1" },
//   ];
// };

// function Layout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         <Meta />
//       </head>
//       <div className="flex h-screen items-center justify-center">
//         <div className="flex justify-center items-center gap-10">
//           <Link to="/posts">Posts</Link>
//           <Link to="/users">Users</Link>
//           <p>this is main home page</p>
//           {children}
//         </div>
//       </div>
//     </html>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Layout>
//         <Outlet />
//       </Layout>
//     </div>
//   );
// }
