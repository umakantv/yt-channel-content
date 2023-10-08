import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/MoreHoriz";
import { IconButton, Menu as MenuComponent } from "@mui/material";

export default function DropdownMenu({ children }) {
  const [anchorRef, setAnchorRef] = useState(null);
  const open = Boolean(anchorRef);

  const handleClick = (event) => {
    setAnchorRef(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorRef(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        style={{ background: "rgba(0,0,0,0.8)" }}
        size="small"
      >
        <MenuIcon style={{ color: "white" }} />
      </IconButton>

      <MenuComponent
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef}
        onClick={handleClose}
      >
        {children}
      </MenuComponent>
    </>
  );
}
