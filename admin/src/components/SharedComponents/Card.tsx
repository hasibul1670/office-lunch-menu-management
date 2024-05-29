/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { dateFormater } from "../../utils/dateFormater";
import { Button } from "./Button";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardComponent({ data }: any) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{ maxWidth: 270, padding: 2, bgcolor: "#fff8e1" }}
      className="bg-red-400 mt-5 ml-5"
    >
      <CardMedia
        component="img"
        sx={{ height: 140 }}
        image="https://lifeloveandgoodfood.com/wp-content/uploads/2023/03/chicken_fried_rice00032a-1200x1200-1.jpg"
        alt="Fried Rice dish"
      />

      <p className="text-xl font-bold"> {data.menuName} </p>
      <p> {dateFormater(data?.date)} </p>

      <CardActions disableSpacing>
        <div className="sm:col-span-1">
          <Button className="bg-sky-600 text-bold">Select </Button>
        </div>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {data.option_details.map((op: any, index: any) => (
            <div
              key={index}
              className="border-2 border-blue-600 mb-2 rounded-md p-2"
            >
              <p className="font-semibold">Item Name: {op.option_name}</p>
              <Typography paragraph>
                Item Description: {op.description}
              </Typography>
            </div>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
