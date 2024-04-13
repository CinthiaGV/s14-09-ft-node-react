import Btn from "../components/Button/Btn";
import Login from "../components/auth/loginw/Login";


export default function Page() {
  return (
    <div>
      <Btn actionTarget="openModal" target={<Login/>}>LOGIN</Btn>
    </div>
  );
}
