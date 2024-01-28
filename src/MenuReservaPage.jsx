import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import ContentMenuReserva from './components/ContentMenuReserva.jsx';
import {Box , Stack} from "@mui/material";


function MenuReservaPage() {
    return (

      <Box>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar/>
          <ContentMenuReserva/>
        </Stack>
      </Box>
    
    );
  }

export default MenuReservaPage;