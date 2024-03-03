import { Box } from '@mui/material';
import { scheduleData } from '../scheduleData'

function SchoolTerm( props ) {

    // scheduleData comes in an array of terms
    const term = scheduleData.terms[0]; // this gets the whole first term
    // NOTE: this only displays the data from Term 1 right now because that is all we have in scheduleData.js, need to make more sample terms


    const renderDaySchedule = (day) => {
        return day.blocks.map((block, index) => (
      <div key={index}>
        {block.isLunch ? (
          <p>{block.label} (Lunch): {block.startTime} - {block.endTime}</p>
        ) : (
          <>
            <p>{block.label}: {block.startTime} - {block.endTime}</p>
            {block.courses.map((course, courseIndex) => (
              <p key={courseIndex}>Course: {course.code}</p>
            ))}
          </>
        )}
      </div>
    ));
  };

  return (
    <div style={{ display: 'flex' }}>
      {term.days.map((day, dayIndex) => (
        <Box key={dayIndex} component="section" sx={{ flex: '1', p: 2, border: '1px solid grey', height: 400 }}>
          <h3>{day.label} {props.name}</h3>
          {renderDaySchedule(day)}
        </Box>
      ))}
    </div>
  );
}

export { SchoolTerm };