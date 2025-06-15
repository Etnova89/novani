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
          A: Sessions typically last 55 minutes. Therapy sessions may be scheduled for 75 or 90-minutes, with fees adjusted accordingly based on the extended duration.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Q: Do you accept insurance?</strong>
        </Typography>
        <Typography variant="body2" paragraph>
          A: No, Dr. Manglani-Terranova is an out-of-network provider. However, she offers monthly superbills that you can submit to your insurance company for potential reimbursement directly to you. Below are questions to ask your insurance for out-of-network coverage for behavioral health:  
          Do I have out-of-network benefits for behavioral health?
If so, what is the percentage covered?
Is there a deductible I need to meet before that percentage is covered?
Is there a session limit?
How do I submit for reimbursement?
What is the reimbursement for the code: 90791 (Intake evaluation); 90837 (Individual therapy), 90847 (Couple/Family therapy)
What does Dr. Manglani-Terranova specialize in?
Dr. Manglani-Terranova specializes in the following: 
Individuals (e.g., life transitions, relational stress, depression/anxiety), couples and families (e.g., multi-heritage couples, intergenerational trauma, life transitions), and behavioral medicine (e.g., adjustment to new chronic diagnoses)

What is the office located?
Dr. Manglani-Terranova operates from Cambridge, MA. She also offers virtual services to people in MA, FL, and CA.

How does virtual therapy work? 
</strong>
        </Typography>
      </Box>
    </Container>
  );
};

export default FAQPage;
