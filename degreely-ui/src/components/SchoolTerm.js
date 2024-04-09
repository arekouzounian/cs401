import React from 'react';
import { Box } from '@mui/material';
import { scheduleData } from '../scheduleData'
import { Course } from './Course';

function SchoolTerm( props ) {

    const termString = props.name;
    const termNumber = parseInt(termString.replace(/^\D+/g, ''), 10);
    const actualTermNumber = termNumber - 1;
    const term = scheduleData.terms[actualTermNumber];

    if (!term) {
        console.error("Term data is undefined");
        return ( 
                <div>Term data not available.</div>
            );
        }


    const renderDaySchedule = (day) => {
        return day.blocks.map((block, index) => (
      <div key={index}>
        {block.isLunch ? (
          <p>{block.label} (Lunch): {block.startTime} - {block.endTime}</p>
        ) : (
          <>
            <p>{block.label}: {block.startTime} - {block.endTime}</p>
            {block.courses.map((course, courseIndex) => (
              <p key={courseIndex}><Course code={course.code} students={course.students}></Course></p>
            ))}
          </>
        )}
      </div>
    ));
  };


  return (
    <div style={{ display: 'flex' }}>
      {term.days.map((day, dayIndex) => (
        <Box key={dayIndex} component="section" sx={{ flex: '1', p: 2, border: '1px solid grey', height: 'auto' }}>
         <h3>{day.label} {props.name}</h3>
          {/*<h3>{day.label} {props.name}</h3>*/}
          {renderDaySchedule(day)}
        </Box>
      ))}
    </div>
  );
}

export { SchoolTerm };
