import { Box } from "@mui/material";

import UserView from "../UserView/UserView";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { fetchUsers } from "../../redux/reducers/userReducer";

export default function Users() {
  const users = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <Box>
      {users.map((user) => (
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
