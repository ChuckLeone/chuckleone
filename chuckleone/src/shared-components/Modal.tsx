// @ts-ignore
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const GalleryModal = (props: any) => {
  return (
    <Dialog
      {...props}
      aria-labelledby="gallery-modal"
      aria-describedby="gallery-modal-desicription"
      fullWidth
      PaperProps={{ maxWidth: "70%" }}
    >
      <Box sx={{ margin: "8px", textAlign: "center" }}>
        <Typography
          id="gallery-modal-title"
          variant="h5"
          component="h3"
          sx={{ color: "#fff", margin: "16px" }}
        >
          {props.item.title}
        </Typography>
        <img
          src={props.item.img}
          alt={props.item.title}
          width="70%"
          height="70%"
        />
        <Typography
          id="gallery-modal-desicription"
          component="h4"
          sx={{ color: "#fff", margin: "16px" }}
        >
          {props.item.details}
        </Typography>
      </Box>
    </Dialog>
  );
};

export default GalleryModal;
