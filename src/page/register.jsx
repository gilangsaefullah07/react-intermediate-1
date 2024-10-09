import Auth from "../components/template/auth";
import FormRegister from "../components/organism/formregister";
import Header from "../components/organism/header";

const RegisterPage = () => {
  return (
    <div className="bg-orange-50">
      <Header></Header>
      <Auth
        title="Pendaftaran Akun"
        subtitle="Yuk, daftarkan akunmu sekarang juga!"
      >
        <FormRegister></FormRegister>
      </Auth>
    </div>
  );
};

export default RegisterPage;
