import React, { useEffect, useState } from "react";
import LinkIcon from "@mui/icons-material/DocumentScannerOutlined";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Card,
  CardContent,
  CircularProgress,
  FormLabel,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import useFileUpload from "../../../hooks/useFileUplaod";
import "./edit_file.css";

function getFileName(link) {
  if (!link) return "No File Selected";

  return link.split("/").pop();
}

const EditFile = ({
  label,
  inputId,
  link,
  accept,
  onChange,
  prefix = "documents",
}) => {
  const { uploadFile, uploading } = useFileUpload(onChange, prefix);

  const [file, setFile] = useState(null);

  const fileName = getFileName(link);

  useEffect(() => {
    uploadFile(file);
    // Do NOT put uploadFile function as dependency here
    // eslint-disable-next-line
  }, [file]);

  return (
    <div>
      <FormLabel>{label}</FormLabel>
      <div className={`file-editor`}>
        <div className="preview">
          <Card variant="outlined">
            <CardContent>
              <Stack
                direction={"row"}
                flex
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack direction={"row"} spacing={1}>
                  <LinkIcon />
                  <a href={link} target="_blank" rel="noreferrer">
                    <Typography>{fileName}</Typography>
                  </a>
                </Stack>
                <div className="edit-menu-button">
                  {uploading ? (
                    <CircularProgress size={20} />
                  ) : (
                    <div>
                      <IconButton>
                        <label htmlFor={inputId}>
                          <FileUploadIcon />
                        </label>
                      </IconButton>
                      <IconButton onClick={() => onChange(null)}>
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  )}
                </div>
              </Stack>
            </CardContent>
          </Card>
        </div>
        <input
          type="file"
          accept={accept}
          onChange={(e) => {
            console.log(e.target.files);
            setFile(e.target.files[0]);
          }}
          id={inputId}
          className="edit-file-input"
        />
      </div>
    </div>
  );
};

export default EditFile;
