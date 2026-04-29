
export async function  getAllPhotosData () {
     const res = await fetch('https://project-on-pix-gen-image-generator.vercel.app/lib/data.json')
    const photos = await res.json()
    return photos.data;
    
}

export async function getCategories (){
  const res = await fetch("https://project-on-pix-gen-image-generator.vercel.app/lib/category.json")
  const dataCategories = await res.json()
  return dataCategories.data;
}
