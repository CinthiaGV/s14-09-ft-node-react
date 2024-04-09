import Btn from "../components/Button/Btn";
import FormikRegister from "../components/auth/register/RegisterF";

export default function Page() {
  return (
    <div>
      {/*<Btn actionTarget="openModal" target={<RegisterForm/>}>Register</Btn>*/}
      <Btn actionTarget="openModal" target={<FormikRegister/>}>RegisterFormik</Btn>
    </div>
  );
}
