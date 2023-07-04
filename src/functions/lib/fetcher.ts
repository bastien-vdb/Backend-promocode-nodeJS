export const fetcher = async (url:string) => {
  return await fetch(url)
  .then((res) => {
    return res.json();
  })
  .catch(err=>{
    throw new Error("Cannot fetch data from the API");
  });
};

export default fetcher;
