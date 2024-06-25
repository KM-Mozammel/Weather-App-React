import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';
import { Box, Button, TextField, Typography } from '@mui/material';
import SliderComponent from '../components/Slider';

const Home = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const handleFetchWeather = () => {
    dispatch(fetchWeather(city));
  };

  return (
    <Box>
      <SliderComponent />
      
      <Box sx={{ textAlign: 'center', mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 1}}>
        <TextField
          label="City"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={handleFetchWeather} sx={{ ml: 2,}}>
          Get Weather
        </Button>
      </Box>

      {weather.status === 'loading' && <Typography>Loading...</Typography>}
      {weather.status === 'succeeded' && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h6">Weather in {weather.data.name}</Typography>
          <Typography>Temperature: {weather.data.main.temp}K</Typography>
          <Typography>Weather: {weather.data.weather[0].description}</Typography>
        </Box>
      )}
      {weather.status === 'failed' && <Typography>Error: {weather.error}</Typography>}
    </Box>
  );
};

export default Home;
