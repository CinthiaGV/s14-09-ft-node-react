'use client';
import AuthTitle from '../AuthTitle';
import OpenModal from './OpenModal';
import RegisterForm from './RegisterForm';
import ThirdPartyRegister from './ThirdPartyRegister';

export default function Register() {
  return (
    <OpenModal btnTitle='Regístrate' btnColor='grayBtn'>
      <AuthTitle>Regístrate</AuthTitle>
      <RegisterForm/>
      <ThirdPartyRegister/>
    </OpenModal>
  );
}
