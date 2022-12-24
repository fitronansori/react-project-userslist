import React from "react";
import AddUsers from "./features/users/AddUsers";
import UsersList from "./features/users/UsersList";

const App = () => {
  return (
    <main>
      <AddUsers />
      <UsersList />
    </main>
  );
};

export default App;
