import { Box } from "@mui/material";

import UserView from "../UserView/UserView";

import { User } from "../../interfaces/userInterfaces";
import { useAppSelector } from "../../redux/hooks";

export default function Users() {
  const users = useAppSelector((state) => state.users.users);
  return (
    <Box>
      {users.map((user: User) => (
        <UserView
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
        />
      ))}
    </Box>
  );
}
