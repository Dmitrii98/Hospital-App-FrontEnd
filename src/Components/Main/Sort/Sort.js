import React, {useEffect, useState} from 'react';
import {
  IconButton,
  MenuItem,
  TextField
} from '@material-ui/core';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import './SortStyles.css';

function Sort(props) {
  const [sortType, setSortType] = useState(false);
  const [filter, setFilter] = useState(false);

  const sortBy = [
    {by: "Имени"},
    {by: "Врачам"},
    {by: "Дате"},
    {by: "None"},
  ];

  const typeOfSort = [
    {type: 'По возрастанию'},
    {type: 'По убыванию'}
  ]

  return (
    <div className="sort">
      <p className='text-sort'>Сортировать по: </p>
      <TextField
        id="input-sort"
        className='input-sort'
        select
        type='text'
        variant="outlined"
        size="small"
        value={props.sort}
        onChange={(e) => props.setSort(e.target.value)}
      >
        {sortBy.map(item => (
          <MenuItem value={item.by}>
            {item.by}
          </MenuItem>
        ))}
      </TextField>
      {props.sort === '' || props.sort === 'None'
        ? ''
        : <div className='sortType'>
          <p className='textSortType'>По направлению: </p>
          <TextField
            id="input-sort"
            className='input-sortType'
            select
            type='text'
            variant="outlined"
            size="small"
            value={props.sortType}
            onChange={(e) => props.setSortType(e.target.value)}
          >
            {typeOfSort.map(item => (
              <MenuItem value={item.type}>
                {item.type}
              </MenuItem>
            ))}
          </TextField>
        </div>
      }
      <div className='filter'>
        <p className='text-filter'>Добавить фильтр по дате: </p>
      <IconButton className='add-filter' aria-label="addFilter" onClick={() => setFilter(true)}>
        <AddBoxOutlinedIcon/>
      </IconButton>
      </div>
    </div>
  );
}

export default Sort;
