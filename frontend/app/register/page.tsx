import Btn from "../components/Button/Btn";
import RegisterForm from "../components/auth/register/Register";


export default function Page() {
  return (
    <div>
      <Btn actionTarget="openModal" target={<RegisterForm/>}>Register</Btn>
    </div>
  );
}
