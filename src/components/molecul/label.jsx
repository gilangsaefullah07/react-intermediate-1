const Label = (props) => {
  const { htmlfor, children } = props;
  return (
    <label htmlFor={htmlfor} className="w-full text-sm">
      {children}
    </label>
  );
};

export default Label;
