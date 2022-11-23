import "./style.css";
// import { mergedArray } from './merge.js'
const tableBody = document.querySelector(".table-body");
let data1 = [];
let data2 = [];
let mergedArray = [];
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

async function merge() {
  const start = Date.now();
  await getJsonData();
  await getTvsData();

  mergedArray = data1.concat(data2);

  //your code - start

  //your code - end
  const duration = Date.now() - start;
  console.log("Merge duration: ", duration);
  console.log("Merge Array: ", mergedArray);

  let tabledata = mergedArray
    .slice(0, 10)
    .map((data) => {
      return `
    <tr>
    <td>
    ${data.name}
    </td>
    <td>
    ${data.theme}
    </td>
    <td>
    ${data.type}
    </td>
    <td>
    ${data.cost}
    </td>
    <td>
    ${data.est_cust}
    </td>
    <td>
    ${data.maintenance_time}
    </td>
    <td>
    ${data.workers}
    </td>
    </tr>
    `;
    })
    .join("");
  tableBody.innerHTML = tabledata;
  // for (var i = 0; i < mergedArray.length ; i++) {
  //   mergedArray[]
  // }
  // return mergedArray;
}
merge();
// console.log(mergedArray);

// document.querySelector('#app').innerHTML = `
//   <div id="app">
//     <div class="table-row" id="row-1">
//       <div class="table-col">1</div>
//       <div class="table-col">
//         <img class="img" src="/img.jpg" />
//       </div>
//       <div class="table-col">aaaa</div>
//       <div class="table-col">bbbb</div>
//       <div class="table-col">cccc</div>
//       <div class="table-col">dddd</div>
//       <div class="table-col">eeee</div>
//       <div class="table-col">ffff</div>
//     </div>

//     <div class="table-row" id="row-2">
//       <div class="table-col">2</div>
//       <div class="table-col">
//         <img class="img" src="/img.jpg" />
//       </div>
//       <div class="table-col">aaaa</div>
//       <div class="table-col">bbbb</div>
//       <div class="table-col">cccc</div>
//       <div class="table-col">dddd</div>
//       <div class="table-col">eeee</div>
//       <div class="table-col">ffff</div>
//     </div>

//     <div class="table-row" id="row-3">
//       <div class="table-col">3</div>
//       <div class="table-col">
//         <img class="img" src="/img.jpg" />
//       </div>
//       <div class="table-col">aaaa</div>
//       <div class="table-col">bbbb</div>
//       <div class="table-col">cccc</div>
//       <div class="table-col">dddd</div>
//       <div class="table-col">eeee</div>
//       <div class="table-col">ffff</div>
//     </div>

//     <div class="table-row" id="row-4">
//       <div class="table-col">4</div>
//       <div class="table-col">
//         <img class="img" src="/img.jpg" />
//       </div>
//       <div class="table-col">aaaa</div>
//       <div class="table-col">bbbb</div>
//       <div class="table-col">cccc</div>
//       <div class="table-col">dddd</div>
//       <div class="table-col">eeee</div>
//       <div class="table-col">ffff</div>
//     </div>

//     <div class="table-row" id="row-5">
//       <div class="table-col">5</div>
//       <div class="table-col">
//         <img class="img" src="/img.jpg" />
//       </div>
//       <div class="table-col">aaaa</div>
//       <div class="table-col">bbbb</div>
//       <div class="table-col">cccc</div>
//       <div class="table-col">dddd</div>
//       <div class="table-col">eeee</div>
//       <div class="table-col">ffff</div>
//     </div>

//     <div class="table-row" id="row-6">
//       <div class="table-col">6</div>
//       <div class="table-col">
//         <img class="img" src="/img.jpg" />
//       </div>
//       <div class="table-col">aaaa</div>
//       <div class="table-col">bbbb</div>
//       <div class="table-col">cccc</div>
//       <div class="table-col">dddd</div>
//       <div class="table-col">eeee</div>
//       <div class="table-col">ffff</div>
//     </div>

//     <div class="table-row" id="row-7">
//       <div class="table-col">7</div>
//       <div class="table-col">
//         <img class="img" src="/img.jpg" />
//       </div>
//       <div class="table-col">aaaa</div>
//       <div class="table-col">bbbb</div>
//       <div class="table-col">cccc</div>
//       <div class="table-col">dddd</div>
//       <div class="table-col">eeee</div>
//       <div class="table-col">ffff</div>
//     </div>

//     <div class="table-row" id="row-8">
//       <div class="table-col">8</div>
//       <div class="table-col">
//         <img class="img" src="/img.jpg" />
//       </div>
//       <div class="table-col">aaaa</div>
//       <div class="table-col">bbbb</div>
//       <div class="table-col">cccc</div>
//       <div class="table-col">dddd</div>
//       <div class="table-col">eeee</div>
//       <div class="table-col">ffff</div>
//     </div>

//     <div class="table-row" id="row-9">
//       <div class="table-col">9</div>
//       <div class="table-col">
//         <img class="img" src="/img.jpg" />
//       </div>
//       <div class="table-col">aaaa</div>
//       <div class="table-col">bbbb</div>
//       <div class="table-col">cccc</div>
//       <div class="table-col">dddd</div>
//       <div class="table-col">eeee</div>
//       <div class="table-col">ffff</div>
//     </div>

//     <div class="table-row" id="row-10">
//       <div class="table-col">10</div>
//       <div class="table-col">
//         <img class="img" src="/img.jpg" />
//       </div>
//       <div class="table-col">aaaa</div>
//       <div class="table-col">bbbb</div>
//       <div class="table-col">cccc</div>
//       <div class="table-col">dddd</div>
//       <div class="table-col">eeee</div>
//       <div class="table-col">ffff</div>
//     </div>
//   </div>
// `;

// let arr1 = [];
// let arr2 = [];

// merge(arr1, arr2);
