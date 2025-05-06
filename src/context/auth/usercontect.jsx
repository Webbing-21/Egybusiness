import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();


export default function UserContextProvider(props) {
  const [userToken, setUserToken] = useState(localStorage.getItem('token') || null);
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('data')) || null);
  return (
    <UserContext.Provider
      value={{ userToken, setUserToken , userData, setUserData }}>
      {props.children}
    </UserContext.Provider>
  );
}
