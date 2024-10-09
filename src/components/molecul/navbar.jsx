import Avatar from "../atom/avatar";
import Humburger from "../atom/humburger";

const Navbar = () => {
  return (
    <nav class="flex p-4 bg-white border-b-2 border-gray-200 place-content-between items-center">
      <img src="../Logo.png" alt="not found" />
      <Avatar title="Kategori"></Avatar>
      <Humburger></Humburger>
    </nav>
  );
};

export default Navbar;
