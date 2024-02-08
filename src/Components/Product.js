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
                          <div class="card" style={{ width: "19rem" }}>
                            <img
                              src={product.imgSrc}
                              class="card-img-top"
                              alt="..."
                            />
                            <div class="card-body">
                              <h5 class="card-title">{product.title} </h5>
                              <p class="card-text">{product.description} </p>
                              <button className="btn btn-primary mx-3">
                                {product.price}{' '}₹
                              </button>
                              <button className="btn btn-warning ">
                                Add To Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                })

            }
        </div>
    </div>
    </>
)
}
export default Product