import { getCount, getName } from '@/api/utils';
import React, { memo, forwardRef } from 'react';
import { SongList, SongItem } from './style';
import {
  changeCurrentIndexAction,
  changeFullScreenAction,
  changePlayListAction,
  changePlayingStateAction,
  changeSequenceListAction,
  changePlayModeAction,
} from '@/application/Player/store';
import { useDispatch } from 'react-redux';
import { playMode } from '@/api/config';
export default memo(
  forwardRef(function SongsList(props, refs) {
    const { songList, subscribedCount, showCollect } = props;
    const dispatch = useDispatch();

    const play = () => {
      dispatch(changeSequenceListAction(songList));
      dispatch(changePlayListAction(songList));
      dispatch(changeFullScreenAction(true));
      dispatch(changePlayingStateAction(true));
      dispatch(changePlayModeAction(playMode.sequence));
    };
    const selectItem = (item, index) => {
      play();
      dispatch(changeCurrentIndexAction(index));
    };
    const playAll = () => {
      play();
      dispatch(changeCurrentIndexAction(0));
    };
    const collect = (count) => {
      return (
        <div className="add_list">
          <i className="iconfont">&#xe62d;</i>
          <span>收藏 ({getCount(count)})</span>
        </div>
      );
    };
    const totalCount = songList.length;

    const renderSongList = (songList) => {
      return (
        <SongList>
          <div className="first_line">
            <div className="play_all" onClick={playAll}>
              <i className="iconfont">&#xe6e3;</i>
              <span>
                播放全部
                <span className="sum">(共 {totalCount} 首)</span>
              </span>
            </div>
            {showCollect ? collect(subscribedCount) : null}
          </div>
          <SongItem>
            {songList.map((item, index) => {
              return (
                <li key={item.id} onClick={(item) => selectItem(item, index)}>
                  <div className="index">{index + 1}</div>
                  <div className="info">
                    <span>{item.name}</span>
                    <span>
                      {getName(item.ar)} - {item.al.name}
                    </span>
                  </div>
                </li>
              );
            })}
          </SongItem>
        </SongList>
      );
    };
    return renderSongList(songList);
  })
);
