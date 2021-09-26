import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { SecondryButton } from "./components/atoms/buttons/SecondryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>test</PrimaryButton>
      <SecondryButton>aa</SecondryButton>
    </div>
  );
}
