import React, { useEffect } from "react";
import "./UsersList.scss";
import Card from "../../components/UI/Card";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  deleteUsers,
  selectAllUsers,
  getUsersStatus,
  getUsersError,
  fetchUsers,
} from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";

const UsersList = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);
  const usersStatus = useSelector(getUsersStatus);
  const usersError = useSelector(getUsersError);

  useEffect(() => {
    if (usersStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [usersStatus, dispatch]);

  return (
    <>
      <Card>
        <div className="userslist-title">
          <h1>Users List</h1>
        </div>

        <div className="userslist-container">
          <div className="userslist-items">
            {users.map((user) => (
              <div className="items-list" key={user.id}>
                <div className="item">
                  <span className="name">Nama : {user.name}</span>
                  <span className="age">Age : {user.age} years old</span>
                  <span className="university">
                    University : {user.university}
                  </span>
                </div>
                <div className="userslist-actions">
                  <button className="btn-edit">
                    <FaEdit className="icon" />
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => dispatch(deleteUsers(user.id))}
                  >
                    <MdDelete className="icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
};

export default UsersList;
