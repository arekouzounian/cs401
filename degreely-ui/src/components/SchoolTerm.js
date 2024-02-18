import { Box } from '@mui/material';

function SchoolTerm( props ) {
    return (
        <div>
            {props.name}
            <Box component="section" sx={{ p: 2, border: '1px solid grey', width: 1/8, height: 400}}>
            This will contain all the information for School {props.name}
            </Box>
        </div>
    )
}

export { SchoolTerm }
