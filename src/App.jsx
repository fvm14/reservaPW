import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import ContentMenuReserva from './components/SalaIndex.jsx';
import {Box , Stack} from "@mui/material";


function App() {
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

export default App;
