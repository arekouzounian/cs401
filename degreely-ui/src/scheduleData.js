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
        // TERM 2 DONE
        {
            label: "Term 2",
            startDate: "2024-10-28",
            endDate: "2024-12-20",
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
                                    id: 6,
                                    code: "MATH-102",
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
                                    id: 7,
                                    code: "ENG-102",
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
                                    id: 8,
                                    code: "SCI-102",
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
                                    id: 9,
                                    code: "HIS-102",
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
                                    id: 10,
                                    code: "ART-102",
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
                                    id: 7,
                                    code: "ENG-102",
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
                                    id: 6,
                                    code: "MATH-102",
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
                                    id: 8,
                                    code: "SCI-102",
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
                                    id: 10,
                                    code: "ART-102",
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
                                    id: 9,
                                    code: "HIS-102",
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
                                    id: 6,
                                    code: "MATH-102",
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
                                    id: 7,
                                    code: "ENG-102",
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
                                    id: 8,
                                    code: "SCI-102",
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
                                    id: 9,
                                    code: "HIS-102",
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
                                    id: 10,
                                    code: "ART-102",
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
                                    id: 7,
                                    code: "ENG-102",
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
                                    id: 6,
                                    code: "MATH-102",
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
                                    id: 8,
                                    code: "SCI-102",
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
                                    id: 10,
                                    code: "ART-102",
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
                                    id: 9,
                                    code: "HIS-102",
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
                                    id: 6,
                                    code: "MATH-102",
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
                                    id: 7,
                                    code: "ENG-102",
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
                                    id: 8,
                                    code: "SCI-102",
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
                                    id: 9,
                                    code: "HIS-102",
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
                                    id: 10,
                                    code: "ART-102",
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
        // TERM 3 DONE
        {
            label: "Term 3",
            startDate: "2025-01-06",
            endDate: "2025-02-28",
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
                                    id: 11,
                                    code: "GOV-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 10,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 10,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 12,
                                    code: "MUSIC-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 10,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 10,
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
                                    id: 13,
                                    code: "LIT-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 10,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 10,
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
                                    id: 14,
                                    code: "CHEM-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 10,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 10,
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
                                    id: 15,
                                    code: "CALC-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 10,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 10,
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
                                    id: 12,
                                    code: "MUSIC-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 10,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 10,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 11,
                                    code: "GOV-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 10,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 10,
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
                                    id: 13,
                                    code: "LIT-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 10,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 10,
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
                                    id: 15,
                                    code: "CALC-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 10,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 10,
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
                                    id: 14,
                                    code: "CHEM-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 10,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 10,
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
                                    id: 11,
                                    code: "GOV-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 10,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 10,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 12,
                                    code: "MUSIC-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 10,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 10,
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
                                    id: 13,
                                    code: "LIT-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 10,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 10,
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
                                    id: 14,
                                    code: "CHEM-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 10,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 10,
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
                                    id: 15,
                                    code: "CALC-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 10,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 10,
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
                                    id: 12,
                                    code: "MUSIC-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 10,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 10,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 11,
                                    code: "GOV-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 10,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 10,
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
                                    id: 13,
                                    code: "LIT-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 10,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 10,
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
                                    id: 15,
                                    code: "CALC-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 10,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 10,
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
                                    id: 14,
                                    code: "CHEM-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 10,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 10,
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
                                    id: 11,
                                    code: "GOV-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 10,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 10,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 12,
                                    code: "MUSIC-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 10,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 10,
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
                                    id: 13,
                                    code: "LIT-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 10,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 10,
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
                                    id: 14,
                                    code: "CHEM-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 10,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 10,
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
                                    id: 15,
                                    code: "CALC-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 10,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 10,
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
        // TERM 4 DONE
        {
            label: "Term 4",
            startDate: "2025-03-03",
            endDate: "2025-04-25",
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
                                    id: 16,
                                    code: "CERAMICS-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 10,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 10,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 17,
                                    code: "USH-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 10,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 10,
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
                                    id: 18,
                                    code: "TECH-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 10,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 10,
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
                                    id: 19,
                                    code: "BIO-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 10,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 10,
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
                                    id: 20,
                                    code: "STATS-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 10,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 10,
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
                                    id: 17,
                                    code: "USH-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 10,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 10,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 16,
                                    code: "CERAMICS-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 10,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 10,
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
                                    id: 18,
                                    code: "TECH-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 10,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 10,
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
                                    id: 20,
                                    code: "STATS-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 10,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 10,
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
                                    id: 19,
                                    code: "BIO-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 10,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 10,
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
                                    id: 16,
                                    code: "CERAMICS-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 10,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 10,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 17,
                                    code: "USH-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 10,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 10,
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
                                    id: 18,
                                    code: "TECH-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 10,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 10,
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
                                    id: 19,
                                    code: "BIO-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 10,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 10,
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
                                    id: 20,
                                    code: "STATS-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 10,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 10,
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
                                    id: 17,
                                    code: "USH-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 10,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 10,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 16,
                                    code: "CERAMICS-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 10,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 10,
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
                                    id: 18,
                                    code: "TECH-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 10,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 10,
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
                                    id: 20,
                                    code: "STATS-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 10,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 10,
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
                                    id: 19,
                                    code: "BIO-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 10,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 10,
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
                                    id: 16,
                                    code: "CERAMICS-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 10,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 10,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 17,
                                    code: "USH-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 10,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 10,
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
                                    id: 18,
                                    code: "TECH-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 10,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 10,
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
                                    id: 19,
                                    code: "BIO-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 10,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 10,
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
                                    id: 20,
                                    code: "STATS-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 10,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 10,
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
        // TERM 5 DONE
        {
            label: "Term 5",
            startDate: "2025-04-28",
            endDate: "2025-06-06",
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
                                    id: 21,
                                    code: "3DART-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 11,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 11,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 22,
                                    code: "MATH-103",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 11,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 11,
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
                                    id: 23,
                                    code: "ENG-103",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 11,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 11,
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
                                    id: 24,
                                    code: "SCI-103",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 11,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 11,
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
                                    id: 25,
                                    code: "HIS-103",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 10,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 10,
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
                                    id: 22,
                                    code: "MATH-103",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 11,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 11,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 21,
                                    code: "3DART-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 11,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 11,
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
                                    id: 23,
                                    code: "ENG-103",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 11,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 11,
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
                                    id: 25,
                                    code: "HIS-103",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 11,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 11,
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
                                    id: 24,
                                    code: "SCI-103",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 11,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 11,
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
                                    id: 21,
                                    code: "3DART-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 11,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 11,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 22,
                                    code: "MATH-103",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 11,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 11,
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
                                    id: 23,
                                    code: "ENG-103",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 11,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 11,
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
                                    id: 24,
                                    code: "SCI-103",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 11,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 11,
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
                                    id: 25,
                                    code: "HIS-103",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 11,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 11,
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
                                    id: 22,
                                    code: "MATH-103",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 11,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 11,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 21,
                                    code: "3DART-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 11,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 11,
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
                                    id: 23,
                                    code: "ENG-103",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 11,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 11,
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
                                    id: 25,
                                    code: "HIS-103",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 11,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 11,
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
                                    id: 24,
                                    code: "SCI-103",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 11,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 11,
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
                                    id: 21,
                                    code: "3DART-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 11,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 11,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 22,
                                    code: "MATH-103",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 11,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 11,
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
                                    id: 23,
                                    code: "ENG-103",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 11,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 11,
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
                                    id: 24,
                                    code: "SCI-103",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 11,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 11,
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
                                    id: 25,
                                    code: "HIS-103",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 11,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 11,
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
        // TERM 6 DONE
        {
            label: "Term 6",
            startDate: "2025-06-09",
            endDate: "2025-07-31",
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
                                    id: 26,
                                    code: "MUSIC-102",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 11,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 11,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 27,
                                    code: "CALC-102",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 11,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 11,
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
                                    id: 28,
                                    code: "TECH-102",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 11,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 11,
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
                                    id: 29,
                                    code: "SCI-104",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 11,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 11,
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
                                    id: 30,
                                    code: "HIS-102",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 10,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 10,
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
                                    id: 27,
                                    code: "CALC-102",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 11,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 11,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 26,
                                    code: "MUSIC-102",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 11,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 11,
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
                                    id: 28,
                                    code: "TECH-102",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 11,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 11,
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
                                    id: 30,
                                    code: "HIS-102",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 11,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 11,
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
                                    id: 29,
                                    code: "SCI-104",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 11,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 11,
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
                                    id: 26,
                                    code: "MUSIC-102",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 11,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 11,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 27,
                                    code: "CALC-102",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 11,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 11,
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
                                    id: 28,
                                    code: "TECH-102",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 11,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 11,
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
                                    id: 29,
                                    code: "SCI-104",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 11,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 11,
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
                                    id: 30,
                                    code: "HIS-102",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 11,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 11,
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
                                    id: 27,
                                    code: "CALC-102",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 11,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 11,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 26,
                                    code: "MUSIC-102",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 11,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 11,
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
                                    id: 28,
                                    code: "TECH-102",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 11,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 11,
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
                                    id: 30,
                                    code: "HIS-102",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 11,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 11,
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
                                    id: 29,
                                    code: "SCI-104",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 11,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 11,
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
                                    id: 26,
                                    code: "MUSIC-102",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 11,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 11,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 27,
                                    code: "CALC-102",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 11,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 11,
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
                                    id: 28,
                                    code: "TECH-102",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 11,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 11,
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
                                    id: 29,
                                    code: "SCI-104",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 11,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 11,
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
                                    id: 30,
                                    code: "HIS-102",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 11,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 11,
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
        // TERM 7 DONE
        {
            label: "Term 7",
            startDate: "2025-08-04",
            endDate: "2025-08-29",
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
                                    id: 31,
                                    code: "ART-103",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 12,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 12,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 32,
                                    code: "GEO-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 12,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 12,
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
                                    id: 33,
                                    code: "LIT-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 12,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 12,
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
                                    id: 34,
                                    code: "WOHIS-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 12,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 12,
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
                                    id: 35,
                                    code: "PHYS-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 12,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 12,
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
                                    id: 32,
                                    code: "GEO-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 12,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 12,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 31,
                                    code: "ART-103",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 12,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 12,
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
                                    id: 33,
                                    code: "LIT-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 12,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 12,
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
                                    id: 35,
                                    code: "PHYS-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 12,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 12,
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
                                    id: 34,
                                    code: "WOHIS-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 12,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 12,
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
                                    id: 31,
                                    code: "ART-103",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 12,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 12,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 32,
                                    code: "GEO-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 12,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 12,
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
                                    id: 33,
                                    code: "LIT-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 12,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 12,
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
                                    id: 34,
                                    code: "WOHIS-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 12,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 12,
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
                                    id: 35,
                                    code: "PHYS-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 12,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 12,
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
                                    id: 32,
                                    code: "GEO-101",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 12,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 12,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 31,
                                    code: "ART-103",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 12,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 12,
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
                                    id: 33,
                                    code: "LIT-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 12,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 12,
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
                                    id: 35,
                                    code: "PHYS-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 12,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 12,
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
                                    id: 34,
                                    code: "WOHIS-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 12,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 12,
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
                                    id: 31,
                                    code: "ART-103",
                                    students: [
                                        {
                                            id: "1",
                                            grade: 12,
                                            name: "John Doe"
                                        },
                                        {
                                            id: "2",
                                            grade: 12,
                                            name: "Jane Smith"
                                        }
                                    ]
                                },
                                {
                                    id: 32,
                                    code: "GEO-101",
                                    students: [
                                        {
                                            id: "6",
                                            grade: 12,
                                            name: "Bob Johnson"
                                        },
                                        {
                                            id: "7",
                                            grade: 12,
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
                                    id: 33,
                                    code: "LIT-101",
                                    students: [
                                        {
                                            id: "11",
                                            grade: 12,
                                            name: "Eva Green"
                                        },
                                        {
                                            id: "12",
                                            grade: 12,
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
                                    id: 34,
                                    code: "WOHIS-101",
                                    students: [
                                        {
                                            id: "21",
                                            grade: 12,
                                            name: "Grace Turner"
                                        },
                                        {
                                            id: "22",
                                            grade: 12,
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
                                    id: 35,
                                    code: "PHYS-101",
                                    students: [
                                        {
                                            id: "31",
                                            grade: 12,
                                            name: "Oliver White"
                                        },
                                        {
                                            id: "32",
                                            grade: 12,
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
    ]

};

export {scheduleData};