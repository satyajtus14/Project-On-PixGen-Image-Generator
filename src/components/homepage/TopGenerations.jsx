import React from 'react';
import PhotoCards from '../PhotoCards';

const TopGenerations = async() => {
    const res = await fetch('https://project-on-pix-gen-image-generator.vercel.app/data.json')
    const photos = await res.json()
    console.log(photos);

    const topPhotos = photos.slice(0,8)
    
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>Top Generations</h1>
            <div className='grid grid-cols-4 gap-5'>
                {
                    topPhotos.map(photo => <PhotoCards key={photo.id} photo={photo}>
                        
                    </PhotoCards>)
                }
            </div>
        </div>
    );
};

export default TopGenerations;