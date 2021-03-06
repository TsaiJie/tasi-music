import { filterIndex } from '@/api/utils';
import Loading from '@/baseUI/Loading';
import Scroll from '@/baseUI/Scroll';
import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { getRankListAction } from './store';
import { List, ListItem, Container, SongList } from './style';
export default memo(function Rank(props) {
  const { rankList, loading ,playList} = useSelector(
    (state) => ({
      rankList: state.rank.rankList,
      loading: state.rank.loading,
      playList: state.player.playList
    }),
    shallowEqual
  );
  const globalStartIndex = filterIndex(rankList);
  const officialList = rankList.slice(0, globalStartIndex);
  const globalList = rankList.slice(globalStartIndex);
  const dispatch = useDispatch();
  // 榜单数据未加载出来之前都给隐藏
  const displayStyle = loading ? { display: 'none' } : { display: '' };
  useEffect(() => {
    if (!rankList.length) {
      dispatch(getRankListAction());
    }
  }, [dispatch, rankList]);
  const enterDetail = (item) => {
    props.history.push(`/rank/${item.id}`);
  };

  // 这是渲染榜单列表函数，传入 global 变量来区分不同的布局方式
  const renderRankList = (list, global) => {
    return (
      <List globalRank={global}>
        {list.map((item) => {
          return (
            <ListItem
              key={item.id}
              tracks={item.tracks}
              onClick={() => enterDetail(item)}
            >
              <div className="img_wrapper">
                <img src={item.coverImgUrl} alt="排行" />
                <div className="decorate"></div>
                <span className="update_frequency">{item.updateFrequency}</span>
              </div>
              {renderSongList(item.tracks)}
            </ListItem>
          );
        })}
      </List>
    );
  };
  const renderSongList = (list) => {
    return list.length ? (
      <SongList>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {index + 1}. {item.first} - {item.second}
            </li>
          );
        })}
      </SongList>
    ) : null;
  };
  return (
    <Container playList={playList.length}>
      <Scroll data={rankList}>
        <div>
          <h1 className="official" style={displayStyle}>
            官方榜
          </h1>
          {renderRankList(officialList)}
          <h1 className="global" style={displayStyle}>
            全球榜
          </h1>
          {renderRankList(globalList, true)}
        </div>
        {loading ? <Loading /> : null}
      </Scroll>
      {renderRoutes(props.route.routes)}
    </Container>
  );
});
