'use client';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';

export default function ThirdPartyRegister() {
  return (
    <div className="flex justify-center">
      <div className="absolute separator">
        <div></div>
        <span className="inline-block text-nowrap">O regístrate con</span>
        <div></div>
      </div>
      <div className="flex mt-8 gap-5 items-center">
        <button>
          <GoogleIcon />
        </button>
        <button>
          <FacebookRoundedIcon />
        </button>
      </div>
    </div>
  );
}
