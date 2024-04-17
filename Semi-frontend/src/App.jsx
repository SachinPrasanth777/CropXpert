import styles from "./style";
import { Navbar, Hero } from "./components";
import CropForm from "./components/cropform";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

function App(){
  const router = createBrowserRouter([
    {
      path: "/features",
      element: <><Navbar /><CropForm/></>
    },{
      path: "/",
      element: <><Navbar /><Hero/></>
    },
    {
      path: "/home",
      element: <><Navbar /><Hero/></>
    }
  ])
  return (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <RouterProvider router={router}/>
      </div>
    </div>
  </div>
)
};

export default App;
