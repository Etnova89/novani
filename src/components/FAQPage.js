import React from "react";
import { Typography, Container, Box } from "@mui/material";

const FAQPage = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Q: What is therapy?</strong>
        </Typography>
        <Typography variant="body2" paragraph>
          A: Therapy is a collaborative process where you work with a trained
          professional to address emotional, psychological, or relational
          challenges.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Q: How long are sessions?</strong>
        </Typography>
        <Typography variant="body2" paragraph>
          A: Sessions typically last 50 minutes.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Q: Do you accept insurance?</strong>
        </Typography>
        <Typography variant="body2" paragraph>
          A: Please contact us to discuss insurance options and coverage.
        </Typography>
      </Box>
    </Container>
  );
};

export default FAQPage;
