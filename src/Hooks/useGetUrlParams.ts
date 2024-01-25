interface CityDoctorData {
  [city: string]: string[] | null;
}

const useGetUrlParams = () => {
  const getCity = (query: string, data: CityDoctorData) => {
    const params = new URLSearchParams(window.location.search);
    const urlParam = params.get(query);

    if (urlParam) {
      const tempCity = urlParam[0].toUpperCase() + urlParam.slice(1);
      const cityArr = Object.keys(data);
      if (cityArr.includes(tempCity)) {
        // console.log(tempCity);
        return tempCity;
      }
    }
  };

  return getCity;
};

export default useGetUrlParams;
