import InputForm from "../molecul";
import Button from "../atom/button";

const FormRegister = () => {
  return (
    <form action="" className="flex flex-col w-full gap-3">
      <InputForm
        title="Nama Lengkap"
        type="text"
        name="namalengkap"
      ></InputForm>
      <InputForm title="E-mail" type="email" name="email"></InputForm>
      <InputForm title="No.Hp" type="number" name="nohp"></InputForm>
      <InputForm title="Password" type="password" name="password"></InputForm>
      <InputForm
        title="Konfirmasi Password"
        type="password"
        name="konfirmasipassword"
      ></InputForm>
      <Button>Daftar</Button>
      <Button
        background="bg-green-200 rounded-md"
        hover="hover:bg-green-800"
        text=" text-green-500"
      >
        Masuk
      </Button>
    </form>
  );
};

export default FormRegister;
