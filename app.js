let url = 'https://api.github.com/users/adnan';

async function getInfo() {
  try {
    let res = await axios.get(url);
    console.log(res.data)
  } catch (e) {
    console.log(e)
  }
}
