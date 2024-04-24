'use client';

import ProfileForm from './ProfileForm';
import ProfileDer from './ProfileDer';

export const Profile = () => {
  return (
    <div className="flex w-[100%]">
      <div className="w-[50%] h-full flex items-center justify-center">
        <ProfileForm />
      </div>
      <div className="bg-[#3E3A3A] m-6 rounded-[12px] w-[50%]">
        <ProfileDer />
      </div>
    </div>
  );
};
