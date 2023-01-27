import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material";

const StyledPaper = styled(Paper)({
  padding: "1rem",
  textAlign: "center",
  marginTop: 1,
});

const StyledTitle = styled(Typography)({
  fontSize: "24px",
});

const LeanCanvas = ({ leanObject }) => {
  console.log(leanObject);
  return (
    <Grid container spacing={3}>
      <Grid container item xs={3} flexDirection="column">
        <Grid item>
          <StyledPaper>
            <StyledTitle>Problem: {leanObject.problem}</StyledTitle>
          </StyledPaper>
        </Grid>
        <Grid item>
          <StyledPaper>
            <StyledTitle>Existing Alternatives</StyledTitle>
          </StyledPaper>
        </Grid>
      </Grid>
      <Grid container item xs={3} flexDirection="column">
        <Grid item>
          <StyledPaper>
            <StyledTitle>Solutions</StyledTitle>
          </StyledPaper>
        </Grid>
        <Grid item>
          <StyledPaper>
            <StyledTitle>Key Metrics</StyledTitle>
          </StyledPaper>
        </Grid>
      </Grid>
      <Grid container item xs={3} flexDirection="column">
        <Grid item>
          <StyledPaper>
            <StyledTitle>
              Unique Value Proposition:{" "}
              {leanObject.solution.uniqueValueProposition}
            </StyledTitle>
          </StyledPaper>
        </Grid>
        <Grid item>
          <StyledPaper>
            <StyledTitle>
              High Level Concept: {leanObject.solution.highLevelConcept}
            </StyledTitle>
          </StyledPaper>
        </Grid>
      </Grid>
      <Grid container item xs={3} flexDirection="column">
        <Grid item>
          <StyledPaper>
            <StyledTitle>Unfair Advantage</StyledTitle>
          </StyledPaper>
        </Grid>
        <Grid item>
          <StyledPaper>
            <StyledTitle>Channels</StyledTitle>
          </StyledPaper>
        </Grid>
      </Grid>

      <Grid item xs={3}>
        <StyledPaper>
          <StyledTitle>Clients</StyledTitle>
        </StyledPaper>
      </Grid>
      <Grid item xs={3}>
        <StyledPaper>
          <StyledTitle>Customer Segments</StyledTitle>
        </StyledPaper>
      </Grid>
      <Grid item xs={3}>
        <StyledPaper>
          <StyledTitle>Cost Structure</StyledTitle>
        </StyledPaper>
      </Grid>
      <Grid item xs={3}>
        <StyledPaper>
          <StyledTitle>Revenue Streams</StyledTitle>
        </StyledPaper>
      </Grid>
    </Grid>
  );
};

export default LeanCanvas;
