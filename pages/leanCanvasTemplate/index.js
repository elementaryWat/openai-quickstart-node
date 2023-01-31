import React, { useState } from "react";
import { Grid, Paper, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { LEAN_CANVAS_COLORS } from "../api/generate";

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
  const [state, setState] = useState(leanObject);
  const [editing, setEditing] = useState("");

  const handleChange = (e, field, isArray) => {
    let newValue = isArray ? e.target.value.split(",") : e.target.value;
    setState({
      ...state,
      [field]: newValue,
    });
  };
  const handleKeyDown = (e, field) => {
    if (e.key === "Enter") {
      setEditing(null);
    }
  };
  return (
    <>
      <StyledTitle>
        <b>Name</b>:{state.name}
      </StyledTitle>
      <Grid container spacing={2} p={2} mb={2}>
        <Grid container item xs={3} flexDirection="column">
          <Grid item>
            <StyledPaper
              onClick={() => setEditing("name")}
              backgroundColor={LEAN_CANVAS_COLORS.customerPains}
            >
              {editing === "name" ? (
                <TextField
                  multiline
                  value={state.customerPains}
                  label="Problems"
                  onChange={(e) => handleChange(e, "customerPains", true)}
                  onKeyDown={(e) => handleKeyDown(e, "customerPains")}
                  fullWidth
                />
              ) : (
                <StyledTitle>
                  <b>Problems</b>:{" "}
                  {state.customerPains.map(
                    (pain, index) =>
                      `${pain}${
                        index != state.customerPains.length - 1 ? "," : ""
                      }`
                  )}
                </StyledTitle>
              )}
            </StyledPaper>
          </Grid>
          <Grid item>
            <StyledPaper
              onClick={() => setEditing("existingAlternatives")}
              backgroundColor={LEAN_CANVAS_COLORS.existingAlternatives}
            >
              {editing === "existingAlternatives" ? (
                <TextField
                  multiline
                  value={state.existingAlternatives}
                  label="Existing Alternatives"
                  onChange={(e) =>
                    handleChange(e, "existingAlternatives", true)
                  }
                  onKeyDown={(e) => handleKeyDown(e, "existingAlternatives")}
                  fullWidth
                />
              ) : (
                <StyledTitle>
                  <b>Existing Alternatives</b>:{" "}
                  {state.existingAlternatives.map(
                    (alternative, index) =>
                      `${alternative}${
                        index != state.existingAlternatives.length - 1
                          ? ","
                          : ""
                      }`
                  )}
                </StyledTitle>
              )}
            </StyledPaper>
          </Grid>
        </Grid>
        <Grid container item xs={3} flexDirection="column">
          <StyledPaper
            onClick={() => setEditing("uniqueValueProposition")}
            backgroundColor={LEAN_CANVAS_COLORS.uniqueValueProposition}
          >
            {editing === "uniqueValueProposition" ? (
              <TextField
                multiline
                value={state.uniqueValueProposition}
                label="Unique Value Proposition"
                onChange={(e) => handleChange(e, "uniqueValueProposition")}
                onKeyDown={(e) => handleKeyDown(e, "uniqueValueProposition")}
                fullWidth
              />
            ) : (
              <StyledTitle>
                <b>Unique Value Proposition:</b> {state.uniqueValueProposition}
              </StyledTitle>
            )}
          </StyledPaper>
        </Grid>
        <Grid container item xs={3} flexDirection="column">
          <Grid item>
            <StyledPaper
              onClick={() => setEditing("unfairAdvantages")}
              backgroundColor={LEAN_CANVAS_COLORS.unfairAdvantages}
            >
              {editing === "unfairAdvantages" ? (
                <TextField
                  multiline
                  value={state.unfairAdvantages}
                  label="Unfair Advantages"
                  onChange={(e) => handleChange(e, "unfairAdvantages", true)}
                  onKeyDown={(e) => handleKeyDown(e, "unfairAdvantages")}
                  fullWidth
                />
              ) : (
                <StyledTitle>
                  <b>Unfair Advantage</b>:{" "}
                  {state.unfairAdvantages.map(
                    (advantage, index) =>
                      `${advantage}${
                        index != state.unfairAdvantages.length - 1 ? "," : ""
                      }`
                  )}
                </StyledTitle>
              )}
            </StyledPaper>
          </Grid>
          <Grid item>
            <StyledPaper
              onClick={() => setEditing("channels")}
              backgroundColor={LEAN_CANVAS_COLORS.channels}
            >
              {editing === "channels" ? (
                <TextField
                  multiline
                  value={state.channels}
                  label="Channels"
                  onChange={(e) => handleChange(e, "channels", true)}
                  onKeyDown={(e) => handleKeyDown(e, "channels")}
                  fullWidth
                />
              ) : (
                <StyledTitle>
                  <b>Channels</b>:{" "}
                  {state.channels.map(
                    (channel, index) =>
                      `${channel}${
                        index != state.channels.length - 1 ? "," : ""
                      }`
                  )}
                </StyledTitle>
              )}
            </StyledPaper>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <StyledPaper
            onClick={() => setEditing("customerSegments")}
            backgroundColor={LEAN_CANVAS_COLORS.customerSegments}
          >
            {editing === "customerSegments" ? (
              <TextField
                multiline
                value={state.customerSegments}
                label="Customer Segments"
                onChange={(e) => handleChange(e, "customerSegments", true)}
                onKeyDown={(e) => handleKeyDown(e, "customerSegments")}
                fullWidth
              />
            ) : (
              <StyledTitle>
                <b>Customer Segments</b>:{" "}
                {state.customerSegments.map(
                  (segment, index) =>
                    `${segment}${
                      index != state.customerSegments.length - 1 ? "," : ""
                    }`
                )}
              </StyledTitle>
            )}
          </StyledPaper>
        </Grid>
        <Grid item xs={6}>
          <StyledPaper
            onClick={() => setEditing("costStructure")}
            backgroundColor={LEAN_CANVAS_COLORS.costStructure}
          >
            {editing === "costStructure" ? (
              <TextField
                multiline
                value={state.costStructure}
                label="Cost Structure"
                onChange={(e) => handleChange(e, "costStructure", true)}
                onKeyDown={(e) => handleKeyDown(e, "costStructure")}
                fullWidth
              />
            ) : (
              <StyledTitle>
                <b>Cost Structure</b>:{" "}
                {state.costStructure.map(
                  (cost, index) =>
                    `${cost}${
                      index != state.costStructure.length - 1 ? "," : ""
                    }`
                )}
              </StyledTitle>
            )}
          </StyledPaper>
        </Grid>
        <Grid item xs={6}>
          <StyledPaper
            onClick={() => setEditing("revenueStreams")}
            backgroundColor={LEAN_CANVAS_COLORS.revenueStreams}
          >
            {editing === "revenueStreams" ? (
              <TextField
                multiline
                value={state.revenueStreams}
                label="Revenue Streams"
                onChange={(e) => handleChange(e, "revenueStreams", true)}
                onKeyDown={(e) => handleKeyDown(e, "revenueStreams")}
                fullWidth
              />
            ) : (
              <StyledTitle>
                <b>Revenue Streams</b>:{" "}
                {state.revenueStreams.map(
                  (stream, index) =>
                    `${stream}${
                      index != state.revenueStreams.length - 1 ? "," : ""
                    }`
                )}
              </StyledTitle>
            )}
          </StyledPaper>
        </Grid>
      </Grid>
    </>
  );
};

export default LeanCanvas;
