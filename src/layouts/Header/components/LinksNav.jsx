import React from "react";
import Langauge from "./langauge";
import { Link } from "react-router-dom";

export default function LinksNav({ menuShow, setMenuShow, userData }) {
  return (
    <>
      <div className="d-flex justify-content-end icon-close gap-4 d-flex d-lg-none">
        <i
          className="fa fa-close"
          aria-hidden="true"
          onClick={() => setMenuShow(!menuShow)}
        ></i>
      </div>
      {!userData ? (
        <>
          <Link className="btn primary-bg" to={"/auth/login"}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5 13C8.63401 13 5.5 16.134 5.5 20V22C5.5 22.5523 5.05228 23 4.5 23C3.94772 23 3.5 22.5523 3.5 22V20C3.5 15.0294 7.52944 11 12.5 11C17.4706 11 21.5 15.0294 21.5 20V22C21.5 22.5523 21.0523 23 20.5 23C19.9477 23 19.5 22.5523 19.5 22V20C19.5 16.134 16.366 13 12.5 13Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5 11C14.7091 11 16.5 9.20914 16.5 7C16.5 4.79086 14.7091 3 12.5 3C10.2909 3 8.5 4.79086 8.5 7C8.5 9.20914 10.2909 11 12.5 11ZM12.5 13C15.8137 13 18.5 10.3137 18.5 7C18.5 3.68629 15.8137 1 12.5 1C9.18629 1 6.5 3.68629 6.5 7C6.5 10.3137 9.18629 13 12.5 13Z"
                fill="white"
              />
            </svg>
            <span>Login</span>
          </Link>
          <Link className="btn" to={"/auth/signup"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 13C8.13401 13 5 16.134 5 20V22C5 22.5523 4.55228 23 4 23C3.44772 23 3 22.5523 3 22V20C3 15.0294 7.02944 11 12 11C16.9706 11 21 15.0294 21 20V22C21 22.5523 20.5523 23 20 23C19.4477 23 19 22.5523 19 22V20C19 16.134 15.866 13 12 13Z"
                fill="#FF820E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11ZM12 13C15.3137 13 18 10.3137 18 7C18 3.68629 15.3137 1 12 1C8.68629 1 6 3.68629 6 7C6 10.3137 8.68629 13 12 13Z"
                fill="#FF820E"
              />
            </svg>
            <span>Sign Up</span>
          </Link>
        </>
      ) : (
        <>
        <Link className="btn btn-light primary-color gap-2" to={"/products"}>
            {/* <i className="fa fa-shop" style={{fontSize: '20px'}} aria-hidden="true"></i> */}
            <span >Products</span>
          </Link>
          {userData?.isAdmin && (
            <Link className="btn btn-light primary-color gap-2" to={"/dashboard"}>
              <i className="fa fa-user-pen" aria-hidden="true"></i>
              <span>Dashboard</span>
            </Link>
          )}
          <Link className="btn btn-light primary-color gap-2" to={"/favorite"}>
            <i className="fa fa-heart" style={{fontSize: '20px'}} aria-hidden="true"></i>
            <span className="d-lg-none">favorite</span>
          </Link>
        </>
      )}
      
    </>
  );
}
