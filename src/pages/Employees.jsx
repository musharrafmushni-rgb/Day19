import React from 'react';
import EmployeeCard from '../components/EmployeeCard';

const Employees = () => {
  // 8 ஊழியர்களின் டேட்டா (Objects)
  const employeesData = [
    {
      id: 1,
      employeeImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      employeeName: "John David",
      employeeId: "EMP001",
      department: "IT",
      designation: "Frontend Developer",
      salary: "150,000",
      email: "john@gmail.com",
      phone: "0771234567",
      experience: "3 Years",
      status: "Active"
    },
    {
      id: 2,
      employeeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      employeeName: "Sarah Wilson",
      employeeId: "EMP002",
      department: "Design",
      designation: "UI/UX Designer",
      salary: "140,000",
      email: "sarah@gmail.com",
      phone: "0779876543",
      experience: "2 Years",
      status: "Active"
    },
    {
      id: 3,
      employeeImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
      employeeName: "Michael Brown",
      employeeId: "EMP003",
      department: "IT",
      designation: "Backend Developer",
      salary: "160,000",
      email: "michael@gmail.com",
      phone: "0761122334",
      experience: "4 Years",
      status: "Active"
    },
    {
      id: 4,
      employeeImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
      employeeName: "Emily Clark",
      employeeId: "EMP004",
      department: "HR",
      designation: "HR Manager",
      salary: "120,000",
      email: "emily@gmail.com",
      phone: "0755566778",
      experience: "5 Years",
      status: "Active"
    },
    {
      id: 5,
      employeeImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop",
      employeeName: "David Lee",
      employeeId: "EMP005",
      department: "IT",
      designation: "DevOps Engineer",
      salary: "180,000",
      email: "david@gmail.com",
      phone: "0723344556",
      experience: "6 Years",
      status: "Inactive"
    },
    {
      id: 6,
      employeeImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      employeeName: "Sophia Taylor",
      employeeId: "EMP006",
      department: "Marketing",
      designation: "Marketing Lead",
      salary: "130,000",
      email: "sophia@gmail.com",
      phone: "0712233445",
      experience: "3 Years",
      status: "Active"
    },
    {
      id: 7,
      employeeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      employeeName: "James Wilson",
      employeeId: "EMP007",
      department: "Finance",
      designation: "Accountant",
      salary: "110,000",
      email: "james@gmail.com",
      phone: "0744455667",
      experience: "2 Years",
      status: "Active"
    },
    {
      id: 8,
      employeeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      employeeName: "Olivia Martin",
      employeeId: "EMP008",
      department: "Design",
      designation: "Graphic Designer",
      salary: "125,000",
      email: "olivia@gmail.com",
      phone: "0777788990",
      experience: "4 Years",
      status: "Inactive"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Employee Management</h1>
        
        {/* Grid Layout-ல் 8 கார்டுகளையும் காட்டுகிறோம் */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {employeesData.map((employee) => (
            <EmployeeCard 
              key={employee.id}
              employeeImage={employee.employeeImage}
              employeeName={employee.employeeName}
              employeeId={employee.employeeId}
              department={employee.department}
              designation={employee.designation}
              salary={employee.salary}
              email={employee.email}
              phone={employee.phone}
              experience={employee.experience}
              status={employee.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employees;