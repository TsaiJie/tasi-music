import React, { memo } from 'react';
import { getCount } from '@/api/utils';
import {
  RecommendList,
  RecommendListItem,
  RecommendListWrapper,
} from './style';
export default memo(function RecommnedList(props) {
  const { recommendList } = props;
  return (
    <RecommendListWrapper>
      <h1 className="title">推荐歌单</h1>
      <RecommendList>
        {recommendList.map((item, index) => {
          return (
            <RecommendListItem key={item.id + index}>
              <div className="img_wrapper">
                <div className="decorate"></div>
                <img
                  src={item.picUrl + '?param=300x300'}
                  width="100%"
                  height="100%"
                  alt="music"
                />
                <div className="play_count">
                  <i className="iconfont play">&#xe885;</i>
                  <span className="count">{getCount(item.playCount)}</span>
                </div>
              </div>
              <div className="desc">{item.name}</div>
            </RecommendListItem>
          );
        })}
      </RecommendList>
    </RecommendListWrapper>
  );
});
