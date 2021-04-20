import React, { Component } from 'react'
import ApiService from '../services/ApiService';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



class ItemCards extends Component {

  constructor(props) {
      super(props)
      this.state = {
          jewellries: [],
         
      }
  }

  componentDidMount() {
      ApiService.fetchJewellries()
          .then((res) => {
              this.setState({jewellries: res.data})
              console.log(res.data);
          });
  }
  
    viewJewellry = (id) => {
        console.log(this.props);
        this.props.history.push('/view-jewellry/'+ id);
    }


  render() {
    const {jewellries} = this.state;
    console.log(jewellries);
    return (
      <div>
      <Grid container spacing={3}>
        
		{ jewellries.length !== 0 ?(jewellries.map(row => (
		<Grid item xs={12} sm={3}>
			<Card >
				      <CardHeader title={row.name}/>
				      <CardMedia title="Jewellry"/>
				      <img src={row.image} alt= "jewells" width="200" height="200"/>		
				      <CardContent>
					<Typography> {row.description} </Typography>

				      </CardContent>
				      <CardActions disableSpacing>	
					<Button onClick={() => this.viewJewellry(row.id)} size="small" class="btn" variant="contained">More & Buy</Button>
					</CardActions>
				    </Card>
				    	</Grid>
			))):null}
            
            </Grid>
      </div>
              );
            }
        
        }
        
        export default ItemCards;
