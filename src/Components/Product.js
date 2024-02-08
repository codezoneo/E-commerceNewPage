import React from "react";
import items from "./Data";
 

const Product = ()=>{
return (
    <>
    <div className="container my-5">
        <div className="row">
            {
                items.map((product)=>{
                    return (
                        <>
                        <div className="col-lg-4 my-3 text-center">

                        <div class="card" style={{width:'19rem'}} >
  <img src={product.imgSrc} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
                       
                        </>
                    )
                })

            }
        </div>
    </div>
    </>
)
}
export default Product