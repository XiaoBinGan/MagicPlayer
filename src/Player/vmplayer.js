'use strict';const _0x3038ad=_0x454c;function _0x29b4(){const _0x5d1ed4=['bind','onclose','FirstFrameTime','updating','DecodeWorker',',startMediatime=','set','初始化失败，请使用chrome浏览器且版本>=83','shift','currentTime','videoPattern','loaded','初始化失败，请使用chrome浏览器','remove',',playtime=','log','requestVideoFrameCallbackIdentifier','91195OZMCbW','ws\x20关闭','includes','parse','78030DGsRdQ','YData','start','Url','MediaStatusTimer','getElementById','data',',end=','playbackRate','252890yWdsVN','onLine','%c\x20','SR_Destroy','2GVyOAw','视频流异常，请稍后重试刷新','arraybuffer','live','font-size:\x2014px;\x0a\x20\x20\x20color:\x20#317ef2;\x0a\x20\x20\x20margin:\x2010px\x2010px\x2010px\x2016px\x20;\x0a\x20\x20\x20padding:\x2012px\x2012px\x2012px\x2036px;\x0a\x20\x20\x20border-radius:\x206px;\x0a\x20\x20\x20background-size:\x2020px;','addSourceBuffer','99vpORLc','VData','errorCallback','0.0.7','frame','462PFfLoy','width','sei_frame_callback','MediaStatusCallback','src','analyzer','网络异常，请检查网络连接情况后重试播放',',targetTime=','MediaStatus','cancelVideoFrameCallback','splice','wsClose','SuperRender','command','onMediaInfoChange','sei_queue','ReceiveFPS','wsUrl','59905cutDLe','SR_DisplayFrameData','onerror','terminate','onMediaInfo','open','LIVE','88BufvcW','softwareDecoding','navigator','onupdateend','getContext','streamAppType','202296bALLhd','1100hmzncP','string','浏览器不支持ws!','hardwareDecoding','videoCanvasId','push','byteLength','ANALYZER','视频流地址格式异常，请检查','remove\x20start\x20pos=','debug','0KB/s','KB/s','视频头信息有误!','MagicPlayer\x20v','WebSocket','pause',',start=','warn','startPlay','浏览器不支持\x20requestVideoFrameCallback!','mediaTime','onmessage','frame_queue','postMessage','toFixed','requestVideoFrameCallback',',ptstime=','\x2020230410','pts','readyState','length','ByteRate','prototype','now','getElementsByClassName','UData','intelligence_frame_callback','remove\x20end\x20pos=','videomse','appendBuffer','FirstFrameTime=','chase\x20frame\x20pos=','buffered'];_0x29b4=function(){return _0x5d1ed4;};return _0x29b4();}(function(_0x2d81bc,_0x66211c){const _0x5b8691=_0x454c,_0x5a9e6c=_0x2d81bc();while(!![]){try{const _0x28c30f=-parseInt(_0x5b8691(0x135))/0x1*(parseInt(_0x5b8691(0x118))/0x2)+-parseInt(_0x5b8691(0x142))/0x3+parseInt(_0x5b8691(0x143))/0x4+-parseInt(_0x5b8691(0x107))/0x5+-parseInt(_0x5b8691(0x10b))/0x6+parseInt(_0x5b8691(0x123))/0x7*(-parseInt(_0x5b8691(0x13c))/0x8)+-parseInt(_0x5b8691(0x11e))/0x9*(-parseInt(_0x5b8691(0x114))/0xa);if(_0x28c30f===_0x66211c)break;else _0x5a9e6c['push'](_0x5a9e6c['shift']());}catch(_0x2a0a34){_0x5a9e6c['push'](_0x5a9e6c['shift']());}}}(_0x29b4,0x1d16b));function _0x454c(_0x37f972,_0x5301c4){const _0x29b464=_0x29b4();return _0x454c=function(_0x454c5b,_0x18347c){_0x454c5b=_0x454c5b-0xd8;let _0xba9810=_0x29b464[_0x454c5b];return _0xba9810;},_0x454c(_0x37f972,_0x5301c4);}import _0x3360d3 from'./super_render_20.js';import _0x591422 from'./decode_worker.js';import{handleVideoHeadInfo,formatWsUrl}from'./utils';window[_0x3038ad(0x14d)]=![];const SuperRender2=_0x3360d3();export const PlayerVersion=_0x3038ad(0x121);export const Version=_0x3038ad(0xd8)+PlayerVersion+_0x3038ad(0xe6);const StreamAppType={'LIVE':_0x3038ad(0x11b),'ANALYZER':_0x3038ad(0x128)};export default function vmplayer(_0x3ef42b,_0x1466cb,_0x186496){const _0x44c650=_0x3038ad;this[_0x44c650(0x147)]=_0x3ef42b,this[_0x44c650(0xf1)]=_0x1466cb,this[_0x44c650(0x134)]=formatWsUrl(_0x186496,PlayerVersion);if(this[_0x44c650(0x134)][_0x44c650(0x109)](StreamAppType['ANALYZER']))this[_0x44c650(0x141)]=StreamAppType[_0x44c650(0x14a)];else this[_0x44c650(0x134)][_0x44c650(0x109)](StreamAppType[_0x44c650(0x13b)])?this[_0x44c650(0x141)]=StreamAppType[_0x44c650(0x13b)]:this[_0x44c650(0x141)]=StreamAppType[_0x44c650(0x13b)];this['ws']=null,this[_0x44c650(0xe1)]=[],this['sei_queue']=[],this[_0x44c650(0x125)]=null,this[_0x44c650(0xfa)]=null,this[_0x44c650(0x12f)]=null,this['pre_ptz'],this[_0x44c650(0xdd)]=null,this[_0x44c650(0x139)]=null,this[_0x44c650(0x120)]=null,this[_0x44c650(0x12e)]=null,this[_0x44c650(0x126)]=null,this[_0x44c650(0x12b)]={},this['MediaStatus'][_0x44c650(0x10e)]=_0x186496,this[_0x44c650(0x10f)]=null,this[_0x44c650(0xf8)]=-0x1,this['requestVideoFrameCallbackIdentifier']=0x0;}vmplayer[_0x3038ad(0xeb)][_0x3038ad(0x13a)]=function(_0x2752e6,_0x453cd3){const _0x2f58c0=_0x3038ad;let _0xc0931d=!![],_0x290791=!![],_0x477e64=![],_0x5a9628=![],_0x3a8fec=null,_0xeacb00=0x0,_0x524da3=0x0,_0xed4754=0x0,_0x4c7189=0x0,_0xefaf7f=0x0,_0x2e6964=document[_0x2f58c0(0x110)](this[_0x2f58c0(0xf1)]);const _0x406d22=document[_0x2f58c0(0xed)]('pointCanvas')[0x0];var _0x556fd5=_0x406d22[_0x2f58c0(0x140)]('2d');if(!window[_0x2f58c0(0xd9)]){console['log'](_0x2f58c0(0x145)),_0x2752e6&&_0x2752e6(_0x2f58c0(0x102),![]);return;}if(!_0x2e6964[_0x2f58c0(0xe4)]){console[_0x2f58c0(0x105)](_0x2f58c0(0xde)),_0x2752e6&&_0x2752e6(_0x2f58c0(0xfd),![]);return;}if(!this['wsUrl'][_0x2f58c0(0x109)]('ws')){_0x2752e6&&_0x2752e6(_0x2f58c0(0x14b),![]);return;}try{this['ws']=new WebSocket(this['wsUrl']),this['ws']['binaryType']=_0x2f58c0(0x11a),this['ws'][_0x2f58c0(0xe0)]=function(_0xab89c0){const _0x7907fc=_0x2f58c0;if(_0xc0931d){const _0x4bede8=handleVideoHeadInfo(_0xab89c0[_0x7907fc(0x111)]);if(!_0x4bede8){_0x2752e6&&_0x2752e6(_0x7907fc(0x150));return;}_0xc0931d=![];_0x4bede8['decodingPattern']==='softwareDecoding'?(this[_0x7907fc(0x12f)]=new SuperRender2(this[_0x7907fc(0x147)]),_0x477e64=!![],this[_0x7907fc(0xdd)]&&this[_0x7907fc(0xdd)](_0x7907fc(0x13d),'265'),this[_0x7907fc(0xfa)]=new Worker(_0x591422),this[_0x7907fc(0xfa)][_0x7907fc(0xe0)]=function(_0x18d3bf){const _0x471055=_0x7907fc;switch(_0x18d3bf[_0x471055(0x111)][_0x471055(0x130)]){case _0x471055(0x101):_0x5a9628=!![];break;case _0x471055(0x122):var _0x2f107f=_0x18d3bf[_0x471055(0x111)]['width'],_0x3b78e7=_0x18d3bf[_0x471055(0x111)]['height'],_0x53531b=new Uint8Array(_0x18d3bf[_0x471055(0x111)][_0x471055(0x10c)]),_0x3efd2d=new Uint8Array(_0x18d3bf[_0x471055(0x111)][_0x471055(0xee)]),_0x333fb5=new Uint8Array(_0x18d3bf[_0x471055(0x111)][_0x471055(0x11f)]);this['SuperRender'][_0x471055(0x136)](_0x2f107f,_0x3b78e7,_0x53531b,_0x3efd2d,_0x333fb5);var _0x214547={'width':_0x2f107f,'height':_0x3b78e7};(_0x214547[_0x471055(0x124)]!=_0xeacb00||_0x214547['height']!=_0x3b78e7)&&(this[_0x471055(0x139)]&&this[_0x471055(0x139)](_0x214547));_0xeacb00=_0x2f107f,_0x524da3=_0x3b78e7;this[_0x471055(0x132)][_0x471055(0xe9)]!==0x0&&(this['sei_frame_callback']&&this['sei_frame_callback'](this['sei_queue'][_0x471055(0xfe)]()));break;}}[_0x7907fc(0xf6)](this)):_0x1b3719(_0x4bede8);return;}if(typeof _0xab89c0[_0x7907fc(0x111)]===_0x7907fc(0x144)){if(this['streamAppType']===StreamAppType[_0x7907fc(0x14a)]){let _0x277f95=JSON[_0x7907fc(0x10a)](_0xab89c0[_0x7907fc(0x111)]);_0x277f95[_0x7907fc(0xe7)]=_0x277f95['pts']/0x3e8,this[_0x7907fc(0x132)][_0x7907fc(0x148)](_0x277f95),this[_0x7907fc(0x132)][_0x7907fc(0xe9)]>0xc8&&this['sei_queue'][_0x7907fc(0x12d)](0x0,this[_0x7907fc(0x132)][_0x7907fc(0xe9)]-0xc8);}else{if(this[_0x7907fc(0x141)]===StreamAppType[_0x7907fc(0x13b)]){if(this[_0x7907fc(0xf8)]===-0x1){let _0x5aee4c=JSON[_0x7907fc(0x10a)](_0xab89c0[_0x7907fc(0x111)]);this[_0x7907fc(0xf8)]=_0x5aee4c[_0x7907fc(0x111)]['ntp_time_stamp'];}}}}else{if(_0x477e64){if(_0x290791){_0x290791=![];return;}this[_0x7907fc(0xe1)][_0x7907fc(0x148)](_0xab89c0[_0x7907fc(0x111)]);if(!_0x5a9628)return;let _0x5c41f8=this['frame_queue'][_0x7907fc(0xfe)]();this[_0x7907fc(0xfa)][_0x7907fc(0xe2)](_0x5c41f8,[_0x5c41f8]);}else{_0x4c7189+=0x1,_0xefaf7f+=_0xab89c0[_0x7907fc(0x111)]['byteLength'];_0xed4754===0x0&&(_0xed4754=Date[_0x7907fc(0xec)]());this[_0x7907fc(0xe1)][_0x7907fc(0x148)](_0xab89c0[_0x7907fc(0x111)]);if(!_0x3a8fec||_0x3a8fec[_0x7907fc(0xf9)])return;if(this[_0x7907fc(0xe1)]['length']===0x1)_0x3a8fec[_0x7907fc(0xf2)](this['frame_queue']['shift']());else{let _0x26f770=0x0;for(const _0x1ab1c1 of this['frame_queue']){_0x26f770+=_0x1ab1c1[_0x7907fc(0x149)];}let _0x4c98b1=new Uint8Array(_0x26f770),_0x3c2b1c=0x0;for(const _0x2e3c7d of this[_0x7907fc(0xe1)]){let _0x2aba2=new Uint8Array(_0x2e3c7d);_0x4c98b1[_0x7907fc(0xfc)](_0x2aba2,_0x3c2b1c),_0x3c2b1c+=_0x2e3c7d[_0x7907fc(0x149)];}_0x3a8fec[_0x7907fc(0xf2)](_0x4c98b1),this[_0x7907fc(0xe1)]['splice'](0x0,this['frame_queue'][_0x7907fc(0xe9)]);}}}}['bind'](this),this['ws'][_0x2f58c0(0xf7)]=function(_0xe56168){const _0x391e94=_0x2f58c0;console['log'](_0x391e94(0x108)),this[_0x391e94(0x10f)]&&clearInterval(this['MediaStatusTimer']),this[_0x391e94(0x12b)][_0x391e94(0x133)]='0',this['MediaStatus'][_0x391e94(0xea)]=_0x391e94(0x14e),this[_0x391e94(0x126)]&&this['MediaStatusCallback'](this[_0x391e94(0x12b)]),this[_0x391e94(0x12e)]&&this['wsClose']();}[_0x2f58c0(0xf6)](this),this['ws'][_0x2f58c0(0x137)]=function(_0x27251b){};var _0x1b3719=function(_0x2d9e3c){const _0x3c2073=_0x2f58c0;let _0x1cc507=document[_0x3c2073(0x110)](this[_0x3c2073(0xf1)]),_0x25e729=new MediaSource();const _0x55f9f3=URL['createObjectURL'](_0x25e729);_0x1cc507[_0x3c2073(0x127)]=_0x55f9f3,this[_0x3c2073(0xdd)]&&this[_0x3c2073(0xdd)](_0x3c2073(0x146),_0x2d9e3c[_0x3c2073(0x100)]),_0x25e729['onsourceopen']=function(){const _0x396b26=_0x3c2073;try{_0x3a8fec=_0x25e729[_0x396b26(0x11d)](_0x2d9e3c['mimeType']);let _0x42150b=0x0;_0x3a8fec[_0x396b26(0x13f)]=function(){const _0x16d717=_0x396b26;let _0x28de36=_0x1cc507[_0x16d717(0xff)];if(_0x1cc507[_0x16d717(0xf5)][_0x16d717(0xe9)]>0x0){let _0x5acf61=_0x1cc507['buffered'][_0x16d717(0x10d)](_0x1cc507[_0x16d717(0xf5)][_0x16d717(0xe9)]-0x1),_0x2b4319=_0x1cc507['buffered']['end'](_0x1cc507['buffered'][_0x16d717(0xe9)]-0x1);debug&&console[_0x16d717(0x105)]('pos='+_0x28de36+_0x16d717(0xdb)+_0x5acf61+_0x16d717(0x112)+_0x2b4319),_0x28de36<_0x5acf61&&(debug&&console[_0x16d717(0x105)]('set\x20video.currentTime\x20pos='+_0x28de36+_0x16d717(0xdb)+_0x5acf61+_0x16d717(0x112)+_0x2b4319),_0x1cc507['currentTime']=_0x5acf61),_0x28de36>_0x2b4319&&(debug&&console['warn'](_0x16d717(0xf4)+_0x28de36+_0x16d717(0xdb)+_0x5acf61+',end='+_0x2b4319),_0x1cc507[_0x16d717(0xff)]=_0x5acf61),_0x28de36-_0x5acf61>0x1e&&!_0x3a8fec['updating']&&(debug&&console['warn'](_0x16d717(0x14c)+_0x28de36+_0x16d717(0xdb)+_0x5acf61+_0x16d717(0x112)+_0x2b4319),_0x3a8fec[_0x16d717(0x103)](0x0,_0x28de36-0x3)),_0x2b4319-_0x28de36>0x1e&&!_0x3a8fec['updating']&&(debug&&console[_0x16d717(0xdc)](_0x16d717(0xf0)+_0x28de36+_0x16d717(0xdb)+_0x5acf61+_0x16d717(0x112)+_0x2b4319),_0x3a8fec['remove'](0x0,_0x2b4319-0x3));}_0x42150b=_0x28de36;};}catch(_0x59e597){console[_0x396b26(0x105)](_0x59e597),_0x2752e6&&_0x2752e6(_0x396b26(0x119));}};}[_0x2f58c0(0xf6)](this);}catch(_0x13b636){console[_0x2f58c0(0x105)](_0x13b636),_0x2752e6&&_0x2752e6(_0x2f58c0(0x119));}let _0x42ffc0=function(){const _0x41dfcf=_0x2f58c0;let _0x4af9ea=(Date[_0x41dfcf(0xec)]()-_0xed4754)/0x3e8;this[_0x41dfcf(0x12b)][_0x41dfcf(0x133)]=(_0x4c7189/_0x4af9ea)[_0x41dfcf(0xe3)](0x2),this[_0x41dfcf(0x12b)][_0x41dfcf(0xea)]=(_0xefaf7f/_0x4af9ea/0x400)[_0x41dfcf(0xe3)](0x2)+_0x41dfcf(0x14f),this['MediaStatus']['BufferSize']=this[_0x41dfcf(0xe1)][_0x41dfcf(0xe9)],_0xed4754=0x0,_0x4af9ea=0x0,_0x4c7189=0x0,_0xefaf7f=0x0,this[_0x41dfcf(0x126)]&&this[_0x41dfcf(0x126)](this[_0x41dfcf(0x12b)]);}[_0x2f58c0(0xf6)](this),_0x2f950a=0x0,_0x2d2d6e=0x0,_0x6fdbec=0x0;var _0x439c35=function(_0x168158,_0x4da3a6){const _0x598473=_0x2f58c0;if(this[_0x598473(0x141)]===StreamAppType['ANALYZER'])do{if(this[_0x598473(0x132)][_0x598473(0xe9)]===0x0)break;let _0x5cf6ab=this[_0x598473(0x132)][0x0];if(_0x5cf6ab['pts']-_0x4da3a6[_0x598473(0xdf)]>0.1)break;else{if(_0x5cf6ab['pts']<_0x4da3a6[_0x598473(0xdf)]){this[_0x598473(0x132)][_0x598473(0xfe)]();while(_0x5cf6ab[_0x598473(0xe7)]<_0x4da3a6[_0x598473(0xdf)]&&this[_0x598473(0x132)][_0x598473(0xe9)]!==0x0){_0x5cf6ab=this[_0x598473(0x132)][_0x598473(0xfe)]();}this['sei_frame_callback']&&this['sei_frame_callback'](_0x5cf6ab);}else this[_0x598473(0x125)]&&this[_0x598473(0x125)](_0x5cf6ab),this['sei_queue']['shift']();}}while(![]);else{if(this[_0x598473(0x141)]===StreamAppType[_0x598473(0x13b)]){if(_0x453cd3===0x0)return;_0x2f950a===0x0&&(_0x2e6964[_0x598473(0x113)]=0.25,_0x2f950a=_0x168158,_0x2d2d6e=_0x4da3a6[_0x598473(0xdf)],console['log'](_0x598473(0xf3)+this[_0x598473(0xf8)]+_0x598473(0x12a)+_0x453cd3),_0x6fdbec=(this[_0x598473(0xf8)]-_0x453cd3)/0x3e8);let _0x5eabc6=_0x6fdbec+_0x4da3a6[_0x598473(0xdf)]-_0x2d2d6e,_0x257b52=(_0x168158-_0x2f950a)/0x3e8;debug&&console[_0x598473(0x105)]('metadata.mediaTime='+_0x4da3a6[_0x598473(0xdf)]+_0x598473(0xfb)+_0x2d2d6e+_0x598473(0xe5)+_0x5eabc6+_0x598473(0x104)+_0x257b52),_0x5eabc6-_0x257b52<0.01&&(_0x2e6964[_0x598473(0x113)]=0x1);}}this[_0x598473(0x106)]=_0x2e6964[_0x598473(0xe4)](_0x439c35);}['bind'](this);this['requestVideoFrameCallbackIdentifier']=_0x2e6964[_0x2f58c0(0xe4)](_0x439c35),this[_0x2f58c0(0x12b)][_0x2f58c0(0x10e)]=this[_0x2f58c0(0x134)],this[_0x2f58c0(0x10f)]&&clearInterval(this[_0x2f58c0(0x10f)]),this[_0x2f58c0(0x10f)]=setInterval(_0x42ffc0,0x3e8);},vmplayer['prototype'][_0x3038ad(0x137)]=function(_0x24a73c){const _0x2d0626=_0x3038ad;_0x24a73c&&this['ws']&&(vmplayer['prototype'][_0x2d0626(0x120)]=_0x24a73c,this['ws'][_0x2d0626(0x137)]=function(_0x440280){const _0x131398=_0x2d0626,_0x2ca9e9=document[_0x131398(0x110)](this[_0x131398(0xf1)]);this[_0x131398(0x106)]&&_0x2ca9e9[_0x131398(0x12c)](this[_0x131398(0x106)]),_0x440280['target'][_0x131398(0xe8)]===0x3&&(window[_0x131398(0x13e)][_0x131398(0x115)]?_0x24a73c('视频流地址不存在，请联系管理员'):_0x24a73c(_0x131398(0x129)));});},vmplayer[_0x3038ad(0xeb)]['close']=function(_0x244902){const _0x1254e7=_0x3038ad;this['ws']&&this['ws']['close']();const _0x57f2db=document[_0x1254e7(0x110)](this['videomse']);this[_0x1254e7(0x106)]&&_0x57f2db[_0x1254e7(0x12c)](this[_0x1254e7(0x106)]),this[_0x1254e7(0x10f)]&&clearInterval(this['MediaStatusTimer']),this[_0x1254e7(0xfa)]&&this[_0x1254e7(0xfa)][_0x1254e7(0x138)](),this['SuperRender']&&this[_0x1254e7(0x12f)][_0x1254e7(0x117)]();},vmplayer[_0x3038ad(0xeb)]['onStartPlay']=function(_0x1499fc){this['startPlay']=_0x1499fc;},vmplayer[_0x3038ad(0xeb)][_0x3038ad(0xda)]=function(_0xa81bd2){console['log']('暂停');},vmplayer[_0x3038ad(0xeb)][_0x3038ad(0xef)]=function(_0x4e805b){this['sei_frame_callback']=_0x4e805b;},vmplayer[_0x3038ad(0xeb)][_0x3038ad(0x131)]=function(_0x48d1f0){const _0x522940=_0x3038ad;this[_0x522940(0x139)]=_0x48d1f0;},vmplayer['prototype']['onWsClose']=function(_0x59cdd8){const _0x1cd68e=_0x3038ad;this[_0x1cd68e(0x12e)]=_0x59cdd8;},vmplayer['prototype']['onMediaStatus']=function(_0x189206){const _0x3f0083=_0x3038ad;this[_0x3f0083(0x126)]=_0x189206;},console[_0x3038ad(0x105)](_0x3038ad(0x116)+Version,_0x3038ad(0x11c));