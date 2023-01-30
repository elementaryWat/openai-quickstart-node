import React, { useState } from "react";
import { Grid, Paper, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { LEAN_CANVAS_COLORS, LEAN_CANVAS_OBJECT } from "../api/generate";

const StyledPaper = styled(Paper)((props) => ({
  padding: "1rem",
  textAlign: "center",
  height: "100%",
  backgroundColor: props.backgroundColor,
}));

const StyledTitle = styled(Typography)({
  fontSize: "24px",
});

const LeanCanvas = ({ leanObject }) => {
  const [state, setState] = useState(LEAN_CANVAS_OBJECT);
  const [editing, setEditing] = useState("");

  const handleChange = (e, field) => {
    setState({
      ...state,
      [field]: e.target.value,
    });
  };
  return (
    <>
      <StyledTitle>
        <b>Name</b>:{leanObject.name}
      </StyledTitle>
      <Grid container spacing={2} p={2} mb={2}>
        <Grid container item xs={3} flexDirection="column">
          <Grid item>
            <StyledPaper
              onClick={() => setEditing("name")}
              backgroundColor={LEAN_CANVAS_COLORS.customers.pains}
            >
              {editing === "name" ? (
                <TextField
                  value={state.customers.pains}
                  onChange={(e) => handleChange(e, "customers.pains")}
                  fullWidth
                />
              ) : (
                <StyledTitle>
                  <b>Problems</b>:{" "}
                  {leanObject.customers.pains.map(
                    (pain, index) =>
                      `${pain}${
                        index != leanObject.customers.pains.length - 1
                          ? ","
                          : ""
                      }`
                  )}
                </StyledTitle>
              )}
            </StyledPaper>
          </Grid>
          <Grid item>
            <StyledPaper
              backgroundColor={LEAN_CANVAS_COLORS.solution.existingAlternatives}
            >
              <StyledTitle>
                <b>Existing Alternatives</b>:{" "}
                {leanObject.solution.existingAlternatives.map(
                  (alternative, index) =>
                    `${alternative}${
                      index !=
                      leanObject.solution.existingAlternatives.length - 1
                        ? ","
                        : ""
                    }`
                )}
              </StyledTitle>
            </StyledPaper>
          </Grid>
        </Grid>
        <Grid container item xs={3} flexDirection="column">
          <StyledPaper
            backgroundColor={LEAN_CANVAS_COLORS.solution.uniqueValueProposition}
          >
            <StyledTitle>
              <b>Unique Value Proposition:</b>{" "}
              {leanObject.solution.uniqueValueProposition}
            </StyledTitle>
          </StyledPaper>
        </Grid>
        <Grid container item xs={3} flexDirection="column">
          <Grid item>
            <StyledPaper backgroundColor={LEAN_CANVAS_COLORS.unfairAdvantages}>
              <StyledTitle>
                <b>Unfair Advantage</b>:{" "}
                {leanObject.unfairAdvantages.map(
                  (advantage, index) =>
                    `${advantage}${
                      index != leanObject.unfairAdvantages.length - 1 ? "," : ""
                    }`
                )}
              </StyledTitle>
            </StyledPaper>
          </Grid>
          <Grid item>
            <StyledPaper backgroundColor={LEAN_CANVAS_COLORS.channels}>
              <StyledTitle>
                <b>Channels</b>:{" "}
                {leanObject.channels.map(
                  (channel, index) =>
                    `${channel}${
                      index != leanObject.channels.length - 1 ? "," : ""
                    }`
                )}
              </StyledTitle>
            </StyledPaper>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <StyledPaper backgroundColor={LEAN_CANVAS_COLORS.customers.segments}>
            <StyledTitle>
              <b>Customer Segments</b>:{" "}
              {leanObject.customers.segments.map(
                (segment, index) =>
                  `${segment}${
                    index != leanObject.customers.segments.length - 1 ? "," : ""
                  }`
              )}
            </StyledTitle>
          </StyledPaper>
        </Grid>
        <Grid item xs={6}>
          <StyledPaper backgroundColor={LEAN_CANVAS_COLORS.costStructure}>
            <StyledTitle>
              <b>Cost Structure</b>:{" "}
              {leanObject.costStructure.map(
                (cost, index) =>
                  `${cost}${
                    index != leanObject.costStructure.length - 1 ? "," : ""
                  }`
              )}
            </StyledTitle>
          </StyledPaper>
        </Grid>
        <Grid item xs={6}>
          <StyledPaper backgroundColor={LEAN_CANVAS_COLORS.revenueStreams}>
            <StyledTitle>
              <b>Revenue Streams</b>:{" "}
              {leanObject.revenueStreams.map(
                (stream, index) =>
                  `${stream}${
                    index != leanObject.revenueStreams.length - 1 ? "," : ""
                  }`
              )}
            </StyledTitle>
          </StyledPaper>
        </Grid>
      </Grid>
    </>
  );
};

export default LeanCanvas;
