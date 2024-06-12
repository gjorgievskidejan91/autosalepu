import React from "react";
import { fetchForms } from "@/app/lib/data";

const FinanceForms = async () => {
  const forms = await fetchForms();

  return (
    <>
      {forms.map((form) => (
        <div
          key={form.firstName}
          className="p-4  border border-gray-300 rounded-md mb-4"
        >
          <h2 className="text-lg font-semibold mb-2">Customer Information</h2>
          <div className="grid md:grid-cols-2  gap-x-4 gap-y-2">
            <p>
              <strong>First Name:</strong> {form.firstName}
            </p>
            <p>
              <strong>vehicleOfInterest:</strong> {form.vehicleOfInterest}
            </p>
            <p>
              <strong>Middle Name:</strong> {form.middleName}
            </p>
            <p>
              <strong>Last Name:</strong> {form.lastName}
            </p>
            <p>
              <strong>SSN/TIN:</strong> {form.ssnTin}
            </p>
            <p>
              <strong>Date of Birth:</strong> {form.dateOfBirth}
            </p>
            <p>
              <strong>Address:</strong> {form.address}
            </p>
            <p>
              <strong>City:</strong> {form.city}
            </p>
            <p>
              <strong>State:</strong> {form.state}
            </p>
            <p>
              <strong>Zip:</strong> {form.zip}
            </p>
            <p>
              <strong>Country:</strong> {form.country}
            </p>
            <p>
              <strong>Residence Type:</strong> {form.residenceType}
            </p>
            <p>
              <strong>Length at Address:</strong> {form.lengthAtAddress}
            </p>
            <p>
              <strong>Home Phone:</strong> {form.homePhone}
            </p>
            <p>
              <strong>Phone Number:</strong> {form.phoneNumber}
            </p>
            <p>
              <strong>Work Phone:</strong> {form.workPhone}
            </p>
            <p>
              <strong>Email:</strong> {form.email}
            </p>
          </div>
          <h2 className="text-lg font-semibold mt-4 mb-2">
            Employment Information
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <p>
              <strong>Employment Type 1:</strong> {form.employmentType1}
            </p>
            <p>
              <strong>Employer Name 1:</strong> {form.employerName1}
            </p>
            <p>
              <strong>Employer Phone 1:</strong> {form.employerPhone1}
            </p>
            <p>
              <strong>Length at Job 1:</strong> {form.lengthAtJob1}
            </p>
            <p>
              <strong>Income Type 1:</strong> {form.incomeType1}
            </p>
            <p>
              <strong>Gross Salary 1:</strong> {form.grossSalary1}
            </p>
            <p>
              <strong>Employment Type 2:</strong> {form.employmentType2}
            </p>
            <p>
              <strong>Employer Name 2:</strong> {form.employerName2}
            </p>
            <p>
              <strong>Employer Phone 2:</strong> {form.employerPhone2}
            </p>
            <p>
              <strong>Length at Job 2:</strong> {form.lengthAtJob2}
            </p>
            <p>
              <strong>Income Type 2:</strong> {form.incomeType2}
            </p>
            <p>
              <strong>Gross Salary 2:</strong> {form.grossSalary2}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FinanceForms;
