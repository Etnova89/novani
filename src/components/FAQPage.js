import React, { useState } from "react";
import {
  Typography,
  Container,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQPage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: "What is therapy?",
      answer:
        "Therapy is a collaborative process where you work with a trained professional to address emotional, psychological, or relational challenges.",
    },
    {
      question: "How long are sessions?",
      answer:
        "Sessions typically last 55 minutes. Therapy sessions may be scheduled for 75 or 90-minutes, with fees adjusted accordingly based on the extended duration.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "No, Dr. Manglani-Terranova is an out-of-network provider. However, she offers monthly superbills that you can submit to your insurance company for potential reimbursement directly to you. Below are questions to ask your insurance for out-of-network coverage for behavioral health: Do I have out-of-network benefits for behavioral health? If so, what is the percentage covered? Is there a deductible I need to meet before that percentage is covered? Is there a session limit? How do I submit for reimbursement? What is the reimbursement for the code: 90791 (Intake evaluation); 90837 (Individual therapy), 90847 (Couple/Family therapy)",
    },
    // {
    //   question: "What does Dr. Manglani-Terranova specialize in?",
    //   answer:
    //     "Dr. Manglani-Terranova specializes in the following: Individuals (e.g., life transitions, relational stress, depression/anxiety), couples and families (e.g., multi-heritage couples, intergenerational trauma, life transitions), and behavioral medicine (e.g., adjustment to new chronic diagnoses)",
    // },
    // {
    //   question: "Where is the office located?",
    //   answer:
    //     "Dr. Manglani-Terranova operates from Cambridge, MA. She also offers virtual services to people in MA, FL, and CA.",
    // },
    // {
    //   question: "How does virtual therapy work?",
    //   answer:
    //     "Virtual therapy sessions are conducted through secure, HIPAA-compliant video conferencing platforms, allowing you to receive therapy from the comfort of your own space.",
    // },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
        color: "text.primary",
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
              width: "66.67%",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              color="text.primary"
              sx={{ mb: 4, textAlign: "center" }}
            >
              Frequently Asked Questions
            </Typography>

            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  mb: 2,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                  "&:before": {
                    display: "none",
                  },
                  boxShadow: 1,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    bgcolor: "background.paper",
                    borderRadius: 1,
                    "&:hover": {
                      bgcolor: "action.hover",
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="text.primary"
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    bgcolor: "background.paper",
                    pt: 0,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQPage;
