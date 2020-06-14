import React, { Fragment, useState, useEffect } from 'react';
const Category = (props) => {
    return(
        <div className="category-wrapper">
            {props.categories.map(category=>{
                let stringColor = props.getColor(category)
                let customStyle = {background: stringColor}
                {
                    if(props.filterCategory.indexOf(category)!=-1)
                        customStyle={"border": "1px solid"+stringColor, "color": stringColor}
                    
                }
                return (
                    
                    <div className="category-badge mx-2" onClick={()=>props.filter(category)} style={customStyle}>{category}</div>
                )
            })}
        </div>
    )
}
export default Category