import React from "react";
import "./UsersList.scss";
import Card from "../../components/UI/Card";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const UsersList = () => {
  return (
    <>
      <Card>
        <div className="userslist-title">
          <h1>Users List</h1>
        </div>

        <div className="userslist-container">
          <div className="userslist-items">
            <div className="items-list">
              <div className="item">
                <span className="name">Nama : Fitron Ansori</span>
                <span className="age">Age : 20 years old</span>
                <span className="university">
                  University : Univeristas Bumigora
                </span>
              </div>
              <div className="userslist-actions">
                <button className="btn-edit">
                  <FaEdit className="icon" />
                </button>
                <button className="btn-delete">
                  <MdDelete className="icon" />
                </button>
              </div>
            </div>

            <div className="items-list">
              <div className="item">
                <span className="name">Nama : Fitron Ansori</span>
                <span className="age">Age : 20 years old</span>
                <span className="university">
                  University : Univeristas Bumigora
                </span>
              </div>
              <div className="userslist-actions">
                <button className="btn-edit">
                  <FaEdit className="icon" />
                </button>
                <button className="btn-delete">
                  <MdDelete className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default UsersList;
