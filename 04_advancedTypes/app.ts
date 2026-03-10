// enum RequestType {
//   GET = "get",
//   POST = "post",
// }

function fetchWithAuth(url: string, method: "post" | "get"): 1 | 0 {
  return 1;
}

fetchWithAuth("feskflse", "post");
// fetchWithAuth("feskflse", "p");

const method1 = "post";
fetchWithAuth("fskfdlf", method1);

let method2 = "post";
fetchWithAuth("fskfdlf", method2 as "post");
/* НОО!!!!! */
let method3 = "3";
fetchWithAuth("fksl;df", method3 as "post");
