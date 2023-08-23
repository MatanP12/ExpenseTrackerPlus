import Home from "./Pages/Home";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/en-gb';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootPage } from "./Pages/RootPage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/Signup";
import DashBoardPage from "./Pages/DashBoardPage";
import ExpensesPage from "./Pages/ExpensesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "signin",
        element: <SignIn />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <DashBoardPage />
          },
          {
            path: "/expenses",
            element: <ExpensesPage />
          }
        ]
      }
    ]
  }
])

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <RouterProvider router={router} />
    </LocalizationProvider>
  );
}

export default App;
