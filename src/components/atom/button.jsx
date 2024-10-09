const Button = (props) => {
  const {
    children,
    background = "bg-green-500",
    hover = "hover:bg-green-800",
    text = "text-white",
  } = props;
  return (
    <button
      className={`w-full p-2 ${background} ${hover} rounded-md text-sm ${text}`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
