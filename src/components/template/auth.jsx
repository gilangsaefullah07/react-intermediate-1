import FormLogin from "../organism/formlogin";

const Auth = (props) => {
  const { children, title, subtitle } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="flex flex-col md:w-2/5 gap-3 bg-white p-6 rounded-md my-20">
        <h1 className="text-lg font-bold w-full text-center">{title}</h1>
        <p className="text-gray-400 w-full text-center">{subtitle}</p>
        {children}
      </div>
    </div>
  );
};

export default Auth;
