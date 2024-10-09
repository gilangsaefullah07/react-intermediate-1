const Input = (props) => {
  const { type, name } = props;
  return (
    <input
      className="w-full p-2 border border-gray-200 rounded-md"
      type={type}
      name={name}
    ></input>
  );
};

export default Input;
