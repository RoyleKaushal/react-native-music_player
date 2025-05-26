import StatusBarComponent from "@components/StatusBarComponent/StatusbarComponent";
import SplashScreen from "@screens/SplashScreen/SplashScreen";
import RootNavigator from "routes";

export default function App() {
  return(
    <>
      <StatusBarComponent darkStyle={false} />
      <RootNavigator/>
    </>
  )
}
