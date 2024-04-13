import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function InputField({ label, id, formikProps }) {
  const { formik } = formikProps;
  
  return (
    <div className="relative flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <div className="p-[0.0313rem] polygon bg-white">
        <div className='polygon bg-black m-1'>
          <div className="polygon glassmorphism">
            <div className="absolute inset-y-1 left-0 pl-3 flex items-center pointer-events-none" >
              <PersonOutlineOutlinedIcon />
            </div>
            <input
              className="polygon bg-transparent pl-10 py-2 border-none w-64 ml-10"
              id={id}
              type="text"
              {...formik.getFieldProps(id)}
            />
          </div>
        </div>
      </div>
      {formik.touched[id] && formik.errors[id] ? (
        <span className="text-red-500">{formik.errors[id]}</span>
      ) : (
        <span>&nbsp;</span>
      )}
    </div>
  );
}
