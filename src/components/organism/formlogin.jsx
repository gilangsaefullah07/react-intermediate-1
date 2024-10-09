import InputForm from "../molecul";
import Button from "../atom/button";

const FormLogin = () => {
  return (
    <form action="" className="flex flex-col gap-3 w-full">
      <InputForm title="E-mail" type="email" name="email"></InputForm>
      <InputForm title="Password" type="password" name="password"></InputForm>
      <Button>Masuk</Button>
    </form>
  );
};

export default FormLogin;
