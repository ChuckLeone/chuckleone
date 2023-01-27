// @ts-ignore
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const GalleryModal = (props: any) => {
  return (
    <>
      <Dialog
        {...props}
        aria-labelledby="gallery-modal"
        aria-describedby="gallery-modal-desicription"
        fullWidth
        fullScreen
        sx={{ backgroundcolor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Box sx={{ margin: "8px", textAlign: "center" }}>
          <Typography
            id="gallery-modal-title"
            variant="h5"
            component="h3"
            sx={{ color: "#fff", margin: "16px" }}
          >
            {props.item.title}
            <div style={{ textAlign: "right" }}>
              <IconButton
                edge="start"
                color="inherit"
                onClick={props.onClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </div>
          </Typography>
          <img src={props.item.img} alt={props.item.title} width="70%" />
          <Typography
            id="gallery-modal-desicription"
            component="h4"
            sx={{ color: "#fff", margin: "16px" }}
          >
            {props.item.details}
          </Typography>
        </Box>
      </Dialog>
    </>
  );
};

export default GalleryModal;
