import { Box } from '@mui/material';

function SchoolTerm( props ) {
    return (
        <div style={{ display: 'flex' }}>
      <Box component="section" sx={{ flex: '1', p: 2, border: '1px solid grey', height: 400 }}>
        This will contain all the information for Monday {props.name}
      </Box>
      <Box component="section" sx={{ flex: '1', p: 2, border: '1px solid grey', height: 400 }}>
        This will contain all the information for Tuesday {props.name}
      </Box>
      <Box component="section" sx={{ flex: '1', p: 2, border: '1px solid grey', height: 400 }}>
        This will contain all the information for Wednesday {props.name}
      </Box>
      <Box component="section" sx={{ flex: '1', p: 2, border: '1px solid grey', height: 400 }}>
        This will contain all the information for Thursday {props.name}
      </Box>
      <Box component="section" sx={{ flex: '1', p: 2, border: '1px solid grey', height: 400 }}>
        This will contain all the information for Friday {props.name}
      </Box>
    </div>
  );
}
export { SchoolTerm }
