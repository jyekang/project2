const searchButton = document.querySelector ('#searchButton')
const yourphotos = document.querySelector ('#yourphotos')

// const getPhotos = async () => {
//     const response = await axios.get(`http://localhost:3002/api/getallphotos`)
//     let data = response.data
//     console.log(data)
//     const GI1 = document.querySelector("#GI1")
//     GI1.src = '/images/' + response.data.photos[0].image
//   }

const getPhotos = async () => {
    const response = await axios.get(`http://localhost:3002/api/getallphotos`);
    const photos = response.data.photos;
  
    for (let i = 0; i < photos.length; i++) {
      console.log(photos.length)
      const imageId = `GI${i + 1}`;
      const imageElement = document.querySelector(`#${imageId}`);
      imageElement.src = `/images/${photos[i].image}`;
    }
  };
  

getPhotos()


if (searchButton) {
  searchButton.addEventListener('click', async () => {
    let albumName = searchInput.value
    console.log(albumName)
    let response = await axios.get(`http://localhost:3002/api/getallalbums/${albumName}`)
    let photos = response.data.image
    let html = ""
    for ( const photo of photos) {
      html += 
      `<div class="photo">
      <button class="deleteButton" data-id="${photo._id}">delete</button>
      <img class="YPphotos" src="/images/${photo.image}"/>
      </div>
      `
    }
    console.log(html)
    yourphotos.innerHTML = html

    const deleteButtons = document.getElementsByClassName('deleteButton')
    for (const button of deleteButtons) {
      button.addEventListener('click', deleteMe)
    }
  });
}

    const deleteMe = async (event) => {
      const photoId = event.target.getAttribute('data-id')
      try {
        await axios.delete(`http://localhost:3002/api/getAllPhotos/${photoId}`)
        event.target.parentElement.remove()
      } catch (error) {
        console.error(error)
      }
    };
 

// const photos = getPhotos()
// console.log(photos)
// const response = await axios.get(`http://localhost:3002/api/getallphotos`)
// console.log(response)



// GI1.src = response.data.photos[0].image
 