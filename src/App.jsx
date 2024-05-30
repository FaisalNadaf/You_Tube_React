import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchVedio from "./components/WatchVedio";
import VedioCointainer from "./components/VedioCointainer";
import SearchVideosCointaien from "./components/SearchVideosCointaien";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRoute} />
      </Provider>
    </>
  );
}

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VedioCointainer />,
      },
      {
        path: "search",
        element: <SearchVideosCointaien />,
      },
      {
        path: "watch/:id",
        element: <WatchVedio />,
      },
    ],
  },
]);

export default App;
