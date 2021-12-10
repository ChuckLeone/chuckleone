import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import Navigation from "../shared-components/Navigation";
import BeneathTheSand from "../assets/bts-cover.png";

const MediaCards = () => {
    const itemData = [
        {
          img: BeneathTheSand,
          title: 'Beneath the Sand',
          details: 'Book cover/jacket design for the novel by Katherin L. Bichler',
        },
    ];

    return (
        <>
      {itemData.map((item) => (
        <Grid item md={4}>
            <Card key={item.img} sx={{maxWidth: 345}}>
                <CardMedia
                    component="img"
                    height="400"
                    image={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                />
            </Card>
            <Typography gutterBottom variant="h6" component="div" sx={{color: 'white'}}>
                {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color: 'white'}}>
                {item.details}
            </Typography>
        </Grid>
      ))}
    </>
    )
}
const Portfolio = () => {
    return (
        <div style={{backgroundColor: '#4b4640', minHeight: '100vh', minWidth: '100%'}}>
                <Box sx={{minHeight: '10vh'}}>
                    <Grid container>   
                        <Grid item sm={12}>
                            <Navigation />
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Grid container spacing={2} sx={{ marginLeft: '16px', maxWidth: '80%'}}>
                        <Grid item sm={12}>
                            <Typography variant="h4" component="h1" sx={{color: 'white', marginLeft: 0}}>CHUCK LEONE</Typography>
                            <Typography variant="h6" component="h2" sx={{color: 'white', marginLeft: '4px'}}>Developer | Designer | Artist</Typography>
                        </Grid>
                        <Grid item sm={12} sx={{ marginTop: '10px', marginRight: '30px'}}>
                            <Typography variant="h6" component="h6" sx={{color: 'white'}}>Summary</Typography>
                            <Typography variant="body1" sx={{color: 'white'}}>
                            Over two decades of experience designing and developing engaging and innovative cross-platform software products that push the envelope of user interface design. Goal oriented, excellent communication skills, highly motivated, self-educating and thrives working in an agile environment. Passionate about design, development, emerging technologies, art and music.  
                            </Typography>
                        </Grid>
                        <Grid item sm={12} sx={{ marginTop: '10px', paddingRight: '30px'}}>
                            <Typography variant="h6" component="h6" sx={{color: 'white'}}>Skills</Typography>
                            <Typography variant="body1" sx={{color: 'white'}}>
                            Highly proficient in ADA compliant web app development using ReactJS, TypeScript, Node.JS, npm, Material UI and other technologies. 
                            Expert level skills using the Adobe Creative Suite to deliver beautiful designs focusing on usability, layout, typography, texture, composition and color. 
                            At present, working in the higher education software industry focusing on ADA compliance using StorybookJS, Axe, Wave, Lighthouse, NVDA and other accessibility tools.
                            Comfortable developing in Agile and Kanban environments using various development, version control and dependency management tools. 
                            Able to quickly solve problems and provide creative solutions in a logical manner. 
                            Currently an active member of the BuffaloJS and Buffalo Game Space groups - contributing music assets and providing mentorship to students during annual game jams. 
                            Continuously prototyping and developing new physical and virtual products and experiences using Autodesk Fusion 360, Unity 3D, Adobe Medium, Blender3D, Gravity Sketch and Google Blocks.
                            </Typography>
                        </Grid>
                        <Grid item sm={12} sx={{ marginTop: '10px', paddingRight: '30px'}}>
                            <Typography variant="h6" component="h6" sx={{color: 'white'}}>Latest Work</Typography>
                            <Grid container spacing={3} sx={{marginTop: '16px'}}>
                            <MediaCards />
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Box>
        </div>
    )
};

export default Portfolio;