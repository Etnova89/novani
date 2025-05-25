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
          Our therapy sessions are priced to ensure accessibility while
          maintaining the highest quality of care. Below is a breakdown of our
          fees:
        </Typography>
        <Typography variant="body1" paragraph>
          - Individual Therapy: $100 per session
        </Typography>
        <Typography variant="body1" paragraph>
          - Couples Therapy: $150 per session
        </Typography>
        <Typography variant="body1" paragraph>
          - Family Therapy: $200 per session
        </Typography>
        <Typography variant="body1" paragraph>
          Please contact us for sliding scale options or insurance inquiries.
        </Typography>
      </Box>
    </Container>
  );
};

export default FeesPage;
