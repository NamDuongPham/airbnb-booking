import { useTitle } from "../../hooks/useTitle"
import Home from "../../modules/Home/Home"


export const HomePage = () => {
  useTitle("Home page")
  return <Home/>
}