import React, {useState} from 'react';
import {
  Button,
  IconButton,
  MenuItem,
  TextField
} from '@material-ui/core';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import './SortStyles.css';
import DeleteIcon from "@material-ui/icons/Delete";

function Sort(props) {
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

  const stopFilter = () => {
    setFilter(false);
    props.setStartFilter(false);
    props.setStartDate('');
    props.setEndDate('');
  }

  return (
    <div>
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
        <div className={filter === false ? 'filter' : 'no-filter'}>
          <p className='text-filter'>Добавить фильтр по дате: </p>
          <IconButton className='add-filter' aria-label="addFilter" onClick={() => setFilter(true)}>
            <AddBoxOutlinedIcon/>
          </IconButton>
        </div>
      </div>
      <div className={filter === false ? 'no-filter' : 'add-filter-properties'}>
        <div className='item-date'>
          <p className='date-text'>c: </p>
          <TextField
            type='date'
            id='outlined-basic'
            className='input-date-filter'
            variant='outlined'
            value={props.startDate}
            onChange={(e) => props.setStartDate(e.target.value)}
          />
        </div>
        <div className='item-date second-item-date '>
          <p className='date-text'>по: </p>
          <TextField
            type='date'
            id='outlined-basic'
            className='input-date-filter'
            variant='outlined'
            value={props.endDate}
            onChange={(e) => props.setEndDate(e.target.value)}
          />
        </div>
        <Button
          className='add-filter-btn'
          variant="outlined"
          onClick={() => props.setStartFilter(true)}
        >
          Фильтровать
        </Button>
        <IconButton
          className='delete-filter-btn'
          aria-label="delete"
          onClick={() => stopFilter()}
        >
          <DeleteIcon fontSize="large"/>
        </IconButton>
      </div>
    </div>
  );
}

export default Sort;
