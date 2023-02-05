import React from 'react'
import {Stack} from '@mui/material';
import { Link } from 'react-router-dom';
import {logo} from '../utils/constants';
import SearchBar from './SearchBar';
import { fontFamily, fontSize, padding } from '@mui/system';

const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between"}}>
      <Link to="/" style={{display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <p style={{color:"white", fontSize:"30px", paddingLeft:"5px", fontFamily:"sans-serif"}}>Marcos<b>Tube</b></p>
      <SearchBar/>
      </Link>
    </Stack>
  )


export default Navbar
