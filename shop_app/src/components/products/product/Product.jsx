import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import useStyles from "./productStyles";

const Product = ({ product,addToCart}) => {
  const styles = useStyles();

  // console.log("ksdsds", product);
  return (
    <Card className={styles.root}>
      <CardMedia
        className={styles.media}
        image={product.image.url}
        title={product.name}
      ></CardMedia>
      <CardContent>
        <div className={styles.cardContent}>
          <Typography variant="h5" gutterBottom>
            {" "}
            {product.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {" "}
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="black"
        ></Typography>
      </CardContent>
      <CardActions disableSpacing className={styles.cardAction}>
        <IconButton aria-label="Add to cart">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
