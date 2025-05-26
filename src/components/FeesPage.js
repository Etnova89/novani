import React from "react";
import { Typography, Container, Box } from "@mui/material";

const FeesPage = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Fees
        </Typography>
        <Typography variant="body1" paragraph>
          Dr. Manglani-Terranova believes therapy is a mutual investment between therapist and patient. To ensure each person receives thoughtful, individualized care, she intentionally maintains a small and focused practice. Below are fees for services:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Individual Therapy:</strong> $275 per 55-min session
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Couple Therapy:</strong> $375 per 55-min session
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Family Therapy:</strong> $400 per 55-min session
        </Typography>
        <Typography variant="body1" paragraph>
          Please contact Dr. Manglani-Terranova for psychotherapy intensive packages.
        </Typography>
      </Box>
    </Container>
  );
};

export default FeesPage;
