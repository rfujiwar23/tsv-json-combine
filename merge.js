let data1 = [];
let data2 = [];

const getTvsData = async () => {
  await d3.tsv("data1.tsv", function (data) {
    // use data here
    data2.push(data);
  });
  // console.log("data2", data2);
};

const getJsonData = () => {
  fetch("/data2.json")
    .then((response) => response.json())
    .then((json) => {
      data1 = json;
      // console.log("data1", json);
    });
};

export async function merge() {
  const start = Date.now();
  await getJsonData();
  await getTvsData();

  const mergedArray = data1.concat(data2);


  //your code - start




  //your code - end
  const duration = Date.now() - start;
  console.log("Merge duration: ", duration);
  console.log("Merge Array: ", mergedArray);
  console.log(mergedArray.length);

  Object.keys(mergedArray).map( key => {
    console.log(key, mergedArray[key]);
  });
  return mergedArray;

  
}

