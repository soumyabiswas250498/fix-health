import { useState, useEffect } from 'react';

interface CityDoctorData {
  [city: string]: string[] | null;
}

function useCityDoctor() {
  const makeCityArr = (data: CityDoctorData) => {
    const cityArr = Object.keys(data);
    const cityData = cityArr.map(item => ({ label: item, value: item }));
    // console.log(cityData);
    return cityData;
  };

  const makeDoctorArr = (data: CityDoctorData, city: string) => {
    // console.log(data, '***data');

    const doctorData = data[city]?.map(item => ({ label: item, value: item }));
    // console.log(doctorData, '***city');

    return doctorData || [];
  };

  return { makeCityArr, makeDoctorArr };
}

export default useCityDoctor;
