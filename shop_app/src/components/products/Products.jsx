import React from "react";
import { Grid } from "@mui/material";
import Product from "./product/Product";
import useStyles from './productsStyles'

// const products = [
//   {
//     id: 1,
//     name: "trimmer",
//     price: "Rs.1000",
//     img: "https://images.unsplash.com/photo-1508380702597-707c1b00695c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJpbW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//     desc: "mat finished trimmer kjskljaslk aajsdasd jksjdaksdj ",
//   },
//   {
//     id: 1,
//     name: "trimmer",
//     price: "Rs.1000",
//     img: "https://images.unsplash.com/photo-1508380702597-707c1b00695c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJpbW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//     desc: "mat finished trimmer ",
//   },
//   {
//     id: 1,
//     name: "trimmer",
//     price: "Rs.1000",
//     img: "https://images.unsplash.com/photo-1508380702597-707c1b00695c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJpbW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//     desc: "mat finished trimmer ",
//   },
// ];

const Products = ({products,addToCart}) => {
  const styles = useStyles();
  return (
    <main className={styles.content}>
      <div className={styles.toolbar}/>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} addToCart={addToCart}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
