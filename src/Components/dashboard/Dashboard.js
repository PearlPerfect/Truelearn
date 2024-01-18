import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useEffect,useState,useRef} from 'react'
import styles from "./dashboard.module.css";
import { auth } from "@/services/_config";
import { InputAdornment,TextField } from "@mui/material";
import { useRouter } from 'next/router';



export default function Dashboard(){
    const [name,setName] = useState()
    const router = useRouter();
    useEffect(() => {
        // Retrieve the user's name from query parameters
        const { name } = router.query;
    
        if (name) {
          console.log(`Hello, ${name}`);
         let userName = name.split("@");
          setName(userName[0])
        }
      }, [router.query]);
    
    return(
        <>     
            <div className={styles.container}>

        <div className={styles.User}>  
           <h1 className={styles.UserName}>{name} </h1>
        </div>
        </div>
        <div className={styles.search}>
            <div>
            <h1 className={styles.greet}>Hello, {name}</h1>
            <p className={styles.greetP}>Here are your recorded videos</p>
            </div>
           <TextField
        sx={{  width: "30vw"}}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        {/* <Image src={searchIcon} alt="" /> */}
      </InputAdornment>
    ),
  }}
  placeholder="Search..."
  variant="outlined"
/>
           {/* <Image src={searchIcon} alt="search Icon"  className={styles.searchIcon}  ></Image> */}
    
           </div>


        </>
    )
}