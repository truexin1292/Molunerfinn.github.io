/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/0tolearnfe/index.html","4b1cf260db06f564f4f6d06e717e800b"],["/2016/index.html","e2a4af9deae5b5491bfc23b86a76c72b"],["/2017-summary/index.html","5ee66f10312e66c558977c1057a16389"],["/Electron-vs-nwjs-part2/index.html","17a1fc1f4bc989bd1b05970781415ceb"],["/Electron-vs-nwjs/index.html","c34bcbbb18a7773ada1d413edce0f254"],["/FullScreenBackground(css)/index.html","0741f745102801c223d92751716d1a62"],["/PC-Chrome-PWA/index.html","bb8455ed156f84dab8d9823c50c00ce3"],["/PerfectMoviePerWeek3/index.html","2c32b5dbc624d103d0a2b6ef1b61ad36"],["/PerfectMoviePerWeek4/index.html","58a010d50d13f49d43fb0f66b1462b51"],["/PerfectMoviePerWeek5/index.html","32d5ffc13f623422401bb34bbf69562e"],["/Use-Jest-To-Test-Vue-Koa/index.html","72720cd18b207bf5157d9495dcbcde1d"],["/Vue+Koa/index.html","56eb5170a124792761e1f356c51c9108"],["/WEEK89/index.html","c777cc5c15671fa6b06ad22cd3426fa2"],["/WEEK90/index.html","b3c67e276d622d2a9c6cce7d934d17d4"],["/WEEK91/index.html","5729c886f8c01e2c5f646f2af885839a"],["/WEEK92/index.html","14fa181766897be64fb827ae03f746e7"],["/WEEK93/index.html","24ad5ac99b4b783a375b78ae2b9eb107"],["/Webpack-Optimize/index.html","1e10de73159344d35b89069c2e0ee17e"],["/about/index.html","c9d0f7db4f1ab4007b107dc07dcaa02d"],["/archives/2015/05/index.html","097e045b26933fb7548ef3a370638be9"],["/archives/2015/06/index.html","aded241824172485050cd48e5fa78d58"],["/archives/2015/06/page/2/index.html","e63d44872d4e57df76d97a830b3bb903"],["/archives/2015/08/index.html","7773e2b2af40132dbbe25f8a14b1ac33"],["/archives/2015/09/index.html","4dac6a87c9efc1186534564c94a16de5"],["/archives/2015/11/index.html","a9d917a1dc68b2103edf089e42138013"],["/archives/2015/12/index.html","c69e64e9aa14a5654aba0ddebb2ddb26"],["/archives/2015/index.html","75c420f3836eadaf9cddf5c75ebee7a8"],["/archives/2015/page/2/index.html","8e2311253f40e3a10c557c27608b5d4d"],["/archives/2015/page/3/index.html","39954181599a9de72335a2be4a7c65b2"],["/archives/2015/page/4/index.html","7c24683b3488a79712a7a367aaed1f5d"],["/archives/2016/02/index.html","a3216da29637f88d33849f1b124b0429"],["/archives/2016/03/index.html","259136f0d29135c5dcb4e568360320b5"],["/archives/2016/04/index.html","8f5976775de436c57c2605369db9df47"],["/archives/2016/05/index.html","53e92ae587729ab54e729a15761323b9"],["/archives/2016/06/index.html","6b15a2f069930cf061090b100908c319"],["/archives/2016/07/index.html","2365101b5399b8a1320cc153cca232c8"],["/archives/2016/08/index.html","e74fd5cd6f3e26ddb870b8d2d2c3af48"],["/archives/2016/11/index.html","f7961d130b7a4d2059320ff814a1abbc"],["/archives/2016/12/index.html","22180d86cdb6899a7496707e297afca5"],["/archives/2016/index.html","0b23311ac640087842ef6c544dbdd7a1"],["/archives/2016/page/2/index.html","1f00def23af605880ef6000b295c765a"],["/archives/2017/01/index.html","1ca90181a94c9c77154e153bc58b07e7"],["/archives/2017/04/index.html","cd11c017778c161663cbee4c64dad486"],["/archives/2017/05/index.html","9d9b35ebd1fc5170822039373a971058"],["/archives/2017/06/index.html","e72b34dac3b948195478e1d18f90dac3"],["/archives/2017/07/index.html","a424ae23ea26937d43a3afa00c8045c3"],["/archives/2017/09/index.html","93ceb5aecb2c209dd7cb5a4e943bf847"],["/archives/2017/10/index.html","3710aba864f2ff78d08f1a44dac89b6c"],["/archives/2017/11/index.html","c89f4b9723f316ad2061547e7c552948"],["/archives/2017/12/index.html","ebbd6dd2f5f319e6d79d9dda3c43a48c"],["/archives/2017/index.html","1e1851424977979a89fc6baa610b01d1"],["/archives/2017/page/2/index.html","b9677c1105b0e8c2c3ed5f2d894255e1"],["/archives/2018/01/index.html","59b367aaca244e58b2dc8b48d77a3d31"],["/archives/2018/02/index.html","ba93581f13f0570f589c1161b1c1d1c9"],["/archives/2018/03/index.html","3707d56298a742a9b795090875f6ae65"],["/archives/2018/04/index.html","1625a8b2542bdbe017847bc9e51d9344"],["/archives/2018/05/index.html","e682db3c47058c9a825c4d8525336c66"],["/archives/2018/06/index.html","cccd154adec0db0b69d849e17a692f8b"],["/archives/2018/11/index.html","6bbf73709f7f0d6a4b189f4a34e387d6"],["/archives/2018/index.html","07dd63999cd37b0410f911069a0920fc"],["/archives/2018/page/2/index.html","c7dc9d1bcabd949192190b36ba6e618a"],["/archives/2018/page/3/index.html","3fb37761df23b2dd851a10d766322b08"],["/archives/index.html","5bbf9902782357bf2f5cb43a84f30f34"],["/archives/page/10/index.html","9f8198219487f670e4df3c5a43e536ee"],["/archives/page/2/index.html","e656294df3593ec0567163b3f2b18159"],["/archives/page/3/index.html","70b930e679f0fc724ff83bc5ba40bd02"],["/archives/page/4/index.html","ba9276ae7d1b38e3c01e860e6158ba76"],["/archives/page/5/index.html","2efa2196bcb3c5ed15d463cfa3ca9a69"],["/archives/page/6/index.html","2a528612b9a1491ca0a4ce0307f4a921"],["/archives/page/7/index.html","b61918975897a68abf992a905b416a73"],["/archives/page/8/index.html","5cd3b5d017d8ae2b592073c18664a6a0"],["/archives/page/9/index.html","bbcc7d096d41745cd62941907e693fc5"],["/atom.xml","650cf4047a5c0f1c375f670c7399db34"],["/categories/HEXO日常/index.html","968a2d4973c92925fc5f0637052a19aa"],["/categories/HEXO日常/日志/index.html","d5d144a6a0d7682884626dd6ba898157"],["/categories/Linux/index.html","f384e9453dfd48d8061bc154ed9a0238"],["/categories/Linux/日志/index.html","39fb261878e74636e32f4f749952f8c0"],["/categories/Web/index.html","0091653e330f65a29cf7b21c29419e3e"],["/categories/Web/page/2/index.html","c66bf1cafbe206f002ca59e20170c3ae"],["/categories/Web/page/3/index.html","967583e187b6eed1ab51168099206374"],["/categories/Web/page/4/index.html","10e44edb1e61a8b6bacff44d0879830b"],["/categories/Web/page/5/index.html","76642c35f9cc804b117c46d2b5b9281a"],["/categories/Web/开发/Nodejs/index.html","5c3aa4371a012c9457819f9e4a826023"],["/categories/Web/开发/TypeScript/index.html","62f6a4b854920e280f518b7c2865be1b"],["/categories/Web/开发/electron/index.html","42ff8f2d50e2d91c939e1a8ab0658a58"],["/categories/Web/开发/index.html","96af4fc5cd4639f4d010945206f70594"],["/categories/Web/开发/page/2/index.html","5e34d39e7ac3cc7dbf8b73817c0cfd38"],["/categories/Web/开发/page/3/index.html","fd908c9e563cad79444170e2cb36098e"],["/categories/Web/开发/page/4/index.html","0d5e642787e823bc4d465f325dd877e5"],["/categories/Web/开发/page/5/index.html","894eacb418b35407a05ad61aaf9c8a9b"],["/categories/Web/日志/index.html","60ea36def12965cb05d2c9d8cfb896b2"],["/categories/Web/日志/翻译/index.html","b64746431384ade6239afb73e0617c5a"],["/categories/Web/日志/随笔/index.html","7d3359fbea38785b111ab65a209687ac"],["/categories/WordPress日常/index.html","529b1e6f646075f96748b62fa2174b40"],["/categories/WordPress日常/page/2/index.html","f4e7ac981c582ab28f4bae8168cbb5c8"],["/categories/WordPress日常/日志/index.html","a512ee6eb771e2667ae4cd66f784f2da"],["/categories/WordPress日常/日志/page/2/index.html","8ac34f65fae1c4ee1cb4f4f59609e494"],["/categories/hexo/index.html","db3f73bb44fdf5a37a5d093aa9b27514"],["/categories/index.html","45e746eaca80bc8ebd31692fa2bd65eb"],["/categories/其他/index.html","e9a0527fb70d19c5001de4864d1a017f"],["/categories/其他/极客/index.html","0aac4b0748a4e84573c17e8e51c125dc"],["/categories/周电/index.html","53f590bb84f414123aa7b9b970e13ab3"],["/categories/周电/日志/index.html","a8f94b60afa49e3bef4d0199e83bdffc"],["/categories/日志/index.html","11c5d04d202dfc909c5d8a4756b566df"],["/categories/日志/周电/index.html","27e0dccd13dde1a80256f65f7dfdc59f"],["/categories/日志/随笔/index.html","cad02ba1f88bb0a7b3a770bf3985b0d1"],["/categories/笔记/index.html","58ab919a1d67d7754ce1e3991719cd66"],["/centos-1/index.html","565feb9d665fd59f380bddcadbe1592b"],["/centos7-1inwin8-1/index.html","d9017e754d5f749bbb198721b8e3f1fa"],["/css/index.css","e97cb94514bb315b57ac283d870f4cda"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/electron-vue-1/index.html","965d8b1e11ede22d70cb33135d9afc54"],["/electron-vue-2/index.html","ca6d1b96edf49adee6273b6355deeb38"],["/electron-vue-3/index.html","c30198c74c2dcb60c459dd31699737a7"],["/electron-vue-4/index.html","edef7ce57b98a9cf2371d5b3fbd3f27f"],["/electron-vue-5/index.html","aa733454d76df42c6ea8a9acf8598e57"],["/element-default-theme/index.html","a5641079f12cb44ea272ba4c587c4e87"],["/fe-be-router-render/index.html","2452eef16b50941f64104b9db411fa40"],["/fethefirst-2/index.html","add6b0508e6b6108c446604502a1e046"],["/fethefirst/index.html","54cf5fb89a74269aa052778c68622880"],["/gear-system/index.html","3fdab78dbeae678b6e6cf809735f9cb2"],["/git-ssh2https/index.html","851dc1cccfbb8b83cf8a6749de0c6579"],["/hello-world-1/index.html","eda4bae126f8e9a6d33c54afe69a0e4a"],["/hexo-travisci-https/index.html","3bda42b36bbf0c392d5b0bbcd9db0939"],["/hexodaily-1/index.html","0645d72fea37b6dda894fbdf80657c8a"],["/iTerm2-lrzsz/index.html","b92e92a01957895577a6fd9ab50e4f2f"],["/images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["/images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["/images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["/images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["/images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["/images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","cb83465a8ae4ee2cec9468efd5dfa874"],["/jquery-1/index.html","929526f2455efaa32783465662c3f38c"],["/js/copy.js","48b75585cc96794afdcbbb88d1aea958"],["/js/fancybox.js","ee0be6a35548fe934306d9ff7288c837"],["/js/fireworks.js","20ecd7a49483cdda7bd33b8f5a11253f"],["/js/head.js","802d516f90b4e87c40edc27d3eb4ba79"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","ea9bda0bc76027cefc32061684ff3fc8"],["/js/search/algolia.js","2dd585bf72ab790662bd614ccf026d9c"],["/js/search/local-search.js","4442b4a1efe05dd05ec7dcc6d132a182"],["/js/sidebar.js","e3308924d89861ff54f17f8de0f864f0"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","3e9daf655da50b0eda5324a81a2b9720"],["/js/utils.js","8250feefdfa7ac2e0bc56194a507580b"],["/koa2-wechatpay/index.html","7524a41610edf590620cc0c4355721c2"],["/make-a-hexo-theme/index.html","a13b3c6a6338ee3020bf25d9963dc457"],["/make-a-picgo/index.html","2e8be6a6851d9a4f4ce6e851aba1b435"],["/manifest.json","1ae58b354c872862c45f7b8eaa5c935f"],["/markdown-wordpress/index.html","9fc043b2912c078aaa0f3897dc476094"],["/marklinejs/index.html","c27e9558408e0c8886f93d9fe62d5d45"],["/myfe/index.html","1288c7d84befd340d9c4021c47a5a7a5"],["/nodejs-1/index.html","76f54178ffb175c2a42cfab65149852c"],["/nodejs-2/index.html","c4734d2271c0d349012585244d12e4a7"],["/nodejs-3/index.html","7479ba1fb71827348c7344f6b8c1631b"],["/nokian1-root/index.html","d984694f6bf208083c32f4287fd40d7c"],["/note-for-picgo/index.html","e4ca58b751367b26734f973d5a0c13c6"],["/notebook2016/index.html","c8f89d5703737550e026b7b5335bfd8f"],["/observer-vs-pubsub-pattern/index.html","97a112400c7b67240939eed4852559a4"],["/page/10/index.html","fba7b3793daedea2a47ab7850226423a"],["/page/2/index.html","b142afcd2eb272dbe6f63238e78bbd95"],["/page/3/index.html","23f6953af5e10fc57975a2f66c02f015"],["/page/4/index.html","bfc09093cf487036335df9a24823b825"],["/page/5/index.html","254790fee7aa24e519a51391bc43855a"],["/page/6/index.html","7fb2e4850d2441201f3723997fc4d704"],["/page/7/index.html","8fbc5428054bfd7d443a0d7772cbb133"],["/page/8/index.html","08a7ca87bf46c63cd2d1345fcee215a8"],["/page/9/index.html","161ba3ddcc239aedd1b62670da93c014"],["/picgo-v1.5-update/index.html","ba723fcb801227ebb24b2b8da8c8463c"],["/process-thread-coroutine/index.html","c78b2a33e11f21f1656a2a4984986a5e"],["/sitemap.xml","7f0adab0bad0a0719951b9724b65de69"],["/slide-support/index.html","20d79b1c4a9d3d8dfbe6fa20579bc8d8"],["/slides/index.html","0d3b15b786323faf6c8f413299b3db94"],["/something&nothing/index.html","deec77a468c8f36668148c002e43b86a"],["/something-about-settimeout/index.html","6fa61cd69c86741bc9f1b2cb31fbab88"],["/tags/Electron-vue/index.html","fa4db94836dc2caee17693c242566b8e"],["/tags/Electron/index.html","c7c02073acb51addad177764190ea603"],["/tags/JS/index.html","603853bd8f204c609126b17d29515f94"],["/tags/Koa/index.html","60077e23969b6bfa847f45a147272774"],["/tags/Mac/index.html","6d088fdf06851585c90fd3154ceefad1"],["/tags/Nodejs/index.html","80845d9c651d5ba6cf4c861fba9cd0fd"],["/tags/Nodejs/page/2/index.html","1f6d95f3fbbaacfa21332c832c2d7573"],["/tags/NokiaN1/index.html","647acc647f7e75ea64779f91cc8b9d08"],["/tags/PWA/index.html","d62d1abd60c4ef6b6a5099b8d7881c2c"],["/tags/TypeScript/index.html","eb34b539a50b30b90673928a3126e86e"],["/tags/VSCode/index.html","5eadda0c00a2b0e7b2ce1dbce7713461"],["/tags/Vue/index.html","4205daffde68b786dd6627013837d3ff"],["/tags/Vue/page/2/index.html","b9de59761527db52792b8559c10fa575"],["/tags/Webpack/index.html","a3b9d15c25e8ad22d72408bfe6a61c94"],["/tags/electron/index.html","d13d52d70ce26955d036fb2621ee0bd0"],["/tags/git/index.html","521ef68b5b00026d5dc627ade11d3243"],["/tags/hexo/index.html","7b1deb6c0b9def522c5807ef9a984c18"],["/tags/index.html","e0b1eed119e2f97e72b235d4a7dbf1d9"],["/tags/note/index.html","3df798414de9c48750b6b2c9191b274b"],["/tags/vue/index.html","f9d0fa9a24a96e6412864a67c442fc53"],["/tags/web/index.html","a61359f2817b60dae85672d47761303a"],["/tags/前端/index.html","afb43cb1c2a94108e4ed5e5cad957fb4"],["/tags/前端/page/2/index.html","b9a8d623be491805d26d1c287805157f"],["/tags/前端/page/3/index.html","9c93323307447b4fd961c403bae77d79"],["/tags/前端/page/4/index.html","ab25e642158a68d74dfece83391d9c7d"],["/tags/前端/page/5/index.html","5a68cb7a8068d6e67265403399292431"],["/tags/后端/index.html","dbe0fb5f5409fa45b11fc3e12d374065"],["/tags/更新日志/index.html","c0747d84ce027d5589361a50e68842d7"],["/tags/电影/index.html","f95949216f3eaecfbd299b25b0cade15"],["/tags/电影/page/2/index.html","a5f6d9f919839acd4b623a31020350f8"],["/tags/笔记/index.html","5fe2ad69738725173a5ba94dd05bc5cf"],["/tags/随笔/index.html","eb11f23fe46c1113ad546c2b303c58d2"],["/thinkself-1/index.html","7f516341e783f6b4cc6dad19e83c063b"],["/vscode-extension-develop-1/index.html","6b3bde04b96f720e4925e9442bc98915"],["/vue-components/index.html","625d5202e0bf450d6174d9e8b56b3dc6"],["/vuejs-1/index.html","abfa027249e3f002daf183f8b0dfc4ce"],["/wdinst3/index.html","66780e17cc234617b5e32a309b45ee16"],["/wordpress-theme-setup-record/index.html","43e6acf370f514d996742b781b4fd7fa"],["/wpdaily-0616/index.html","6cd9e19a132ca1ede935fa6a9adcc2ea"],["/wpdaily-0618/index.html","be802a4e8cbfba52154ab7b3b6bff63e"],["/wpdaily0606-1/index.html","35298d82efcef367ba94235bcf45c32c"],["/wpdaily0611/index.html","1492137b9d3277d9dab715b3755ff063"],["/wpdaily0613/index.html","8c0c4cd520c160624e5c35075a83c9e2"],["/wpdaily0620/index.html","4113d8070be5125712260457433f7273"],["/wpdaily0808/index.html","481cf41be0be953324df2b8bccc6038d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcss.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"molunerfinn.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"ws1.sinaimg.cn"});




