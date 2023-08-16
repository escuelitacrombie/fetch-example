import SendEmail from "./SendEmail";
import "./style.css";
import Subscription from "./Subscription";
import Testimonials from "./Testimonials";

export const BASE_URL =
  "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";

function App() {
  return (
    <div>
      <Subscription />
      <Testimonials/>
      <SendEmail/>
    </div>
  );
}

export default App;
