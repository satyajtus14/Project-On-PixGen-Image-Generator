import PhotoCards from '@/components/PhotoCards';
import React from 'react';
import { getAllPhotosData } from '../../../util/dataFetching';


const AllPhotosPage = async() => {
   const photos = await getAllPhotosData();

    return (
        <div>
            <h1 className='text-2xl font-bold m-4'>All Photos</h1>
            <div className='grid grid-cols-4 gap-5'>
                {
                    photos.map(photo => <PhotoCards key={photo.id} photo={photo}>
                        
                    </PhotoCards>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;