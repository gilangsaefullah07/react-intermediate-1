import Label from "./label";
import Input from "./input";

const InputForm = (props) => {
  const { title, name, type } = props;
  return (
    <div className="w-full flex flex-col gap-1">
      <Label htmlFor={name}>{title}</Label>
      <Input name={name} type={type}></Input>
    </div>
  );
};

export default InputForm;
