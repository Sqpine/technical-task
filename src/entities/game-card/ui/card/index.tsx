import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardType } from "shared/lib";

import scissors from "./assets/scissors.jpg";
import paper from "./assets/paper.jpg";
import rock from "./assets/rock.jpg";

type CardProps = {
  title: string;
  cardType: CardType;
  bottomContent?: React.ReactNode;
};

export const GameCard: React.FC<CardProps> = ({
  title,
  cardType,
  bottomContent,
}) => {
  const cardImages = {
    paper,
    rock,
    scissors,
  };

  return (
    <Card sx={{ minWidth: 200 }}>
      <CardMedia
        sx={{ margin: "auto", height: 130, width: 110 }}
        component="img"
        image={cardImages[cardType]}
        alt={title}
      />
      <CardContent>
        <Typography textAlign="center" variant="h5">
          {title}
        </Typography>
      </CardContent>
      {bottomContent}
    </Card>
  );
};
