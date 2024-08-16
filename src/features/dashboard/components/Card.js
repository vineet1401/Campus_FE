import React from 'react';

export const Card = ({ id,companyName, logoUrl, salaryPackage, driveDate, designation, location ,onClick}) => {
  


  

    return (
                      <div
                          onClick={onClick}
                          className="relative block shadow overflow-hidden rounded-lg border border-black dark:border-white p-4 sm:p-6 lg:p-8 shadow-lg dark:shadow-gray-700"
                        >
                          <span
                            className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                          ></span>
                        
                          <div key={id} className="sm:flex sm:justify-between sm:gap-4">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-300 sm:text-xl">
                              {companyName}
                              </h3>
                        
                              <p className="mt-1 text-xs font-medium text-gray-600">{salaryPackage}</p>
                            </div>
                        
                            <div className="hidden sm:block sm:shrink-0">
                            <img src={logoUrl} alt={companyName} className="w-20 h-20 mx-auto mb-4 size-16 rounded-lg object-cover shadow-sm"/>
                            </div>
                          </div>
                        
                          <div className="mt-4">
                            <p className="text-pretty text-sm text-gray-500">
                            Designation: {designation}
                            </p>
                          </div>
                        
                          <dl className="mt-6 flex gap-4 sm:gap-6">
                            <div className="flex flex-col-reverse">
                              <dt className="text-sm font-medium text-gray-600">{driveDate}</dt>
                              <dd className="text-xs text-gray-500">Date</dd>
                            </div>
                        
                            <div className="flex flex-col-reverse">
                              <dt className="text-sm font-medium text-gray-600">{location}</dt>
                              <dd className="text-xs text-gray-500">Location</dd>
                            </div>
                          </dl>
                        </div>
                        );
};
