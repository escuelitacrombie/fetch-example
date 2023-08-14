import SendEmail from "./SendEmail";
import "./style.css";
import Subscription from "./Subscription";
import Testimonial from "./Testimonial";

export const BASE_URL =
  "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";

function App() {
  return (
    <div className="main">
      <Subscription />
      <Testimonial />
      <SendEmail />
    </div>
  );
}

export default App;
