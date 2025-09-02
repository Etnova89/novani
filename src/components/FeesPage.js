import React from "react";
import { Typography, Container, Box } from "@mui/material";

const FeesPage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
        color: "text.primary",
        animation: "fadeIn 1.5s ease-in-out",
        "@keyframes fadeIn": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      <Container maxWidth="xl" sx={{ mt: 1, mb: 8, flexGrow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
          }}
        >
          <Box
            sx={{
              bgcolor: "custom.accent1",
              borderRadius: 1,
              boxShadow: 1,
              p: 4,
              textAlign: "center",
              width: "66.67%",
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              color="text.primary"
              sx={{ mb: 3 }}
            >
              Fees
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              paragraph
              sx={{ mb: 3 }}
            >
              Dr. Heena believes therapy is a mutual investment between
              therapist and patient. To ensure each person receives thoughtful,
              individualized care, she intentionally maintains a small and
              focused practice. Below are fees for services:
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ mb: 2 }}
              >
                <Typography component="span" fontWeight="bold">
                  Individual Therapy:
                </Typography>{" "}
                $275 per 55-min session
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ mb: 2 }}
              >
                <Typography component="span" fontWeight="bold">
                  Couple Therapy:
                </Typography>{" "}
                $375 per 55-min session
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ mb: 2 }}
              >
                <Typography component="span" fontWeight="bold">
                  Family Therapy:
                </Typography>{" "}
                $400 per 55-min session
              </Typography>
            </Box>

            <Typography variant="h6" color="text.secondary">
              A few sliding scale fee options are offered. Please contact Dr.
              Heena for more information.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeesPage;
