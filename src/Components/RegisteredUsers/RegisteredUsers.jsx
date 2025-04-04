import { DeleteForeverOutlined } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

const RegisteredUsers = () => {
    // const registerData = secureLocalStorage.getItem("registrationData");
  const [users, setUsers] = useState(
    secureLocalStorage?.getItem("registrationData")
  );
  useEffect(() => {
    secureLocalStorage?.setItem("registrationData", users);
    setUsers(users);
  }, [users]);
//   console.log(registerData)
  return (
    <div className="container my-5">
      <table className="table mx-auto table-bordered">
        <thead>
          <tr>
            <th>Sr#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((userRow, index) => {
            return (
              userRow?.username !== "admin" && (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{userRow?.name}</td>
                  <td>{userRow?.username}</td>
                  <td>{userRow?.email}</td>
                  <td>{userRow?.password}</td>
                  <td>{userRow?.DOB}</td>
                  <td>{userRow?.gender}</td>
                  <td>{userRow?.address}</td>
                  <td>{userRow?.phone}</td>
                  <td>
                    <Fab
                      sx={{
                        backgroundColor: "silver",
                        color: "black",
                        boxShadow: "none",
                        borderRadius: "5px",
                      }}
                      size="small"
                      onClick={() => {
                        const filteredData = users?.filter(
                          (userData) => userData?.username !== userRow?.username
                        );
                        setUsers(filteredData);
                      }}
                    >
                      <DeleteForeverOutlined />
                    </Fab>
                  </td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RegisteredUsers;
