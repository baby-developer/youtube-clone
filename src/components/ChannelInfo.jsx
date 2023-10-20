import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: imageUrl } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => youtube.channelImageURL(id),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="flex gap-2 items-center mt-4 mb-8">
      {imageUrl && (
        <img className="w-10 h-10 rounded-full" src={imageUrl} alt={name} />
      )}
      <p className="text-lg font-medium">{name}</p>
    </div>
  );
}
