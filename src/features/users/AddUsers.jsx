import React, { useState, useEffect } from "react";
import "./AddUsers.scss";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
import { addNewUsers, selectAllUsers } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";

const AddUsers = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [university, setUniversity] = useState("");

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const handleSubmit = (e) => {
    e.preventDefault();

    const initialUsers = {
      name,
      age,
      university,
    };

    dispatch(addNewUsers(initialUsers));

    setName("");
    setAge("");
    setUniversity("");
  };

  return (
    <>
      <Card>
        <div className="addu-title">
          <h1>Add Users</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="username">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={name}
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="age">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={age}
              autoComplete="off"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="university">
            <label htmlFor="univeristy">University</label>
            <input
              type="text"
              id="university"
              name="univeristy"
              value={university}
              autoComplete="off"
              onChange={(e) => setUniversity(e.target.value)}
            />
          </div>

          <div className="addu-action">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
