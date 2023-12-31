# MagicPlayer
MagicPlayer 支持主流的播放器功能 以及主流的视频格式和功能 以及判别视频文件属于哪类视频格式，支持多个播放器同步播放时间校正
# magic-videoplayer

magic-videoplayer 基于 react 开发,支持主流的播放器功能 以及主流的视频格式和功能 以及判别视频文件属于哪类视频格式，支持多个播放器同步播放时间校正 #使用

#项目里使用

```
npm i magic-videoplayer --save
或
yarn add magic-videoplayer
```

# Player 播放器

视频播放器

## 代码演示

```tsx
import React, { useEffect, useState } from 'react';
import { Player } from 'magic-videoplayer';

const Play = () => {
  const [url, setUrl] = useState('');
  const [ref, setRef] = useState('');
  const [wsUrl, setWsUrl] = useState('');
  const [width, setWidth] = useState(700);

  return (
    <div>
      <div style={{ width }}>
        <Player
          url={url}
          onRef={(s) => {
            setRef(s);
          }}
          extra={<div style={{ color: '#fff', lineHeight: '30px' }}>额外按钮</div>}
          onPtzChange={(ptz) => {
            console.log(ptz, 'ptzchange');
          }}
          onError={() => {
            console.log('错误onerr');
          }}
          reconnection
          onPlay={(w, h, type) => {
            console.log({ w, h, type });
          }}
          emptyurlPrompt="请选择摄像头"
          onFullChange={(full) => {
            console.log(full);
          }}
        ></Player>
      </div>
    </div>
  );
};

export default () => <Play />;
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| url | 视频地址 直播为 ws 开头 片段为 http 开头 | <font color='#c41d7f'>string</font> | - |
| onError | 播放错误时的回调 | <font color='#c41d7f'> ()=>void </font> | - |
| onPlay | 直播流开始播放的回调 | <font color='#c41d7f'> (videoWidth: number, videoHeight: number,videoType:string) => void </font> | - |
| autoPlay | 直播流是否自动播放 | <font color='#c41d7f'> boolean</font> | true |
| reconnection | 是否开启断线重连 | <font color='#c41d7f'> boolean </font> | false |
| onRef | 组件的 ref 引用 | <font color='#c41d7f'> (ref:any)=>void</font> | - |
| extra | 控制台额外的标签 | <font color='#c41d7f'> ReactNode \| (() => ReactNode) </font> | - |
| videoClass | video 暴露 class | <font color='#c41d7f'> string </font> | - |
| canvasClass | canvas 暴露 class | <font color='#c41d7f'> string </font> | - |
| screenshot | 是否显示截图按钮 | <font color='#c41d7f'>boolean</font> | false |
| closeControlBar | 关闭底部控制栏(仅在直播流有效) | <font color='#c41d7f'>boolean</font> | false |
| banfullscreen | 禁止播放器全屏(仅在直播流有效) | <font color='#c41d7f'>boolean</font> | false |
| emptyurlPrompt | 播放地址为空时的提示内容 | <font color='#c41d7f'> string</font> | - |
