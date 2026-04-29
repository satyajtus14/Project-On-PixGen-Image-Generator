

import photos from '../public/data.json';
import categories from '../public/category.json';

export async function  getAllPhotosData () {
    //  const res = await fetch('')
    // const photos = await res.json()
    return photos;
    
}

export async function getCategories (){
//   const res = await fetch("")
//   const dataCategories = await res.json()
  return categories;
}
