import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export default createAsyncThunk(
  'products/fetchProducts',
  async (query = {}) => {
    const queryKeys = Object.keys(query);
    let queryString = '';

    if (queryKeys.length !== 0) {
      queryString = queryKeys.reduce((finalQuery, key) => {
        if (key === 'ids') {
          return query.ids.reduce(
            (subquery, id) => `${subquery}id=${id}&`,
            finalQuery
          );
        }

        return `${finalQuery}${key}=${query[key]}&`;
      }, '?');
      queryString = queryString.slice(0, -1);
    }

    const uri = `${process.env.REACT_APP_BACKEND_ORIGIN}/products${queryString}`;
    const response = await axios.get(uri);
    return response.data;
  }
);
