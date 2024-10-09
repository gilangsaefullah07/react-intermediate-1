import Card from "../molecul/card";

const ListCard = () => {
  return (
    <div class="flex flex-col md:flex-row gap-4">
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};

export default ListCard;
