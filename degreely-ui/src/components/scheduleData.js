const scheduleData = {
    startDate: "2024-09-01",
    endDate: "2025-06-15",
    terms: [
        {
            label: "Term 1",
            startDate: "2024-09-01",
            endDate: "2024-09-25",
            days: [
                {
                    label: "Monday",
                    blocks: [
                        {
                            label: "Block 1",
                            startTime: "9:00",
                            endTime: "10:30",
                            courses: [
                                {
                                    id: 1,
                                    code: "MATH-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 9,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 9,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 2,
                                    code: "ENG-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 9,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 9,
                                            name: "Alice Brown"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Block 2",
                            startTime: "10:30",
                            endTime: "12:00",
                            courses: [
                                {
                                    id: 3,
                                    code: "SCI-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 9,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 9,
                                            name: "Tom Wilson"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Block 3",
                            startTime: "12:00",
                            endTime: "1:00",
                            isLunch: true
                        },
                        {
                            label: "Block 4",
                            startTime: "1:00",
                            endTime: "2:30",
                            courses: [
                                {
                                    id: 4,
                                    code: "HIS-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 9,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 9,
                                            name: "Sam Adams"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Block 5",
                            startTime: "2:30",
                            endTime: "4:00",
                            courses: [
                                {
                                    id: 5,
                                    code: "ART-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 9,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 9,
                                            name: "Sophie Miller"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Tuesday",
                    blocks: [
                        {
                            label: "Block 1",
                            startTime: "9:00",
                            endTime: "10:30",
                            courses: [
                                {
                                    id: 1,
                                    code: "ENG-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 9,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 9,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 2,
                                    code: "MATH-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 9,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 9,
                                            name: "Alice Brown"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Block 2",
                            startTime: "10:30",
                            endTime: "12:00",
                            courses: [
                                {
                                    id: 3,
                                    code: "SCI-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 9,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 9,
                                            name: "Tom Wilson"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Block 3",
                            startTime: "12:00",
                            endTime: "1:00",
                            isLunch: true
                        },
                        {
                            label: "Block 4",
                            startTime: "1:00",
                            endTime: "2:30",
                            courses: [
                                {
                                    id: 4,
                                    code: "ART-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 9,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 9,
                                            name: "Sam Adams"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Block 5",
                            startTime: "2:30",
                            endTime: "4:00",
                            courses: [
                                {
                                    id: 5,
                                    code: "HIS-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 9,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 9,
                                            name: "Sophie Miller"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Wednesday",
                    blocks: [
                        {
                            label: "Block 1",
                            startTime: "9:00",
                            endTime: "10:30",
                            courses: [
                                {
                                    id: 1,
                                    code: "MATH-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 9,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 9,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 2,
                                    code: "ENG-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 9,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 9,
                                            name: "Alice Brown"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Block 2",
                            startTime: "10:30",
                            endTime: "12:00",
                            courses: [
                                {
                                    id: 3,
                                    code: "SCI-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 9,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 9,
                                            name: "Tom Wilson"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Block 3",
                            startTime: "12:00",
                            endTime: "1:00",
                            isLunch: true
                        },
                        {
                            label: "Block 4",
                            startTime: "1:00",
                            endTime: "2:30",
                            courses: [
                                {
                                    id: 4,
                                    code: "HIS-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 9,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 9,
                                            name: "Sam Adams"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Block 5",
                            startTime: "2:30",
                            endTime: "4:00",
                            courses: [
                                {
                                    id: 5,
                                    code: "ART-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 9,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 9,
                                            name: "Sophie Miller"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Thursday",
                    blocks: [
                        {
                            label: "Block 1",
                            startTime: "9:00",
                            endTime: "10:30",
                            courses: [
                                {
                                    id: 1,
                                    code: "ENG-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 9,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 9,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 2,
                                    code: "MATH-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 9,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 9,
                                            name: "Alice Brown"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Block 2",
                            startTime: "10:30",
                            endTime: "12:00",
                            courses: [
                                {
                                    id: 3,
                                    code: "SCI-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 9,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 9,
                                            name: "Tom Wilson"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Block 3",
                            startTime: "12:00",
                            endTime: "1:00",
                            isLunch: true
                        },
                        {
                            label: "Block 4",
                            startTime: "1:00",
                            endTime: "2:30",
                            courses: [
                                {
                                    id: 4,
                                    code: "ART-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 9,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 9,
                                            name: "Sam Adams"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Block 5",
                            startTime: "2:30",
                            endTime: "4:00",
                            courses: [
                                {
                                    id: 5,
                                    code: "HIS-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 9,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 9,
                                            name: "Sophie Miller"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Friday",
                    blocks: [
                        {
                            label: "Block 1",
                            startTime: "9:00",
                            endTime: "10:30",
                            courses: [
                                {
                                    id: 1,
                                    code: "MATH-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 9,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 9,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 2,
                                    code: "ENG-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 9,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 9,
                                            name: "Alice Brown"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Block 2",
                            startTime: "10:30",
                            endTime: "12:00",
                            courses: [
                                {
                                    id: 3,
                                    code: "SCI-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 9,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 9,
                                            name: "Tom Wilson"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Block 3",
                            startTime: "12:00",
                            endTime: "1:00",
                            isLunch: true
                        },
                        {
                            label: "Block 4",
                            startTime: "1:00",
                            endTime: "2:30",
                            courses: [
                                {
                                    id: 4,
                                    code: "HIS-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 9,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 9,
                                            name: "Sam Adams"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Block 5",
                            startTime: "2:30",
                            endTime: "4:00",
                            courses: [
                                {
                                    id: 5,
                                    code: "ART-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 9,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 9,
                                            name: "Sophie Miller"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        // more terms go here
    ]
};

export default scheduleData;