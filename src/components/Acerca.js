import React, { useState, useEffect } from "react";
import Products from "./Products"
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { fetchCategories, fetchProducts, fetchImageURL } from "../api";

export default function Acerca (){
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        try {
            const data = await fetchCategories()
            setCategories( data);
        }catch(err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        getCategories()
    }, [])

    return(
        <>
            <div className="Acerca">
                <Products categories={categories} />
            </div>
        </>
    )
}
