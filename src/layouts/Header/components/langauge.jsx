import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

export default function Langauge() {
  return (
    <DropdownButton variant="light" id="dropdown-basic-button" title={"Egypt"}>
        <Dropdown.Item href="#/action-1" className="d-flex align-items-center gap-1">Egypt</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Moroco</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Spain</Dropdown.Item>
    </DropdownButton>
  )
}
