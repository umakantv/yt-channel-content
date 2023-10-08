import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";

import useFileUpload from "../../../hooks/useFileUplaod";
import DropdownMenu from "../../Menu/Dropdown";
import { CircularProgress, MenuItem } from "@mui/material";
import "./edit_avatar.css";

const EditAvatar = ({ inputId, image, name, onChange, prefix = "avatars" }) => {
  const { uploadFile, uploadProgress, uploading } = useFileUpload(
    onChange,
    prefix
  );

  console.log({ uploading, uploadProgress });

  const [file, setFile] = useState(null);

  useEffect(() => {
    uploadFile(file);
    // Do NOT put uploadFile function as dependency here
    // eslint-disable-next-line
  }, [file]);

  return (
    <div>
      <div className={`avatar-editor`}>
        <div className="preview">
          <Avatar alt={name} src={image} style={{ height: 100, width: 100 }} />
          {uploading && (
            <div className="avatar-editor-overlay">
              <CircularProgress style={{ color: "white" }} />
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/jpeg, image/png"
          onChange={(e) => {
            console.log(e.target.files);
            setFile(e.target.files[0]);
          }}
          id={inputId}
          className="edit-file-input"
        />
        <div className="edit-menu-button">
          <DropdownMenu>
            <label htmlFor={inputId}>
              <MenuItem>Upload New</MenuItem>
            </label>
            {image && (
              <a href={image} target="_blank" rel="noreferrer">
                <MenuItem>Preview</MenuItem>
              </a>
            )}
            <MenuItem onClick={() => onChange(null)}>Remove</MenuItem>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default EditAvatar;
