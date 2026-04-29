import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';

const PhotoDetailsPage =async ({params}) => {
    const {id} = await params;
    console.log(id,"params id");

    const res = await fetch('https://project-on-pix-gen-image-generator.vercel.app/data.json')
    const photos = await res.json()
    console.log(photos,"Photo info by data fetching");

    const photo = photos.find(p=>p.id == id)
    console.log(photo,'Find info by id');

  if (!photo) {
    return <h2 className="text-center text-2xl">Photo not found</h2>;
  }
    return (
    <Card className="rounded-lg shadow border border-zinc-300 mx-auto my-8 ">
      <div className="card bg-base-100 shadow-sm space-y-5">
        <div className=" relative card-body">
          
          {photo.imageUrl && (
            <figure>
              <Image
                src={photo.imageUrl}
                alt={photo.title || "Photo info"}
                width={600}
                height={300}
                className="mx-auto rounded-2xl"
              />
              <Chip size="md" className="absolute left-200 top-4 rounded-full ">{photo.category}</Chip>
            </figure>
          )}
         <h2 className="font-bold text-3xl text-left">{photo.title}</h2>
          <p className="font-semibold text-lg text-left "><span className='font-semibold text-pink-700'>Prompt: </span> {photo.prompt}</p>
          <p className="font-semibold text-lg text-left "><span className='font-semibold text-blue-700'>Model: </span>  {photo.model}</p>
           
           <div className="flex flex-wrap justify-start gap-3 mt-5">
                  {photo.tags?.map((tag, ind) => (
                    <span
                      key={ind}
                      className="text-[#1f2937] font-semibold bg-green-300 rounded-full px-3 py-1 text-xs md:text-sm"
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>
          <div className="flex gap-5 mt-3 justify-start items-center">
                <div className="flex items-center gap-2 text-xl">
                      <FaHeart />
                      <p className='text-red-700 font-bold'>{photo.likes}</p>
                    </div>
          
                    <Separator orientation="vertical" />
          
                    <div className="flex items-center gap-2 text-xl">
                      <BiDownload />
                      <p className='text-green-700 font-bold'>{photo.downloads}</p>
                    </div>
          </div>
          <div className="flex justify-between items-center gap-2 mt-5">

            <Link href={`/all-photos`} >
              <Button>
                <FaArrowLeftLong />
                Back to Photos
              </Button>
    
            </Link>
          </div>
        </div>
      </div>
    </Card>
    );
};

export default PhotoDetailsPage;