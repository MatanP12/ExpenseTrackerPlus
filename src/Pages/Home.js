import { AppBar, Box, CssBaseline, Link, Toolbar } from "@mui/material";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © Matan Peretz '}
        <Link color="inherit" href="https://github.com/MatanP12/ExpenseTrackerPlus">
          GitHub Repository
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  


function Home() {
    return (
        <Box >
          <CssBaseline />
          <AppBar position="absolute" >
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                ExpenseTracker+
              </Typography>
            </Toolbar>
          </AppBar>
          <Box >
            <Toolbar />
            <Container disableGutters component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography align="center" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel dui feugiat, tempor elit at, vestibulum justo. Fusce finibus mauris gravida sapien fringilla suscipit. Nam nec ligula tincidunt, molestie augue maximus, molestie orci. Nam in orci id metus facilisis porta. Nullam quis nulla a erat feugiat porttitor vel non diam. Morbi ultricies sem massa, sit amet molestie augue venenatis et. Ut suscipit felis nibh, ut aliquet elit tincidunt sit amet. Aliquam pellentesque metus ac dolor pulvinar, id interdum nunc ornare.
    Aenean sapien augue, fermentum sit amet aliquet non, semper non est. Nunc porttitor vel nisi ut dapibus. Mauris consectetur mi et eleifend vulputate. Praesent non dignissim turpis, at laoreet elit. Fusce ac rhoncus odio, eget viverra massa. Nam consequat sem sit amet pretium dignissim. Phasellus eu iaculis dolor. Vestibulum sed sapien maximus, convallis metus nec, varius ante. Mauris lobortis lorem eu blandit dictum. Cras sodales, lacus quis porttitor scelerisque, urna mi porta massa, eu ullamcorper tortor felis vel massa. Suspendisse accumsan venenatis erat, et lacinia lorem hendrerit ac. Pellentesque finibus varius lorem at ultricies. Etiam luctus, leo semper vulputate rutrum, risus nisl pretium sapien, eu porta neque neque et mauris.
    Nam fermentum nunc ac ligula lacinia interdum. Integer orci purus, ultricies vitae elit non, egestas sollicitudin eros. In sagittis eros nulla, non varius felis iaculis et. Morbi luctus bibendum augue a aliquam. Nulla facilisi. Etiam tristique est ipsum, nec feugiat diam tempor in. Nullam est turpis, porta id cursus ut, tristique nec tortor. Sed id nulla sodales, finibus orci a, finibus ipsum. Integer auctor aliquet eros ac sollicitudin. Quisque ac lacus id tellus vulputate facilisis non a nulla. Aenean ac pellentesque lorem.
    Praesent augue metus, vestibulum lacinia justo in, sollicitudin bibendum dui. Phasellus nulla metus, vestibulum vel ex ut, feugiat ultrices eros. Vestibulum tempus, quam in finibus auctor, ex ante placerat lorem, sed egestas nunc ante non felis. Curabitur ac malesuada turpis. Duis feugiat volutpat massa pellentesque suscipit. Duis accumsan risus justo, at iaculis felis pretium eget. Suspendisse potenti. Nam et ipsum non est dictum vestibulum vitae eget metus. Donec sodales nisl mollis, suscipit odio ac, congue turpis. Phasellus tincidunt in ipsum non volutpat. Mauris eu erat sodales purus tincidunt blandit ut vel risus.
                </Typography>
            </Container>
          </Box>
          <Copyright/>
        </Box>
      )
}

export default Home;