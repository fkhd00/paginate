import React from "react";
const Pagination=({perPage,totalUsers,paginate})=>{
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers/perPage); i++) {
      pageNumbers.push(i);
    }
    return(
        <div className="list-container">
            <div className="list">
                {pageNumbers.map(item=>{
                    return(
                        <div key={item} className="page-item">
                            <a href="!#" onClick={()=>paginate(item)} className="page-link">
                                {item}
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
export default Pagination;