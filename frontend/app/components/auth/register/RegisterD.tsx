import Image from "next/image";

export default function RegisterD() {
  return (
    <div className="Register w-[628px] h-[718px] relative bg-neutral-700 bg-opacity-60 backdrop-blur-[20px]">
      
      <div className="Visibility w-6 h-6 left-[544px] top-[413px] absolute">
        <div className="BoundingBox w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
      </div>
      <div className="NombreDeUsuario left-[40px] top-[98px] absolute text-white text-sm font-medium font-['Chakra Petch'] leading-[21px] tracking-tight">
        Nombre de usuario
      </div>
      <div className="Correo left-[40px] top-[231px] absolute text-white text-sm font-medium font-['Chakra Petch'] leading-[21px] tracking-tight">
        Correo
      </div>
      <div className="ContraseA left-[40px] top-[364px] absolute text-white text-sm font-medium font-['Chakra Petch'] leading-[21px] tracking-tight">
        Contraseña
      </div>
      <div className="OlvidasteTuContraseA left-[40px] top-[496px] absolute text-white text-sm font-medium font-['Chakra Petch'] leading-[21px] tracking-tight">
        ¿Olvidaste tu contraseña?
      </div>
      <div className="ORegStrateCon left-[260px] top-[605px] absolute text-center text-white text-sm font-medium font-['Chakra Petch'] leading-[21px] tracking-tight">
        o regístrate con
      </div>
      <Image
        width={100}
        height={100}
        className="Bc w-[197px] h-12 left-[215px] top-[537px] absolute"
        src="https://via.placeholder.com/197x48"
        alt="use client"
      />
      <div className="Label left-[255px] top-[548px] absolute text-neutral-800 text-xl font-semibold font-['Chakra Petch']">
        Registrarme
      </div>
      <div className="Line20 w-[196px] h-[0px] left-[40px] top-[616px] absolute border border-white"></div>
      <div className="Line22 w-[628px] h-[0px] left-0 top-[78px] absolute border border-white"></div>
      <div className="Line21 w-[197px] h-[0px] left-[391px] top-[616px] absolute border border-white"></div>
      <div className="Registrarme left-[216px] top-[20px] absolute text-center text-white text-[32px] font-bold font-['Chakra Petch'] leading-[38.40px] tracking-wide">
        Registrarme
      </div>
      <div className="Close w-6 h-6 left-[40px] top-[27px] absolute">
        <div className="BoundingBox w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
      </div>
      <div className="AccountCircle w-6 h-6 left-[60px] top-[147px] absolute">
        <div className="BoundingBox w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
      </div>
      <div className="Mail w-6 h-6 left-[60px] top-[280px] absolute">
        <div className="BoundingBox w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
      </div>
      <div className="Lock w-6 h-6 left-[60px] top-[413px] absolute">
        <div className="BoundingBox w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
      </div>
      <div className="MaskGroup w-8 h-8 left-[270px] top-[666px] absolute">
        <Image
          width={100}
          height={100}
          className="Image18 w-8 h-8 left-0 top-0 absolute"
          src="https://via.placeholder.com/32x32"
          alt="use client"
        />
        <div className="Rectangle277 w-8 h-8 left-0 top-0 absolute bg-white" />
      </div>
      <div className="MaskGroup w-8 h-8 left-[326px] top-[666px] absolute">
        <Image
          width={100}
          height={100}
          className="Image17 w-8 h-8 left-0 top-0 absolute"
          src="https://via.placeholder.com/32x32"
          alt="use client"
        />
        <div className="Rectangle276 w-8 h-8 left-0 top-0 absolute bg-white"/>
      </div>
    </div>
  );
}
