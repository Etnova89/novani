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
      answer: (
        <>
          No, Dr. Manglani-Terranova is an out-of-network provider. However, she
          offers monthly superbills that you can submit to your insurance
          company for potential reimbursement directly to you. Below are
          questions to ask your insurance for out-of-network coverage for
          behavioral health:
          <ul>
            <li>Do I have out-of-network benefits for behavioral health?</li>
            <li>If so, what is the percentage covered?</li>
            <li>
              Is there a deductible I need to meet before that percentage is
              covered?
            </li>
            <li>How do I submit for reimbursement?</li>
            <li>
              What is the reimbursement for the code: 90791 (Intake evaluation);
              90837 (Individual therapy), 90847 (Couple/Family therapy)"
            </li>
            <li>Is there a session limit?</li>
          </ul>{" "}
        </>
      ),
    },
    {
      question: "Where are sessions held?",
      answer:
        "Currently, all sessions are provided virtually using HIPPA-compliant software. This allows patients the flexibility to meet with Dr. Heena from the comfort of their home.",
    },
    {
      question: "How is therapy different from coaching and consulting?",
      answer: (
        <>
          Therapy focuses on mental health, emotional well-being, and healing.
          It often involves exploring past experiences, managing symptoms, and
          developing coping strategies. Therapy is appropriate when there are
          concerns such as anxiety, depression, trauma, or relationship
          difficulties. Payment is typically per session, and patients receive
          statements (superbills) for insurance reimbursement, if eligible.{" "}
          <br />
          <br />
          Coaching and Consulting services are future-oriented and goal-driven.
          They focus on personal growth, skill-building, and performance
          enhancement rather than diagnosing or treating mental health
          conditions. Coaching is ideal for individuals seeking clarity,
          accountability, and actionable strategies to achieve specific goals.
          Consulting often involves working with organizations or teams to
          improve systems, communication, and workplace well-being. These
          services are not covered by health insurance because they do not
          involve mental health treatment or a diagnosis. Payment is usually
          out-of-pocket and often structured as:
          <ul>
            <li>
              Per session or per hour Flat-rate packages for individuals or
              organizations
            </li>
            <li>Customized pricing for workshops</li>
            <li>consulting engagements</li>
          </ul>{" "}
        </>
      ),
    },
    {
      question: "What is the No Surprises Act?",
      answer: (
        <>
          All patients have the right to receive a “Good Faith Estimate”
          explaining how much your mental health care will cost. Patients can
          request an estimate before scheduling or at any point during
          treatment. For more information:{" "}
          <a
            href="https://www.cms.gov/nosurprises"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4CAF50", textDecoration: "underline" }}
          >
            https://www.cms.gov/nosurprises
          </a>
        </>
      ),
    },
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
                    variant="h6"
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
                  <Typography variant="body1" color="text.secondary">
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
