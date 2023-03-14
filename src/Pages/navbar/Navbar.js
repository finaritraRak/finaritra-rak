import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import {Link} from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>

        <Link to="/"><AiOutlineHome /></Link>
        <Link to="/portfolio"><AiOutlineUser /></Link>
        <Link to="/blog"><BiBook /></Link>
        <Link to="/"><RiServiceLine /></Link>
        <Link to="/"><BiMessageSquareDetail /></Link>

    </nav>
  )
}

export default Navbar;
