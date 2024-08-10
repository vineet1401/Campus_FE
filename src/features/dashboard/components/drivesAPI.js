// drivesApi.js

export const getCurrentDrives = () => {
    return [
        {
            id: 1,
            companyName: "Google",
            logoUrl: "https://1000logos.net/wp-content/uploads/2016/11/Google-Symbol.png",
            salaryPackage: "12 LPA",
            driveDate: "2024-09-15",
            designation: "Software Engineer",
            location: "Pune",
        },
        {
            id: 2,
            companyName: "Meta",
            logoUrl: "https://1000logos.net/wp-content/uploads/2021/10/Meta-Symbol.png",
            salaryPackage: "10 LPA",
            driveDate: "2024-09-20",
            designation: "Frontend Developer",
            location: "Mumbai",
        },
    ];
};

export const getFinishedDrives = () => {
    return [
        {
            id: 1,
            companyName: "Amazon",
            logoUrl: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
            salaryPackage: "8 LPA",
            driveDate: "2024-08-01",
            designation: "Data Analyst",
            location: "Bangalore",
        },
    ];
};

export const getUpcomingDrives = () => {
    return [
        {
            id: 1,
            companyName: "Apple",
            logoUrl: "https://1000logos.net/wp-content/uploads/2017/02/Apple-Logosu.png",
            salaryPackage: "14 LPA",
            driveDate: "2024-10-10",
            designation: "Cyber Security Engineer",
            location: "Hyderabad",
        },
    ];
};
