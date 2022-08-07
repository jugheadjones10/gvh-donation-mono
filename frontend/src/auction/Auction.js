/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
// import {Container} from "../payment-methods/StyledComponents";
import { Container } from "@mui/material";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import { useTheme } from "@mui/styles";
import styled from "@emotion/styled";

import PaymentMethod from "components/PaymentMethod";
import Decorations from "./Decorations";
import { Title } from "components/TypographyVariants";

import image1 from "./paintings/image1.webp";
import image2 from "./paintings/image2.webp";
import image3 from "./paintings/image3.webp";
import image4 from "./paintings/image4.webp";
import image5 from "./paintings/image5.webp";
import image6 from "./paintings/image6.webp";
import image7 from "./paintings/image7.webp";
import image8 from "./paintings/image8.webp";
import image9 from "./paintings/image9.webp";
import image10 from "./paintings/image10.webp";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  textAlign: "center",
}));

const paintingsData = [
  // {image: image1,  painter: "Jack", age: 12, from: "my home"},
  { image: image2, painter: "Van Lal Luai", age: 15, from: "Ebenezer" },
  { image: image3, painter: "Man Lian Nuam", age: 17, from: "Ebenezer" },
  { image: image4, painter: "Thang Awm", age: 18, from: "Ebenezer" },
  { image: image5, painter: "Zoram Chuanna", age: 13, from: "Ebenezer" },
  {
    image: image6,
    painter: "Christie Jame",
    age: 17,
    from: "Victory Children Home",
  },
  {
    image: image7,
    painter: "Mg Ye Htet Oo",
    age: 21,
    from: "Eagle Children Home",
  },
  { image: image8, painter: "Gin Khan Hau", age: 18, from: "Ebenezer" },
  { image: image9, painter: "Pau Khua Kai", age: 11, from: "Ebenezer" },
  { image: image10, painter: "San Hlaing Kyaw", age: 15, from: "Victory Home" },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function auctionSubmit(values, painterData) {
  values.painter = painterData.painter;

  return fetch(process.env.REACT_APP_DEV_SERVER + "/auction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values, null, 2),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log("JSON", json);
      return { refid: json.ID, qrUrl: json.qrUrl };
    });
}

function useOneOpen(open) {
  const [isOneOpen, setOneOpen] = useState(false);

  useEffect(() => {
    if (open.some((x) => x)) {
      setOneOpen(true);
    } else {
      setOneOpen(false);
    }
  }, [open]);

  return isOneOpen;
}

const disableButtons = true;
function Auction() {
  const theme = useTheme();
  const [open, setOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const isOneOpen = useOneOpen(open);

  const handleClickOpen = (index) => {
    const original = [false, false, false, false, false, false, false];
    original[index] = true;
    setOpen(original);
  };

  const handleClose = (index) => {
    const original = [false, false, false, false, false, false, false];
    setOpen(original);
  };

  return (
    <Box
      sx={{ flexGrow: 1 }}
      css={
        {
          // backgroundColor: "#007c3c",
        }
      }
    >
      <Decorations displaySnow={!isOneOpen} />

      <Box py={8} px={{ xs: 4, md: 8 }}>
        <Typography
          fontFamily="CooperHewitt-Semibold"
          fontSize={{
            md: "h3.fontSize",
            xs: "h4.fontSize",
          }}
          align="center"
        >
          GVH Santa Mission 2021 Art Gallery
        </Typography>

        <Box mx={{ md: 20 }}>
          <Typography
            fontSize="h6.fontSize"
            fontFamily="Fira Sans"
            fontWeight={400}
          >
            <br />
            <br />
            We are pleased to announce that as of 25 Dec 2021, 23:59, we have
            reached 100% of our required funds for Santa Mission 2021!!
            <br />
            <br />
            This Art Gallery has now stopped receiving donations. We thank you
            for your kind support for the children in Myanmar and Indonesia!
            <br />
            <br />
            Thank you so much for offering your support to this year's Santa
            Mission!
            <br />
            <br />
            <br />
            <br />
            Like previous years, we aim to raise <b>$4000 SGD </b> which will be
            used to purchase brand new T-shirts for all the 250 children we are
            supporting in Myanmar as well as to give them a memorable Christmas
            meal in this once-a-year joyous occasion.
            <br />
            <br />
            Do follow us on{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/globalvillageforhope/"
            >
              our Facebook page
            </a>{" "}
            for the latest updates of our Santa Mission Project.
            <br />
            <br />
            These art pieces are hand drawn by children from the various
            children homes in Myanmar which they would like to gift to donors
            and volunteers like yourself as a way to show their gratitude.
            <br />
            <br />
            Out of more than 200 pictures drawn, these are the highest rated
            ones by our GVH volunteers and we managed to find a way to transport
            these physical copies to Singapore and they are with us in Singapore
            now!
            <br />
            <br />
            Please click on the art pieces that you would like to donate to. If
            you are the highest donor of a particular art piece, we will mail
            the original physical version to you on behalf of the children.
            <br />
            <br />
            You may donate to more than 1 piece of art!
            <br />
            Thank you so much to being the 'Secret Santa' of these children!
          </Typography>
        </Box>
      </Box>

      <Grid container alignItems="center">
        {paintingsData.map((paintingData, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Item>
                <Stack>
                  <img width="100%" src={paintingData.image} />
                  <Box
                    sx={{
                      fontSize: "h6.fontSize",
                      p: 1,
                      color: "text.secondary",
                    }}
                  >
                    <Typography
                      fontSize="h6.fontSize"
                      fontFamily="Fira Sans"
                      fontWeight={600}
                    >
                      {`${paintingData.painter}, ${paintingData.age}`}
                    </Typography>
                    <Typography
                      fontSize="subtitle1.fontSize"
                      fontFamily="Fira Sans"
                      fontWeight={300}
                    >
                      {`from ${paintingData.from}`}
                    </Typography>
                  </Box>

                  <Button
                    onClick={() => {
                      handleClickOpen(index);
                    }}
                    variant="outlined"
                    disabled={disableButtons}
                  >
                    Donate Now
                  </Button>

                  {/* disableScrollLock property prevents the whole page from jumping up when */}
                  {/* the user focuses on a form field */}
                  <Dialog
                    disableScrollLock
                    fullScreen
                    open={open[index]}
                    onClose={() => {
                      handleClose(index);
                    }}
                    TransitionComponent={Transition}
                  >
                    <AppBar sx={{ position: "relative" }}>
                      <Toolbar>
                        <IconButton
                          edge="start"
                          color="inherit"
                          onClick={handleClose}
                          aria-label="close"
                        >
                          <CloseIcon />
                        </IconButton>
                        <Typography
                          sx={{ ml: 2, flex: 1 }}
                          variant="h6"
                          component="div"
                        >
                          Donate to {paintingData.painter}'s painting
                        </Typography>
                      </Toolbar>
                    </AppBar>

                    <Container
                      maxWidth="md"
                      css={{ padding: theme.spacing(3) }}
                    >
                      <PaymentMethod
                        method="paynowpaintings"
                        post={(values) => auctionSubmit(values, paintingData)}
                      />

                      <PaymentMethod
                        method="qrcodepaintings"
                        post={(values) => auctionSubmit(values, paintingData)}
                      />
                    </Container>
                  </Dialog>
                </Stack>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Auction;
