import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { SecondryButton } from "./components/atoms/buttons/SecondryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/UserCard";
import "./styles.css";

const user = {
  image: "https://source.unsplash.com/kIdmUdgfcD4",
  name: "tanipu",
  email: "1234@test.com",
  tel: "090-1234-1234",
  company: {
    name: "テスト株式会社"
  },
  webSite: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>test</PrimaryButton>
      <SecondryButton>aa</SecondryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
