import React from 'react';

// Props-ஐ destructuring மூலம் பெறுகிறோம்
const EmployeeCard = ({ 
  employeeImage, 
  employeeName, 
  employeeId, 
  department, 
  designation, 
  salary, 
  email, 
  phone, 
  experience, 
  status 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 flex flex-col">
      
      {/* Top Section: Image & Basic Info */}
      <div className="flex items-center gap-4 mb-4 border-b pb-4">
        <img 
          src={employeeImage} 
          alt={employeeName} 
          className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800">{employeeName}</h2>
          <p className="text-indigo-600 font-semibold text-sm">{designation}</p>
          <p className="text-gray-500 text-xs">{department} Department</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="space-y-2 text-sm text-gray-600 flex-grow">
        <p><span className="font-semibold text-gray-800">ID:</span> {employeeId}</p>
        <p><span className="font-semibold text-gray-800">Salary:</span> Rs. {salary}</p>
        <p><span className="font-semibold text-gray-800">Experience:</span> {experience}</p>
        <p><span className="font-semibold text-gray-800">Email:</span> {email}</p>
        <p><span className="font-semibold text-gray-800">Phone:</span> {phone}</p>
      </div>

      {/* Status Badge */}
      <div className="mt-4 pt-4 border-t">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
          status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          Status: {status}
        </span>
      </div>

    </div>
  );
};

export default EmployeeCard;