console.log('working')

const getPhotos = async () => {
    const response = await axios.get(`http://localhost:3002/api/getallphotos`)
    let data = response.data
    console.log(data)
    const GI1 = document.querySelector("#GI1")
    GI1.src = '/images/' + response.data.photos[0].image
  }


getPhotos()
// const photos = getPhotos()
// console.log(photos)
// const response = await axios.get(`http://localhost:3002/api/getallphotos`)
// console.log(response)



// GI1.src = response.data.photos[0].image
 