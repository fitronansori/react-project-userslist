import React from "react";
import "./AddUsers.scss";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";

const AddUsers = () => {
  return (
    <>
      <Card>
        <div className="addu-title">
          <h1>Add Users</h1>
        </div>

        <form>
          <div className="username">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
            />
          </div>

          <div className="age">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" autoComplete="off" />
          </div>

          <div className="university">
            <label htmlFor="univeristy">University</label>
            <input
              type="text"
              id="university"
              name="univeristy"
              autoComplete="off"
            />
          </div>

          <div className="addu-action">
            <Button>Submit</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
