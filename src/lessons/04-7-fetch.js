/**
 *
 * Write a function that fetches data from the following endpoint:
 * https://jsonplaceholder.typicode.com/posts/3
 *
 * It should return a promise that resolves with the json data
 *
 * If the response is not ok, throw an error. Use try/catch.
 *
 */
async function fetchDataAsync() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/3"
    );
    const data = await response.json()
    console.log(data);
  } catch (error) {
    
  }
}

async function fetchDataAndProcess() {
  try {
    const data = await fetchDataAsync();
    // Log the title of the post to the console here
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataAndProcess();
