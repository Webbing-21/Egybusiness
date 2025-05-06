import React, { useContext } from 'react'
import { Button, Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Langauge from '../../../layouts/Header/components/langauge'
import User from '../../../layouts/Header/components/User'
import { UserContext } from '../../../context/auth/usercontect'

export default function HeaderDashboard({handleShow}) {
  const {userData} = useContext(UserContext)

  return (
    <header className="navbar d-flex align-items-center">
      <div className="d-flex align-items-center gap section-logo">
        <Link to={'/'} className="logo">
          egybusiness.ae
        </Link>
       <div className={true ? 'searchMenuStyle active ': 'searchMenuStyle hide'}>
        {/* <InputGroup>
                <DropdownButton variant="light" id="dropdown-basic-button" title={<MenuLink />}>
                    <Dropdown.Item href="#/action-1" className="d-flex align-items-center gap-1">
                      <svg width="18" height="18" viewBox="0 0 63 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.7625 6.8642C9.93627 6.8639 9.14258 7.19973 8.55059 7.80013C7.95859 8.40052 7.6151 9.218 7.5933 10.0784L6.4647 54.8075C6.3165 60.6263 6.2215 64.6836 6.5407 67.7513C6.8523 70.7359 7.5211 72.3152 8.5775 73.4434C9.6339 74.5715 11.1311 75.3077 13.9849 75.7115C16.9223 76.1271 20.8211 76.135 26.4071 76.135H36.5911C42.1771 76.135 46.0759 76.1271 49.0133 75.7115C51.8633 75.3077 53.3643 74.5715 54.4207 73.4434C55.4771 72.3152 56.1459 70.7359 56.4575 67.7513C56.7767 64.6836 56.6817 60.6263 56.5335 54.8075L55.4049 10.0784C55.3848 9.23332 55.0544 8.42849 54.4816 7.82972C53.9087 7.23095 53.1373 6.88388 52.3261 6.86003C51.5149 6.83618 50.7259 7.13736 50.1216 7.70152C49.5172 8.26567 49.1437 9.04981 49.0779 9.89233L48.1051 22.0602C48.0291 23.0538 47.9531 23.9761 47.8277 24.744C47.6947 25.5752 47.4667 26.4777 46.9537 27.3446C46.315 28.4139 45.4085 29.2815 44.3317 29.8542C43.4577 30.3173 42.5837 30.4796 41.7705 30.5509C41.0295 30.6142 40.1365 30.6142 39.1789 30.6142H23.8231C22.8617 30.6142 21.9763 30.6142 21.2315 30.5509C20.3418 30.4982 19.4711 30.2614 18.6703 29.8542C17.5935 29.2815 16.6871 28.4139 16.0483 27.3446C15.5941 26.5468 15.297 25.6627 15.1743 24.744C15.0483 23.8535 14.9558 22.9583 14.8969 22.0602L13.9241 9.89233C13.8583 9.067 13.4972 8.29757 12.9122 7.73666C12.3273 7.17575 11.5575 6.86434 10.7625 6.8642ZM1.8971 9.92004C1.96652 7.56523 2.89694 5.327 4.49808 3.66309C6.09922 1.99918 8.25011 1.03529 10.5109 0.968555C12.7717 0.901819 14.9715 1.73727 16.6605 3.30406C18.3496 4.87085 19.4002 7.0506 19.5975 9.39754L20.5627 21.4625C20.6539 22.5986 20.7147 23.2675 20.7907 23.7584C20.81 23.9146 20.8444 24.0685 20.8933 24.2175C20.9827 24.3632 21.1072 24.4819 21.2543 24.5619C21.2885 24.5738 21.4063 24.6055 21.6989 24.6332C22.1777 24.6727 22.8237 24.6767 23.9181 24.6767H39.0801C40.1745 24.6767 40.8205 24.6767 41.2993 24.6332C41.4494 24.6249 41.5984 24.6011 41.7439 24.5619C41.8911 24.4819 42.0155 24.3632 42.1049 24.2175C42.1537 24.0698 42.188 23.9173 42.2075 23.7623C42.2873 23.2675 42.3443 22.5986 42.4355 21.4625L43.4007 9.39754C43.598 7.0506 44.6486 4.87085 46.3377 3.30406C48.0267 1.73727 50.2265 0.901819 52.4873 0.968555C54.7481 1.03529 56.899 1.99918 58.5001 3.66309C60.1013 5.327 61.0317 7.56523 61.1011 9.92004L62.2411 54.8709C62.3779 60.4125 62.4919 64.8815 62.1233 68.3965C61.7433 72.0421 60.8047 75.1257 58.5019 77.5838C56.2029 80.0459 53.2693 81.1067 49.7809 81.5975C46.4141 82.0725 42.1277 82.0725 36.8039 82.0725H26.1943C20.8705 82.0725 16.5803 82.0725 13.2173 81.5975C9.7289 81.1027 6.7953 80.0459 4.4963 77.5838C2.1935 75.1257 1.2587 72.0421 0.874904 68.4005C0.506304 64.8815 0.620303 60.4165 0.760903 54.8709L1.8971 9.92004Z" fill="#ff820e"/>
                      </svg>
                      Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <Form.Control
                  placeholder="Search over 30 million product"
                  aria-label="search"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="btnGroupAddon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.0971 0.601562C3.45398 0.601562 0.486328 3.56921 0.486328 7.21234C0.486328 10.8555 3.45398 13.8289 7.0971 13.8289C8.65319 13.8289 10.0843 13.2836 11.2154 12.3781L13.969 15.1303C14.108 15.2635 14.2936 15.337 14.4861 15.3351C14.6786 15.3331 14.8626 15.2558 14.9988 15.1198C15.135 14.9838 15.2126 14.7999 15.2148 14.6074C15.217 14.4149 15.1438 14.2292 15.0108 14.0901L12.2571 11.3364C13.1633 10.2036 13.7093 8.77023 13.7093 7.21234C13.7093 3.56921 10.7402 0.601562 7.0971 0.601562ZM7.0971 2.07096C9.94611 2.07096 12.2385 4.36334 12.2385 7.21234C12.2385 10.0613 9.94611 12.3595 7.0971 12.3595C4.24809 12.3595 1.95571 10.0613 1.95571 7.21234C1.95571 4.36334 4.24809 2.07096 7.0971 2.07096Z"
                        fill="#FF820E"
                      />
                    </svg>
                  </InputGroup.Text>
          </InputGroup> */}
       </div>
      </div>
      <div className="d-flex gap-2">
        {/* <div className="d-none d-lg-flex gap-2">
          <Langauge />
        </div> */}
        <Button variant="light" className="d-flex d-lg-none align-items-center" >
          <i className="fa fa-search" aria-hidden="true"></i>
        </Button>
        <div className="d-flex gap-1">
          {userData && <User user={userData}/> } 
          <Button className="d-flex d-lg-none justify-content-center align-items-center" variant="light" onClick={handleShow} ><i className="fa fa-bars" aria-hidden="true"></i></Button>
        </div>
        
      </div>
    </header>
  )
}
