import Auth from "../components/template/auth";
import FormLogin from "../components/organism/formlogin";
import Header from "../components/organism/header";

const LoginPage = () => {
  return (
    <div className="bg-orange-50">
      <Header></Header>
      <Auth
        title="Masuk Akun"
        subtitle="Yuk, lanjutin belajarmu di videobelajar."
      >
        <FormLogin></FormLogin>
      </Auth>
    </div>
  );
};

export default LoginPage;
