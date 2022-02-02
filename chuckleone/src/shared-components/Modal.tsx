// @ts-ignore
import { Box, Modal, Typography } from "@mui/material";

const GalleryModal = (props: any) => {
  return (
    <Modal
      {...props}
      aria-labelledby="gallery-modal"
      aria-describedby="gallery-modal-desicription"
    >
      <Box sx={{ marginTop: "48px", textAlign: "center" }}>
        <div style={{ backgroundColor: "#000", padding: "16px" }}>
          <Typography
            id="gallery-modal-title"
            variant="h5"
            component="h3"
            sx={{ color: "#fff" }}
          >
            {props.props.title}
          </Typography>
          <Typography
            id="gallery-modal-desicription"
            component="h4"
            sx={{ color: "#fff" }}
          >
            {props.props.details}
          </Typography>
        </div>

        <img src={props.props.img} alt={props.props.title} />
      </Box>
    </Modal>
  );
};

export default GalleryModal;
