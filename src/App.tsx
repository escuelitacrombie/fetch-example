import SendMail from "./SendMail";
import "./style.css";
import Subscription from "./Subscription";
import Testimonial from "./Testimonial";

export const BASE_URL =
  "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";

function App() {
  return (
    <div>
      <Subscription />
      <Testimonial />
      <SendMail />
    </div>
  );
}

export default App;
