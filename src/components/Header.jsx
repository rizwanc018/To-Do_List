import { AppBar, Toolbar, Typography, Box } from "@mui/material"

const Header = () => {
    return (
        <>
            <AppBar position="relative" col>
                <Toolbar>
                    <Box
                        component="img"
                        sx={{
                            height: 30,
                            width: 30,
                        }}
                        alt="logo"
                        src="/img1.png"
                    />
                    <Typography style={{ fontWeight: 700, marginLeft: '10px' }}>To-Do List</Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header