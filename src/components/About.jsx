import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Link,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "secondary" }}
        >
          About This Project
        </Typography>
      </motion.div>

      <Typography variant="body1" gutterBottom>
        This project showcases a unique way of managing and presenting my Shells
        fuel receipts. The receipts are parsed using JavaScript and processed
        via Google App Script to populate a Google Sheet. The Google Sheet is
        then published as a CSV file and integrated into this application. Every
        time the spreadsheet updates, the application reflects the changes in
        real-time. This seamless connection demonstrates the power of
        JavaScript, Google App Script, and modern web development practices.
      </Typography>

      <Typography
        variant="h4"
        sx={{ mt: 4, fontWeight: "bold", color: "primary" }}
      >
        Dependencies Overview
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>React:</strong> The core framework for building this single-page
        application, providing a robust and modular approach to UI development.
        <br />
        <strong>Material-UI:</strong> A comprehensive library of React
        components that helps create a responsive and visually appealing user
        interface.
        <br />
        <strong>Framer Motion:</strong> A library for creating elegant
        animations and transitions, adding life to various elements in the app.
        <br />
        <strong>Recharts:</strong> A charting library built with React, used for
        creating visually appealing and customizable data visualizations.
        <br />
        <strong>Tailwind CSS:</strong> A utility-first CSS framework that speeds
        up styling by using predefined classes, ensuring a consistent and
        responsive design.
        <br />
        <strong>Papaparse:</strong> A powerful CSV parser for JavaScript, used
        to process and integrate CSV data from the Google Sheet into this
        project.
        <br />
        <strong>React Router:</strong> A library for managing navigation and
        routing between pages in this single-page application.
        <br />
      </Typography>

      {/* Personal Story Section */}
      <Typography
        variant="h4"
        sx={{ mt: 4, fontWeight: "bold", color: "primary" }}
      >
        Personal Story
      </Typography>
      <Typography variant="body1" gutterBottom>
        I started collecting my receipts while I was trucking and managing my
        own taxes. Leasing my truck felt like running my own business, and
        keeping track of every receipt was essential. Eventually, I took a break
        and attended Coding Dojo, where I had the idea of using my email data
        for a project but lacked the skills to extract it. After years of
        learning and gaining experience, I am thrilled to present this project,
        which brings my idea to life. It’s a testament to persistence and
        growth. I hope you enjoy exploring it!
      </Typography>

      {/* Contact Section */}
      <Grid container spacing={4} sx={{ mt: 6 }}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: -350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card
              sx={{
                textAlign: "center",
                p: 3,
                boxShadow: "0px 4px 6px rgb(250, 204, 20)",
              }}
            >
              <Avatar
                src="/profilePic.jpg"
                alt="Your Name"
                sx={{
                  width: 120,
                  height: 120,
                  mx: "auto",
                  mb: 2,
                }}
              />
              <Typography variant="h5" gutterBottom>
                Daniel Garcia
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Developer | Cybersecurity Student | Problem Solver
              </Typography>
              <Box mt={2}>
                <Link
                  href="https://github.com/doughminicano"
                  target="_blank"
                  rel="noopener"
                  sx={{ mx: 1 }}
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/daniel-garcia-14b217210/"
                  target="_blank"
                  rel="noopener"
                  sx={{ mx: 1 }}
                >
                  LinkedIn
                </Link>
              </Box>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card
              sx={{
                p: 3,
                textAlign: "left",
                boxShadow: "0px 4px 6px rgb(250, 204, 20)",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Key Features:
              </Typography>
              <Typography variant="body2" gutterBottom>
                - Real-time updates from Google Sheets.
                <br />
                - Clean and responsive UI built with Material-UI & Tailwindcss.
                <br />
                - Charts to visualize data effectively.
                <br />
              </Typography>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}
