import "url-search-params-polyfill";

export default data => {
  
  const params = new URLSearchParams();

  for (const [k, v] of Object.entries(data)) {
    params.append(k, v);
  }
  
  return params;
  
};
