import React, { useContext } from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/auth/usercontect";

export default function User({ user }) {
  let navigate = useNavigate();
  const { userToken, setUserToken, setUserData, userData } = useContext(UserContext);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("data");
    setUserToken(null);
    setUserData(null);
    navigate("/auth/login", { replace: true });
    setTimeout(() => {
      window.location.href="/auth/login"
    }, 0);
  }

  return (
    <>
      <Link to={"/cart"}>
        <Button variant="light">
          <svg
            width="24"
            height="24"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.3337 29.9987C26.4837 29.9987 25.0003 31.482 25.0003 33.332C25.0003 34.2161 25.3515 35.0639 25.9766 35.6891C26.6018 36.3142 27.4496 36.6654 28.3337 36.6654C29.2177 36.6654 30.0656 36.3142 30.6907 35.6891C31.3158 35.0639 31.667 34.2161 31.667 33.332C31.667 32.448 31.3158 31.6001 30.6907 30.975C30.0656 30.3499 29.2177 29.9987 28.3337 29.9987ZM1.66699 3.33203V6.66536H5.00033L11.0003 19.3154L8.73366 23.3987C8.48366 23.8654 8.33366 24.4154 8.33366 24.9987C8.33366 25.8828 8.68485 26.7306 9.30997 27.3557C9.93509 27.9808 10.7829 28.332 11.667 28.332H31.667V24.9987H12.367C12.2565 24.9987 12.1505 24.9548 12.0724 24.8767C11.9942 24.7985 11.9503 24.6925 11.9503 24.582C11.9503 24.4987 11.967 24.432 12.0003 24.382L13.5003 21.6654H25.917C27.167 21.6654 28.267 20.9654 28.8337 19.9487L34.8003 9.16536C34.917 8.8987 35.0003 8.61536 35.0003 8.33203C35.0003 7.89 34.8247 7.46608 34.5122 7.15352C34.1996 6.84096 33.7757 6.66536 33.3337 6.66536H8.68366L7.11699 3.33203M11.667 29.9987C9.81699 29.9987 8.33366 31.482 8.33366 33.332C8.33366 34.2161 8.68485 35.0639 9.30997 35.6891C9.93509 36.3142 10.7829 36.6654 11.667 36.6654C12.551 36.6654 13.3989 36.3142 14.024 35.6891C14.6491 35.0639 15.0003 34.2161 15.0003 33.332C15.0003 32.448 14.6491 31.6001 14.024 30.975C13.3989 30.3499 12.551 29.9987 11.667 29.9987Z"
              fill="black"
            />
          </svg>
        </Button>
      </Link>
      <DropdownButton
        variant="light"
        id="dropdown-basic-button"
        title={<span style={{textTransform: 'uppercase', fontWeight: 'bold'}}>
        {user?.username?.length > 0 && user?.username?.split(' ')[0][0]}
        {user?.username?.split(' ').length > 1  && user?.username?.length > 0 && user?.username?.split(' ')[1][0]}
      </span>}
      >
        <Dropdown.Item className="">
          <div className="bold p-1">{user?.username}</div>
          <div>{user?.email}</div>
        </Dropdown.Item>
        {user.isAdmin && <Dropdown.Item>
          <Link to={`/dashboard/users/${user?.id}`} style={{color: 'black'}}
            className="d-flex gap-1 align-items-center"
          >
            <i className="fa fa-user primary-color" aria-hidden="true"></i>
            <span>Admin</span>
          </Link>
        </Dropdown.Item>}
        <Dropdown.Item
          className="d-flex gap-1 align-items-center"
          onClick={logout}
        >
          <i className="fa fa-sign-out primary-color" aria-hidden="true"></i>
          <span>Logout</span>
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}
