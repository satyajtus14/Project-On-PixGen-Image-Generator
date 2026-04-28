import { Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const PhotoCards = ({ photo }) => {
  return (
    <Card className="border border-zinc-300 shadow-md rounded-xl">
      {/* Image ONLY */}
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-xl object-cover"
        />
        <Chip size="sm" className="absolute right-2 top-2">{photo.category}</Chip>
      </div>

      {/* Content BELOW image */}
      <div className="p-3">
        <h2 className="font-medium">{photo.title}</h2>

        <div className="flex gap-5 mt-2 items-center">
          <div className="flex items-center gap-2">
            <FaHeart />
            <p>{photo.likes}</p>
          </div>

          <Separator orientation="vertical" />

          <div className="flex items-center gap-2">
            <BiDownload />
            <p>{photo.downloads}</p>
          </div>
        </div>
      </div>
      <button variant='outline' className='w-full p-1 shadow-md border rounded-full border-zinc-300'>View</button>
    </Card>
  );
};

export default PhotoCards;
