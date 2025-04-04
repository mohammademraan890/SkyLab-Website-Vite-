const ArrayMethods = () => {
  const arr = [24, 10, 24, 56, 97, 23, 6, 89];
  const mappedArr = arr.map((item) => item - 10);
  arr.forEach((item, index , arr) => console.log({ index, item , arr}))
  console.log(mappedArr);

  const filterArr = arr.filter((item, index) => index > 100);
  const findElement = arr.find((item, index) => index > 5);
  console.log(findElement);
  const someElement = arr.some((item) => item === 6);
  console.log(someElement);
  console.log(filterArr);
  return (
    <div className="container mt-5">
      {arr.map((item, index) => {
        return <li key={index}>{item - 1}</li>;
      })}
    </div>
  );
};

export default ArrayMethods;
