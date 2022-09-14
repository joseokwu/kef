import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

const MusicPlayerV2 = ({ title, songList, albumTitle, theme = 'dark' }) => {
  const audioRef = useRef(null);
  const [playingIndex, setPlayingIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  // const [songs, setSongs] = useState(songList);
  // const [songs, setSongs] = useState([
  //   {
  //     name: 'On the low',
  //     src: 'https://cdn.kennismusic.app/38a89545-40a8-4f69-bdde-34de37cf4a9d.mp3',
  //     album: 'Kalakuta Republic',
  //   },
  //   { name: 'Power rangers', src: '/Teni.mp3', album: 'Joeboy Republic' },
  //   {
  //     name: "Don't call me back",
  //     src: '/Joeboy.mp3',
  //     album: 'Joeboy Republic',
  //   },
  //   {
  //     name: 'Rise of the sunset',
  //     src: '/Lauv.mp3',
  //     album: 'Kalakuta Republic',
  //   },
  // ]);

  // useEffect(() => {
  //   console.log('In Music player...:', songList);
  //   setSongs(songList);
  // }, [songList]);

  const togglePlay = (i) => {
    console.log('playing song is', songList[i].src);
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.src = songList[i].src;
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const playOnClick = (i) => {
    if (playingIndex === i) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        setPlayingIndex(i);
        audioRef.current.play();
        setPlaying(true);
      }
    } else {
      audioRef.current.src = songList[i].src;
      setPlayingIndex(i);
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const play = (i) => {
    setPlayingIndex(i);
    setPlaying(true);
    audioRef.current.play();
  };

  const pause = (i) => {
    setPlaying(false);
    audioRef.current.pause();
  };

  const onNext = (i) => {
    if (playingIndex === songList.length - 1) {
      return;
    } else {
      audioRef.current.src = `${songList[i + 1].src}`;
      setPlayingIndex(i + 1);
      audioRef.current.play();
      setPlaying(true);
    }
  };
  const onPrev = (i) => {
    if (playingIndex === 0) {
      return;
    } else {
      audioRef.current.src = `${songList[i - 1].src}`;
      setPlayingIndex(i - 1);
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      {/* {title && (
        <h1 className='mb-[1.6rem] text-primary font-bold text-[2.5rem]'>
          Stream Artiste Music
        </h1>
      )} */}
      <div className='w-[100%] overflow-x-scroll scroll_hide max-w-[79.3rem]'>
        <div className=' w-full border-gray-lighter border-collapse  min-w-[7.3rem] text-[1.2rem]'>
          {/* Header */}
          <div className=' text-[#838383] whitespace-nowrap  grid grid-cols-[1fr_16.2rem_2fr_1fr_3fr_16.2rem] mb-[1.6rem]'>
            <span className='align-text-bottom border-gray-lighter font-medium text-left pt-[10px] px-[16px]'>
              #
            </span>

            <span className='align-text-bottom border-gray-lighter font-medium text-left pt-[10px] px-[16px]'>
              Title
            </span>

            <span className='align-text-bottom border-gray-lighter font-medium text-left pt-[10px] px-[16px]'>
              Artist
            </span>

            <span className='align-text-bottom border-gray-lighter font-medium text-left pt-[10px] px-[16px] '>
              Time
            </span>

            <span className='align-text-bottom border-gray-lighter font-medium text-left pt-[10px] px-[16px] '>
              Album
            </span>
            <span className='align-text-bottom border-gray-lighter font-medium text-left pt-[10px] px-[16px]'></span>
          </div>
          {/* Body */}

          {songList?.map((el, i) => {
            return (
              <div
                style={{
                  color: `${playingIndex === i ? 'white' : 'black'}`,
                  background: playingIndex === i ? '#A307A8' : 'white',
                }}
                key={i}
                className=' hover:bg-primary rounded-full  grid grid-cols-[1fr_16.2rem_2fr_1fr_3fr_16.2rem] place-items-start items-center justify-start '
                // onClick={() => playOnClick(i)}
              >
                <audio ref={audioRef} src={el?.fileUrl} />

                <span
                  className=' border-gray-lighter p-[16px] !py-[14px] text-left align-text-bottom text-[1.4rem] font-medium flex align-middle cursor-pointer'
                  onClick={() => playOnClick(i)}
                >
                  {playingIndex == i && playing ? (
                    <Image
                      src={'/waves.svg'}
                      height={20}
                      width={20}
                      alt='waves'
                    />
                  ) : playingIndex == i && !playing ? (
                    <Image
                      src={'/play-icon.svg'}
                      height={20}
                      width={20}
                      alt='waves'
                    />
                  ) : (
                    `${i + 1}`
                  )}
                </span>
                <span
                  className=' border-gray-lighter p-[16px] !py-[14px] text-left align-text-bottom text-[1.4rem] font-medium whitespace-nowrap cursor-pointer'
                  onClick={() => playOnClick(i)}
                >
                  <div className='flex items-center'>
                    <span className=' text-ellipsis overflow-hidden max-w-[12rem]'>
                      {el.name.slice(0, 5) + '...'}
                    </span>
                  </div>
                </span>
                <span
                  className=' border-gray-lighter p-[16px] !py-[14px] text-left align-text-bottom text-[1.4rem] font-medium whitespace-nowrap cursor-pointer'
                  onClick={() => playOnClick(i)}
                >
                  {/* {el?.name} */}
                </span>
                <span
                  className=' border-gray-lighter p-[16px] !py-[14px] text-right align-text-bottom text-[1.4rem] font-medium cursor-pointer'
                  onClick={() => playOnClick(i)}
                >
                  1:30
                </span>
                <span
                  className=' border-gray-lighter p-[16px] !py-[14px]  align-text-bottom text-[1.4rem] font-medium whitespace-nowrap cursor-pointer'
                  onClick={() => playOnClick(i)}
                >
                  {albumTitle}
                </span>

                <span className=' border-gray-lighter p-[16px] !py-[14px] text-right align-text-bottom text-[1.4rem] font-medium  cursor-pointer'>
                  <div className='flex items-center gap-[1.4rem] place-self-start'>
                    <Image
                      height={16}
                      width={16}
                      alt='waves'
                      onClick={() => {
                        onPrev(i);
                      }}
                      src='/prev.svg'
                    ></Image>
                    {playing ? (
                      <Image
                        height={16}
                        width={16}
                        alt='waves'
                        onClick={() => {
                          pause(i);
                        }}
                        src='/pause.svg'
                      ></Image>
                    ) : (
                      <Image
                        height={16}
                        width={16}
                        alt='waves'
                        onClick={() => {
                          play(i);
                        }}
                        src='/play.svg'
                      ></Image>
                    )}

                    <Image
                      height={16}
                      width={16}
                      alt='waves'
                      onClick={() => {
                        onNext(i);
                      }}
                      className=' rotate-180'
                      src='/prev.svg'
                    ></Image>
                  </div>
                </span>
              </div>
            );
          })}
        </div>
        {/* <audio ref={audioRef}>
          Your browser does not support the
          <code>audio</code> element.
        </audio> */}
      </div>
    </>
  );
};

export default MusicPlayerV2;
