import Tab from "../atom/tab";
import ListTab from "../molecul/listtab";

const TabBar = () => {
  return (
    <div class="text-sm text-center border-b border-gray-200 overflow-hidden">
      <ListTab></ListTab>
    </div>
  );
};

export default TabBar;
