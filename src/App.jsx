import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import './App.css'
import RootLayout from "./layouts/RootLayout";
import PostList, { postLoader } from "./pages/PostList";
import NewPost, { postAction } from "./pages/NewPost";
import PostErrorPage from "./pages/PostErrorPage";
// import Home from './pages/Home'

function App() {
  //jsx way of implementing your route
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
       {/* <Route index element={<Home />}/> */}

        <Route path="/" element={<PostList />} loader={postLoader} errorElement={<PostErrorPage />}>
          <Route
            path="/create-post"
            element={<NewPost />}
            action={postAction}
          />


        </Route>
      </Route>
    )
  );

  //plain object way

  // const router = createBrowserRouter([
  //   {
  //     path: "/", element: <RootLayout />,

  //     children: [
  //       {
  //         path: "/",
  //         element: <PostList />,

  //         children: [

  //           {
  //             path: '/create-post',
  //             element: <NewPost />,
  //           }
  //         ]
  //       },

  //     ]
  //   }
  // ])

  return <RouterProvider router={router} />;
}

export default App;
