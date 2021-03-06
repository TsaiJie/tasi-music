import styled from 'styled-components';
import style from '@/assets/global-style';

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: ${(props) => (props.playList > 0 ? '55px' : '0px')};
  right: 0;
  left: 0;
  z-index: 100;
  background-color: ${style['color-background']};
  overflow: hidden;
  &.fly-enter,
  &.fly-appear {
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.fly-enter-active,
  &.fly-appear-active {
    transition: transform 0.3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    transition: transform 0.3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`;
export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  background: url(${(props) => props.bgUrl});
  padding-top: 75%;
  background-size: cover;
  z-index: 50;
  transform-origin: top;
  // 对图片的色调进行修饰
  .filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.3);
  }
`;
export const CollectButton = styled.div`
  position: absolute;
  box-sizing: border-box;
  left: 0;
  right: 0;
  margin: auto;
  width: 120px;
  height: 40px;
  margin-top: -55px;
  z-index: 50;
  background: ${style['color-theme-d']};
  color: ${style['color-text-ll']};
  -webkit-transform: rotate(0deg);
  border-radius: 20px;
  text-align: center;
  font-size: 0;
  line-height: 40px;
  .iconfont {
    display: inline-block;
    margin-right: 10px;
    font-size: 12px;
    vertical-align: 1px;
  }
  .text {
    display: inline-block;
    font-size: 14px;
    letter-spacing: 5px;
  }
`;
export const SongListWrapper = styled.div`
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  > div {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: visible;
  }
`;
export const BgLayer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: ${style['color-highlight-background']};
  border-radius: 10px;
  z-index: 50;
`;
