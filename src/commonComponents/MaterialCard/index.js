import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    CardActionArea,
    CardActions,
} from "@mui/material";
import { withStyles } from "@mui/styles";

import UserName from "./UserName";

// import UserImage from 
import styles from "./styles";

const MaterialCard = ({ id, name, age, city, handleRemove, classes, handleClick }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia 
                component="img"
                height="140"
                // image={userImage}
                // alt="green iguana"
                />
                <CardContent className={classes.wrapper}>
                    <Typography gutterBottom variant="hS" component="div">
                        <UserName name={name} age={age} />
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Hello, I'm from {city}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button onClick={() => handleRemove(id)} size="small" color="primary">
                    Delete
                </Button> */}
                 <Button onClick={handleClick} size="small" color="primary">
                    Go To Details
                </Button>
                <Button onClick={handleClick} size="small" color="primary">
                    Add to basket
                </Button>
            </CardActions>
        </Card>
    );
};

export default withStyles(styles)(MaterialCard);
// export default memo(MaterialCard);