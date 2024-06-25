import React, {useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import { fetchPosts } from '../redux/postSlice';
import { useDispatch, useSelector } from 'react-redux';

const About = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <Box sx={{ textAlign: 'center', p: 4 }}>
      <Typography variant="h4">About Us</Typography>
      <Typography variant="body1">This is a weather application built using React, MUI, and Redux.</Typography>


      <table>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
          {posts.map(post => (

            <tr>
              <td style={{border: '1px solid #000'}}>{post.id}</td>
              <td style={{border: '1px solid #000'}}>{post.title}</td>
              <td style={{border: '1px solid #000'}}>{post.body}</td>
            </tr>
          ))}
      </table>
    </Box>
  );
};

export default About;
