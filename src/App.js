import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickusers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    // thenはaxiosを使用してデータを撮ってきた後の処理を、catchはエラーが起きた際の処理を記述できる
  };
  const onClickuser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/3")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <button onClick={onClickusers}>uses</button>
      <br />
      <button onClick={onClickuser1}>id=1のuser</button>
    </div>
  );
}
