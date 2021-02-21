import React, { memo } from 'react';
import { getName } from '@/api/utils';
import {
  NormalPlayerContainer,
  Top,
  Middle,
  Bottom,
  Operators,
  CDWrapper,
} from './style';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
export default memo(function NormalPlayer(props) {
  const { song, fullScreen } = props;
  const { changeFullScreenDispatch } = props;
  console.log('normal', song);
  console.log('normal', fullScreen);
  const normalPlayerRef = useRef();
  return (
    // onEnter入场动画第一帧时执行
    // onEntering当入场动画执行到第二帧时执行
    // onEntered 入场动画结束时触发的钩子
    // onExit出场动画第一帧时执行
    // onExiting出场动画第二帧时执行
    // onExited整个动画出场结束时执行
    <CSSTransition
      classNames="normal"
      in={fullScreen}
      timeout={400}
      // mountOnEnter
      onExited={() => {
        normalPlayerRef.current.style.display = 'none';
      }}
      onEnter={() => {
        normalPlayerRef.current.style.display = 'block';
      }}
    >
      <NormalPlayerContainer ref={normalPlayerRef}>
        <div className="background">
          <img
            src={song.al.picUrl + '?param=300x300'}
            width="100%"
            height="100%"
            alt="歌曲图片"
          />
        </div>
        <div className="background layer"></div>
        <Top className="top">
          <div
            className="back"
            onClick={() => {
              changeFullScreenDispatch(false);
            }}
          >
            <i className="iconfont icon-back">&#xe662;</i>
          </div>
          <h1 className="title">{song.name}</h1>
          <h1 className="subtitle">{getName(song.ar)}</h1>
        </Top>
        <Middle>
          <CDWrapper>
            <div className="cd">
              <img
                className="image play"
                src={song.al.picUrl + '?param=400x400'}
                alt=""
              />
            </div>
          </CDWrapper>
        </Middle>
      </NormalPlayerContainer>
    </CSSTransition>
  );
});
