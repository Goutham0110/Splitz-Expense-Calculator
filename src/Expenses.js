import React from "react";
import { useState } from "react";
import {
  Grid,
  Stack,
  Box,
  Card,
  Typography,
  Button,
  Avatar,
} from "@mui/material";

export default function Expenses() {
  const testData = [
    {
      name: "Luffy",
      spent: 300,
    },
    {
      name: "Zoro",
      spent: 280,
    },
    {
      name: "Sanji",
      spent: 250,
    },
    {
      name: "Brook",
      spent: 200,
    },
    {
      name: "Chopper",
      spent: 50,
    },
  ];
  const [expenses, setExpenses] = useState(testData);

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    if (name.split(" ").length > 1) {
      return {
        sx: {
          bgcolor: stringToColor(name),
        },
        children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
      };
    } else {
      return {
        sx: {
          bgcolor: stringToColor(name),
        },
        children: `${name[0]}`,
      };
    }
  }
  return (
    <div>
      <Box sx={{ display: "flex", m: 5 }}>
        <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 4, md: 12 }}>
          {expenses.map((person, ind) => {
            let name = person.name;
            return (
              <Grid item xs={2} md={3} key={ind}>
                <Card sx={{ p: 3, height: "11vh" }}>
                  <Stack direction="row" spacing={3}>
                    <Avatar
                      {...stringAvatar(name)}
                      sx={{ width: 42, height: 42 }}
                    />
                    <Box>
                      <Typography variant="h6">{person.name}</Typography>
                      <Typography variant="body1">
                        Spent {person.spent}
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ justifyContent: "flex-end", marginTop: 1 }}
                  >
                    <Button variant="text" color="error">
                      Delete
                    </Button>
                    <Button variant="text">Edit</Button>
                  </Stack>
                </Card>
              </Grid>
            );
          })}
          <Grid item xs={2} md={3}>
            <Card sx={{ p: 3, height: "11vh" }}>
              <Typography variant="h6">Add Expense</Typography>
              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: "flex-end", marginTop: 4 }}
              >
                <Button variant="text">Add</Button>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
