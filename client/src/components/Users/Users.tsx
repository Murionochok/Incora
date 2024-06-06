import { Box } from "@mui/material";

import UserView from "../UserView/UserView";

import { UserViewData } from "../../interfaces/userInterfaces";

const tempUsers: UserViewData[] = [
  {
    id: "1",
    name: "Ivan",
    email: "ivanfedoniukwork@gmail.com",
    phone: "0730299075",
    postsAmount: 0,
  },
  {
    id: "1",
    name: "Ivan",
    email: "ivanfedoniukwork@gmail.com",
    phone: "0730299075",
    postsAmount: 0,
  },
];

export default function Users() {
  return (
    <Box>
      {tempUsers.map((user: UserViewData) => (
        <UserView
          id={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          postsAmount={user.postsAmount}
        />
      ))}
    </Box>
  );
}
