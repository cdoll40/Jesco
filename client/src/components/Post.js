import {useContext, useEffect} from "react";
import {UserContext} from "../UserContext";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Post = ({_id, title, summary, cover, content, createdAt, author}) => {

    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(() => {
      fetch('http://localhost:4000/profile', {
        credentials: 'include',
      }).then(response => {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
        });
      });
    }, []);

    const username = userInfo?.username;

    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardMedia
            component="img"
            sx={{
                // 16:9
                // pt: '56.25%',
            }}
            image="https://source.unsplash.com/random"
            alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
                {title}
            </Typography>
            <Typography>
                {summary}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" component='a' href={`/post/${_id}`}>View</Button>
            {username && (
                <Button size="small">Edit</Button>
            )}
            </CardActions>
        </Card>
    )
}

export default Post