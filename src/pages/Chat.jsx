import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Paper,
  TextField,
  Button,
  CircularProgress,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { AiOutlineUser, AiOutlineRobot, AiOutlineSend } from "react-icons/ai";

const ChatContainer = styled(Container)({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "0",
});

const ChatCard = styled(Paper)({
  flex: 1,
  overflowY: "auto",
  padding: "16px",
  marginBottom: "16px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Shadow effect
  borderRadius: "12px",
});

const ChatInput = styled(Paper)({
  padding: "16px",
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Shadow effect
  borderRadius: "12px",
});

const SendButton = styled(Button)({
  marginLeft: "16px",
});

const UserMessage = styled(Box)({
  backgroundColor: "#DCF8C6", // Light green background for user messages
  padding: "8px",
  borderRadius: "12px",
  alignSelf: "flex-start",
  display: "flex",
  alignItems: "center",
});

const BotMessage = styled(Box)({
  backgroundColor: "#E8E8E8", // Light gray background for bot messages
  padding: "8px",
  borderRadius: "12px",
  alignSelf: "flex-end",
  display: "flex",
  alignItems: "center",
});

function Chat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const generateAnswer = async (e) => {
    e.preventDefault();
    if (!question.trim()) {
      return; // If question is empty, do nothing
    }
    setGeneratingAnswer(true);
    const userMessage = { text: question, from: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyB-scXq-SGLrVJChjxbHQb191NZ87FIzek",
        {
          contents: [{ parts: [{ text: question }] }],
        }
      );

      const aiMessage = {
        text: response.data.candidates[0].content.parts[0].text,
        from: "ai",
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Failed to generate answer", error);
      const errorMessage = {
        text: "Sorry - Something went wrong. Please try again!",
        from: "ai",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setGeneratingAnswer(false);
    setQuestion("");
  };

  return (
    <ChatContainer maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Vidhyalaya
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Ask your query about your favorite college according to your need
      </Typography>
      <ChatCard elevation={3}>
        {messages.map((message, index) => (
          <Box key={index} display="flex" alignItems="center" mb={2}>
            {message.from === "user" ? (
              <UserMessage>
                <AiOutlineUser
                  style={{ marginRight: "8px", fontSize: "1.5rem" }}
                />
                <Typography variant="body1">{message.text}</Typography>
              </UserMessage>
            ) : (
              <BotMessage>
                <AiOutlineRobot
                  style={{ marginRight: "8px", fontSize: "1.5rem" }}
                />
                <Typography variant="body1">{message.text}</Typography>
              </BotMessage>
            )}
          </Box>
        ))}
        {generatingAnswer && (
          <Box display="flex" alignItems="center" mb={2}>
            <CircularProgress size={24} style={{ marginRight: "8px" }} />
            <Typography variant="body1">Loading your answer...</Typography>
          </Box>
        )}
      </ChatCard>
      <ChatInput elevation={3}>
        <form
          onSubmit={generateAnswer}
          style={{ width: "100%", display: "flex", alignItems: "center" }}
        >
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Ask anything..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <SendButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={generatingAnswer || question.trim() === ""}
            endIcon={
              generatingAnswer ? (
                <CircularProgress size={24} />
              ) : (
                <AiOutlineSend />
              )
            }
          >
            Send
          </SendButton>
        </form>
      </ChatInput>
    </ChatContainer>
  );
}

export default Chat;
