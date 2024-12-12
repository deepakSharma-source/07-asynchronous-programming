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
    if(!response.ok) {
      throw new Error("Response is not okay")
    }
    const data = await response.json()
    return data;
    //console.log(data);
  } catch (error) {
    console.error(error)
  }
}

async function fetchDataAndProcess() {
  try {
    const data = await fetchDataAsync();
    // Log the title of the post to the console here
    console.log(data.title);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataAndProcess();
