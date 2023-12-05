import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface props{
    onSelectedOrder:(sortOrders:string) => void;
    sortOrder:string
}

const SortSelecteor = ( {onSelectedOrder,sortOrder}:props ) => {
  const sortOrders = [
    { value: "", lable: "Relevance" },
    { value: "-added", lable: "Date Added" },
    { value: "name", lable: "Name" },
    { value: "-released", lable: "Release date" },
    { value: "-metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average rating" },
  ];
  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.lable || 'Relevance'}
      </MenuButton>

      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={() => onSelectedOrder(order.value)} key={order.value} value={order.value}>
            {order.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelecteor;
