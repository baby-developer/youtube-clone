import React from 'react';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['createdBychannel', id],
    queryFn: () => youtube.channelVideos(id),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul>
          {videos.map(video => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}
