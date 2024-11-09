import React, { useState } from 'react';
import { TextField, Menu, MenuItem, Button, InputAdornment } from '@mui/material';
import { CiFilter } from 'react-icons/ci';
import { IoIosArrowDown } from "react-icons/io";
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={styles.header}>
      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <TextField
          variant="outlined"
          placeholder="Search project"
          className={styles.searchInput}
          size="small"
          InputProps={{
            style: { paddingLeft: 8, borderRadius: 20 },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={styles.searchIcon} />
              </InputAdornment>
            ),
          }}
        />
      </div>

      {/* Filter Button with Dropdown */}
      <div className={styles.filterContainer}>
        <Button
          variant="outlined"
          startIcon={<CiFilter />}
          endIcon={<IoIosArrowDown />}
          onClick={handleFilterClick}
          className={styles.filterButton}
        >
          Filter
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleFilterClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleFilterClose}>Option 1</MenuItem>
          <MenuItem onClick={handleFilterClose}>Option 2</MenuItem>
          <MenuItem onClick={handleFilterClose}>Option 3</MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
