var Chess=function(e){var u="b",p="w",f=-1,_="p",A="b",C="k",n="pnbrqkPNBRQK",r="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",b=["1-0","0-1","1/2-1/2","*"],y={b:[16,32,17,15],w:[-16,-32,-17,-15]},S={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},s=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],c=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],h={p:0,n:1,b:2,r:3,q:4,k:5},o={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"},I={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},T={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},a={w:[{square:T.a1,flag:I.QSIDE_CASTLE},{square:T.h1,flag:I.KSIDE_CASTLE}],b:[{square:T.a8,flag:I.QSIDE_CASTLE},{square:T.h8,flag:I.KSIDE_CASTLE}]},w=new Array(128),P={w:f,b:f},R=p,L={w:0,b:0},N=f,g=0,v=1,d=[],m={},O={};function E(e){void 0===e&&(e=!1),w=new Array(128),P={w:f,b:f},R=p,L={w:0,b:0},N=f,g=0,v=1,d=[],e||(m={}),O={},U(Q())}function t(){function e(e){e in O&&(n[e]=O[e])}for(var r=[],n={};0<d.length;)r.push(V());for(e(Q());0<r.length;)J(r.pop()),e(Q());O=n}function k(){q(r)}function q(e,r){void 0===r&&(r=!1);var n=e.split(/\s+/),t=n[0],o=0;if(!D(e).valid)return!1;E(r);for(var i=0;i<t.length;i++){var l,a=t.charAt(i);"/"===a?o+=8:-1!=="0123456789".indexOf(a)?o+=parseInt(a,10):(l=a<"a"?p:u,x({type:a.toLowerCase(),color:l},Y(o)),o++)}return R=n[1],-1<n[2].indexOf("K")&&(L.w|=I.KSIDE_CASTLE),-1<n[2].indexOf("Q")&&(L.w|=I.QSIDE_CASTLE),-1<n[2].indexOf("k")&&(L.b|=I.KSIDE_CASTLE),-1<n[2].indexOf("q")&&(L.b|=I.QSIDE_CASTLE),N="-"===n[3]?f:T[n[3]],g=parseInt(n[4],10),v=parseInt(n[5],10),U(Q()),!0}function D(e){var r="No errors.",n="FEN string must contain six space-delimited fields.",t="6th field (move number) must be a positive integer.",o="5th field (half move counter) must be a non-negative integer.",i="4th field (en-passant square) is invalid.",l="3rd field (castling availability) is invalid.",a="2nd field (side to move) is invalid.",f="1st field (piece positions) does not contain 8 '/'-delimited rows.",u="1st field (piece positions) is invalid [consecutive numbers].",p="1st field (piece positions) is invalid [invalid piece].",s="1st field (piece positions) is invalid [row too large].",c="Illegal en-passant square",e=e.split(/\s+/);if(6!==e.length)return{valid:!1,error_number:1,error:n};if(isNaN(e[5])||parseInt(e[5],10)<=0)return{valid:!1,error_number:2,error:t};if(isNaN(e[4])||parseInt(e[4],10)<0)return{valid:!1,error_number:3,error:o};if(!/^(-|[abcdefgh][36])$/.test(e[3]))return{valid:!1,error_number:4,error:i};if(!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(e[2]))return{valid:!1,error_number:5,error:l};if(!/^(w|b)$/.test(e[1]))return{valid:!1,error_number:6,error:a};var h=e[0].split("/");if(8!==h.length)return{valid:!1,error_number:7,error:f};for(var g=0;g<h.length;g++){for(var v=0,d=!1,E=0;E<h[g].length;E++)if(isNaN(h[g][E])){if(!/^[prnbqkPRNBQK]$/.test(h[g][E]))return{valid:!1,error_number:9,error:p};v+=1,d=!1}else{if(d)return{valid:!1,error_number:8,error:u};v+=parseInt(h[g][E],10),d=!0}if(8!==v)return{valid:!1,error_number:10,error:s}}return"3"==e[3][1]&&"w"==e[1]||"6"==e[3][1]&&"b"==e[1]?{valid:!1,error_number:11,error:c}:{valid:!0,error_number:0,error:r}}function Q(){for(var e,r,n=0,t="",o=T.a8;o<=T.h1;o++)null==w[o]?n++:(0<n&&(t+=n,n=0),e=w[o].color,r=w[o].type,t+=e===p?r.toUpperCase():r.toLowerCase()),o+1&136&&(0<n&&(t+=n),o!==T.h1&&(t+="/"),n=0,o+=8);var i="";L[p]&I.KSIDE_CASTLE&&(i+="K"),L[p]&I.QSIDE_CASTLE&&(i+="Q"),L[u]&I.KSIDE_CASTLE&&(i+="k"),L[u]&I.QSIDE_CASTLE&&(i+="q");var i=i||"-",l=N===f?"-":Y(N);return[t,R,i,l,g,v].join(" ")}function K(e){for(var r=0;r<e.length;r+=2)"string"==typeof e[r]&&"string"==typeof e[r+1]&&(m[e[r]]=e[r+1]);return m}function U(e){0<d.length||(e!==r?(m.SetUp="1",m.FEN=e):(delete m.SetUp,delete m.FEN))}function i(e){e=w[T[e]];return e?{type:e.type,color:e.color}:null}function x(e,r){if(!("type"in e&&"color"in e))return!1;if(-1===n.indexOf(e.type.toLowerCase()))return!1;if(!(r in T))return!1;r=T[r];return(e.type!=C||P[e.color]==f||P[e.color]==r)&&(w[r]={type:e.type,color:e.color},e.type===C&&(P[e.color]=r),U(Q()),!0)}function j(e,r,n,t,o){r={color:R,from:r,to:n,flags:t,piece:e[r].type};return o&&(r.flags|=I.PROMOTION,r.promotion=o),e[n]?r.captured=e[n].type:t&I.EP_CAPTURE&&(r.captured=_),r}function $(e){function r(e,r,n,t,o){if(e[n].type!==_||t>>4!=0&&t>>4!=7)r.push(j(e,n,t,o));else for(var i=["q","r",A,"n"],l=0,a=i.length;l<a;l++)r.push(j(e,n,t,o,i[l]))}var n=[],t=R,o=ee(t),i={b:1,w:6},l=T.a8,a=T.h1,f=!1,u=!(void 0!==e&&"legal"in e)||e.legal,p=!(void 0!==e&&"piece"in e&&"string"==typeof e.piece)||e.piece.toLowerCase();if(void 0!==e&&"square"in e){if(!(e.square in T))return[];l=a=T[e.square],f=!0}for(var s,c,h=l;h<=a;h++)if(136&h)h+=7;else{var g=w[h];if(null!=g&&g.color===t)if(g.type!==_||!0!==p&&p!==_){if(!0===p||p===g.type)for(var v=0,d=S[g.type].length;v<d;v++)for(var E=S[g.type][v],b=h;;){if(136&(b+=E))break;if(null!=w[b]){if(w[b].color===t)break;r(w,n,h,b,I.CAPTURE);break}if(r(w,n,h,b,I.NORMAL),"n"===g.type||"k"===g.type)break}}else{var b=h+y[t][0];for(null==w[b]&&(r(w,n,h,b,I.NORMAL),b=h+y[t][1],i[t]===h>>4&&null==w[b]&&r(w,n,h,b,I.BIG_PAWN)),v=2;v<4;v++)136&(b=h+y[t][v])||(null!=w[b]&&w[b].color===o?r(w,n,h,b,I.CAPTURE):b===N&&r(w,n,h,N,I.EP_CAPTURE))}}if(!0!==p&&p!==C||f&&a!==P[t]||(L[t]&I.KSIDE_CASTLE&&(c=(s=P[t])+2,null!=w[s+1]||null!=w[c]||W(o,P[t])||W(o,s+1)||W(o,c)||r(w,n,P[t],c,I.KSIDE_CASTLE)),L[t]&I.QSIDE_CASTLE&&(c=(s=P[t])-2,null!=w[s-1]||null!=w[s-2]||null!=w[s-3]||W(o,P[t])||W(o,s-1)||W(o,c)||r(w,n,P[t],c,I.QSIDE_CASTLE))),!u)return n;for(var m=[],h=0,d=n.length;h<d;h++)J(n[h]),G(t)||m.push(n[h]),V();return m}function B(e,r){var n="";return e.flags&I.KSIDE_CASTLE?n="O-O":e.flags&I.QSIDE_CASTLE?n="O-O-O":(e.piece!==_&&(r=function(e,r){for(var n=e.from,t=e.to,o=e.piece,i=0,l=0,a=0,f=0,u=r.length;f<u;f++){var p=r[f].from,s=r[f].to,c=r[f].piece;o===c&&n!==p&&t===s&&(i++,n>>4==p>>4&&l++,(15&n)==(15&p)&&a++)}if(0<i)return 0<l&&0<a?Y(n):0<a?Y(n).charAt(1):Y(n).charAt(0);return""}(e,r),n+=e.piece.toUpperCase()+r),e.flags&(I.CAPTURE|I.EP_CAPTURE)&&(e.piece===_&&(n+=Y(e.from)[0]),n+="x"),n+=Y(e.to),e.flags&I.PROMOTION&&(n+="="+e.promotion.toUpperCase())),J(e),l()&&(F()?n+="#":n+="+"),V(),n}function M(e){return e.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}function W(e,r){for(var n=T.a8;n<=T.h1;n++)if(136&n)n+=7;else if(null!=w[n]&&w[n].color===e){var t=w[n],o=n-r,i=119+o;if(s[i]&1<<h[t.type])if(t.type!==_){if("n"===t.type||"k"===t.type)return!0;for(var l=c[i],a=n+l,f=!1;a!==r;){if(null!=w[a]){f=!0;break}a+=l}if(!f)return!0}else if(0<o){if(t.color===p)return!0}else if(t.color===u)return!0}return!1}function G(e){return W(ee(e),P[e])}function l(){return G(R)}function F(){return l()&&0===$().length}function H(){return!l()&&0===$().length}function Z(){for(var e={},r=[],n=0,t=0,o=T.a8;o<=T.h1;o++){var i,t=(t+1)%2;136&o?o+=7:(i=w[o])&&(e[i.type]=i.type in e?e[i.type]+1:1,i.type===A&&r.push(t),n++)}if(2===n)return!0;if(3===n&&(1===e.b||1===e.n))return!0;if(n===e.b+2){for(var l=0,a=r.length,o=0;o<a;o++)l+=r[o];if(0===l||l===a)return!0}return!1}function z(){for(var e=[],r={},n=!1;;){var t=V();if(!t)break;e.push(t)}for(;;){var o=Q().split(" ").slice(0,4).join(" ");if(r[o]=o in r?r[o]+1:1,3<=r[o]&&(n=!0),!e.length)break;J(e.pop())}return n}function J(e){var r,n,t=R,o=ee(t);if(d.push({move:e,kings:{b:P.b,w:P.w},turn:R,castling:{b:L.b,w:L.w},ep_square:N,half_moves:g,move_number:v}),w[e.to]=w[e.from],w[e.from]=null,e.flags&I.EP_CAPTURE&&(R===u?w[e.to-16]=null:w[e.to+16]=null),e.flags&I.PROMOTION&&(w[e.to]={type:e.promotion,color:t}),w[e.to].type===C&&(P[w[e.to].color]=e.to,e.flags&I.KSIDE_CASTLE?(r=e.to-1,n=e.to+1,w[r]=w[n],w[n]=null):e.flags&I.QSIDE_CASTLE&&(r=e.to+1,n=e.to-2,w[r]=w[n],w[n]=null),L[t]=""),L[t])for(var i=0,l=a[t].length;i<l;i++)if(e.from===a[t][i].square&&L[t]&a[t][i].flag){L[t]^=a[t][i].flag;break}if(L[o])for(i=0,l=a[o].length;i<l;i++)if(e.to===a[o][i].square&&L[o]&a[o][i].flag){L[o]^=a[o][i].flag;break}N=e.flags&I.BIG_PAWN?"b"===R?e.to-16:e.to+16:f,e.piece===_||e.flags&(I.CAPTURE|I.EP_CAPTURE)?g=0:g++,R===u&&v++,R=ee(R)}function V(){var e=d.pop();if(null==e)return null;var r=e.move;P=e.kings,R=e.turn,L=e.castling,N=e.ep_square,g=e.half_moves,v=e.move_number;var n,t,o=R,e=ee(R);return w[r.from]=w[r.to],w[r.from].type=r.piece,w[r.to]=null,r.flags&I.CAPTURE?w[r.to]={type:r.captured,color:e}:r.flags&I.EP_CAPTURE&&(o=o===u?r.to-16:r.to+16,w[o]={type:_,color:e}),r.flags&(I.KSIDE_CASTLE|I.QSIDE_CASTLE)&&(r.flags&I.KSIDE_CASTLE?(n=r.to+1,t=r.to-1):r.flags&I.QSIDE_CASTLE&&(n=r.to-2,t=r.to+1),w[n]=w[t],w[t]=null),r}function X(e,r){var n,t,o,i,l,a=M(e),f=!1;!r||(n=(n=a.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/))||a.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/))&&(t=n[1],o=n[2],i=n[3],l=n[4],1==o.length&&(f=!0));for(var u,e="a"<=(e=(u=a).charAt(0))&&e<="h"?u.match(/[a-h]\d.*[a-h]\d/)?void 0:_:"o"===(e=e.toLowerCase())?C:e,p=$({legal:!0,piece:t||e}),s=0,c=p.length;s<c;s++){if(a===M(B(p[s],p)))return p[s];if(r&&n){if(!(t&&t.toLowerCase()!=p[s].piece||T[o]!=p[s].from||T[i]!=p[s].to||l&&l.toLowerCase()!=p[s].promotion))return p[s];if(f){var h=Y(p[s].from);if(!(t&&t.toLowerCase()!=p[s].piece||T[i]!=p[s].to||o!=h[0]&&o!=h[1]||l&&l.toLowerCase()!=p[s].promotion))return p[s]}}}return null}function Y(e){var r=15&e,e=e>>4;return"abcdefgh".substring(r,1+r)+"87654321".substring(e,1+e)}function ee(e){return e===p?u:p}function re(e){var r=function e(r){var n=r instanceof Array?[]:{};for(var t in r)n[t]="object"==typeof t?e(r[t]):r[t];return n}(e);r.san=B(r,$({legal:!0})),r.to=Y(r.to),r.from=Y(r.from);var n,t="";for(n in I)I[n]&r.flags&&(t+=o[n]);return r.flags=t,r}function ne(e){return e.replace(/^\s+|\s+$/g,"")}return q(void 0===e?r:e),{WHITE:p,BLACK:u,PAWN:_,KNIGHT:"n",BISHOP:A,ROOK:"r",QUEEN:"q",KING:C,SQUARES:function(){for(var e=[],r=T.a8;r<=T.h1;r++)136&r?r+=7:e.push(Y(r));return e}(),FLAGS:o,load:function(e){return q(e)},reset:k,moves:function(e){for(var r=$(e),n=[],t=0,o=r.length;t<o;t++)void 0!==e&&"verbose"in e&&e.verbose?n.push(re(r[t])):n.push(B(r[t],$({legal:!0})));return n},in_check:l,in_checkmate:F,in_stalemate:H,in_draw:function(){return 100<=g||H()||Z()||z()},insufficient_material:Z,in_threefold_repetition:z,game_over:function(){return 100<=g||F()||H()||Z()||z()},validate_fen:D,fen:Q,board:function(){for(var e=[],r=[],n=T.a8;n<=T.h1;n++)null==w[n]?r.push(null):r.push({type:w[n].type,color:w[n].color}),n+1&136&&(e.push(r),r=[],n+=8);return e},pgn:function(e){var t="object"==typeof e&&"string"==typeof e.newline_char?e.newline_char:"\n",o="object"==typeof e&&"number"==typeof e.max_width?e.max_width:0,i=[],r=!1;for(c in m)i.push("["+c+' "'+m[c]+'"]'+t),r=!0;r&&d.length&&i.push(t);function n(e){var r=O[Q()];return e=void 0!==r?`${e}${0<e.length?" ":""}{${r}}`:e}for(var l=[];0<d.length;)l.push(V());var a=[],f="";for(0===l.length&&a.push(n(""));0<l.length;){var f=n(f),u=l.pop();d.length||"b"!==u.color?"w"===u.color&&(f.length&&a.push(f),f=v+"."):f=v+". ...",f=f+" "+B(u,$({legal:!0})),J(u)}if(f.length&&a.push(n(f)),void 0!==m.Result&&a.push(m.Result),0===o)return i.join("")+a.join(" ");for(var p=function(){return 0<i.length&&" "===i[i.length-1]&&(i.pop(),!0)},s=0,c=0;c<a.length;c++)s+a[c].length>o&&a[c].includes("{")?s=function(e,r){for(var n of r.split(" "))if(n){if(e+n.length>o){for(;p();)e--;i.push(t),e=0}i.push(n),e+=n.length,i.push(" "),e++}return p()&&e--,e}(s,a[c]):(s+a[c].length>o&&0!==c?(" "===i[i.length-1]&&i.pop(),i.push(t),s=0):0!==c&&(i.push(" "),s++),i.push(a[c]),s+=a[c].length);return i.join("")},load_pgn:function(e,r){var n=void 0!==r&&"sloppy"in r&&r.sloppy;function a(e){return e.replace(/\\/g,"\\")}var t="object"==typeof r&&"string"==typeof r.newline_char?r.newline_char:"\r?\n",o=new RegExp("^(\\[((?:"+a(t)+")|.)*\\])(?:"+a(t)+"){2}"),o=o.test(e)?o.exec(e)[1]:"";k();var i,l=function(e,r){for(var n,t,r="object"==typeof r&&"string"==typeof r.newline_char?r.newline_char:"\r?\n",o={},i=e.split(new RegExp(a(r))),l=0;l<i.length;l++)n=i[l].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/,"$1"),t=i[l].replace(/^\[[A-Za-z]+\s"(.*)"\ *\]$/,"$1"),0<ne(n).length&&(o[n]=t);return o}(o,r);for(i in l)K([i,l[i]]);if("1"===l.SetUp&&!("FEN"in l&&q(l.FEN,!0)))return!1;function f(e){return e=e.replace(new RegExp(a(t),"g")," "),`{${u(e.slice(1,e.length-1))}}`}for(var u=function(e){return Array.from(e).map(function(e){return e.charCodeAt(0)<128?e.charCodeAt(0).toString(16):encodeURIComponent(e).replace(/\%/g,"").toLowerCase()}).join("")},p=function(e){return 0==e.length?"":decodeURIComponent("%"+e.match(/.{1,2}/g).join("%"))},s=e.replace(o,"").replace(new RegExp(`(\{[^}]*\})+?|;([^${a(t)}]*)`,"g"),function(e,r,n){return void 0!==r?f(r):" "+f(`{${n.slice(1)}}`)}).replace(new RegExp(a(t),"g")," "),c=/(\([^\(\)]+\))+?/g;c.test(s);)s=s.replace(c,"");for(var h,g=(g=ne(s=(s=(s=s.replace(/\d+\.(\.\.)?/g,"")).replace(/\.\.\./g,"")).replace(/\$\d+/g,"")).split(new RegExp(/\s+/))).join(",").replace(/,,+/g,",").split(","),v="",d=0;d<g.length;d++){var E=function(e){if(e.startsWith("{")&&e.endsWith("}"))return p(e.slice(1,e.length-1))}(g[d]);if(void 0===E)if(null==(h=X(g[d],n))){if(!(-1<b.indexOf(g[d])))return!1;v=g[d]}else v="",J(h);else O[Q()]=E}return v&&Object.keys(m).length&&!m.Result&&K(["Result",v]),!0},header:function(){return K(arguments)},ascii:function(){for(var e,r="   +------------------------+\n",n=T.a8;n<=T.h1;n++)0==(15&n)&&(r+=" "+"87654321"[n>>4]+" |"),null==w[n]?r+=" . ":(e=w[n].type,r+=" "+(w[n].color===p?e.toUpperCase():e.toLowerCase())+" "),n+1&136&&(r+="|\n",n+=8);return r+="   +------------------------+\n",r+="     a  b  c  d  e  f  g  h\n"},turn:function(){return R},move:function(e,r){var r=void 0!==r&&"sloppy"in r&&r.sloppy,n=null;if("string"==typeof e)n=X(e,r);else if("object"==typeof e)for(var t=$(),o=0,i=t.length;o<i;o++)if(!(e.from!==Y(t[o].from)||e.to!==Y(t[o].to)||"promotion"in t[o]&&e.promotion!==t[o].promotion)){n=t[o];break}if(!n)return null;r=re(n);return J(n),r},undo:function(){var e=V();return e?re(e):null},clear:function(){return E()},put:x,get:i,remove:function(e){return r=i(e),w[T[e]]=null,r&&r.type===C&&(P[r.color]=f),U(Q()),r;var r},perft:function e(r){for(var n=$({legal:!1}),t=0,o=R,i=0,l=n.length;i<l;i++)J(n[i]),G(o)||(0<r-1?t+=e(r-1):t++),V();return t},square_color:function(e){if(e in T){e=T[e];return((e>>4)+(15&e))%2==0?"light":"dark"}return null},history:function(e){for(var r=[],n=[],t=(void 0!==e&&"verbose"in e&&e.verbose);0<d.length;)r.push(V());for(;0<r.length;){var o=r.pop();t?n.push(re(o)):n.push(B(o,$({legal:!0}))),J(o)}return n},get_comment:function(){return O[Q()]},set_comment:function(e){O[Q()]=e.replace("{","[").replace("}","]")},delete_comment:function(){var e=O[Q()];return delete O[Q()],e},get_comments:function(){return t(),Object.keys(O).map(function(e){return{fen:e,comment:O[e]}})},delete_comments:function(){return t(),Object.keys(O).map(function(e){var r=O[e];return delete O[e],{fen:e,comment:r}})}}};"undefined"!=typeof exports&&(exports.Chess=Chess),"undefined"!=typeof define&&define(function(){return Chess});

class Node {
	constructor(game) {
		this.game = new Chess(game.fen());

		this.score = null;
		
		this.parent = null;
		this.children = [];

		this.depth = 0;
		
		this.pieceValues = {
			'p': 1, 'n': 3, 'b': 3.25, 'r': 5, 'q': 8, 'k': 0
		};
	}

	addParent(parent) {
		this.parent = parent;
		parent.children.push(this);
		this.depth = parent.depth + 1;
	}

	getHistory() {
		const history = [];
		let node = this;

		while (node && node.game.history().length) {
			history.unshift(node.game.history()[0]);
			node = node.parent;
		}

		return history;
	}

	updateScore() {
		if (this.game.in_checkmate()) {
			this.score = this.game.turn() === 'b' ? Infinity : -Infinity;
			return;
		}

		if (this.game.in_draw()) {
			this.score = 0;
			return;
		}

		this.score = 0;

		const board = this.game.board();
		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board.length; j++) {
				const square = board[i][j];

				if (!square) {
					continue;
				}

				if (square.color === 'w') {
					this.score += this.pieceValues[square.type];
				}
				else if (square.color === 'b') {
					this.score -= this.pieceValues[square.type];
				}
			}
		}
	}

	/**
	 * Updates the score if null
	 * 
	 * @returns {number} score
	 */
	getScore() {
		if (this.score === null) {
			this.updateScore();
		}

		return this.score;
	}
}

/**
 * Node that updates the parents when it is calculated
 * Used in non-recursive dfs/bfs
 * do not edit the variables, only for reading and calling functions
 */
class NonRecursiveNode extends Node {
	constructor(game) {
		super(game);
		this.score = null;

		this.uncalculatedCount = 0;
	}

	addParent(parent) {
		super.addParent(parent);
		if (this.score === null) {
			parent.uncalculatedCount++;
		}
	}

	calculate() {
		if (this.score !== null) {
			return;
		}

		this.updateScore();

		let node = this;

		while (node && node.uncalculatedCount === 0) {
			if (node.parent) {
				node.parent.uncalculatedCount--;
				if (node.parent.score === null) {
					node.parent.score = node.score;
				} else if (node.parent.game.turn() === 'w') {
					node.parent.score = Math.max(node.parent.score, node.score);
				} else {
					node.parent.score = Math.min(node.parent.score, node.score);
				}
			}

			node = node.parent;
		}
	}
}

function getRandom(list) {
	return list[Math.floor(Math.random() * list.length)];
}

function getRandomMove(game) {
	return getRandom(game.moves());
}

function alphaBetaPruning(root, max_depth, alpha, beta) {
	if (root.depth >= max_depth || root.game.game_over()) {
		return;
	}

	if (root.game.turn() === 'w') {
		let maxScore = null;
		const moves = root.game.moves();
		for (let i = 0; i < moves.length; i++) {
			const child = new Node(root.game);
			child.addParent(root);
			child.game.move(moves[i]);
			alphaBetaPruning(child, max_depth, alpha, beta);

			const score = child.getScore();

			if (maxScore === null || score > maxScore) {
				maxScore = score;
			}

			alpha = Math.max(alpha, maxScore);

			if (beta < alpha) {
				break;
			}
		}
		root.score = maxScore;
		return root;
	} else {
		let minScore = null;
		const moves = root.game.moves();
		for (let i = 0; i < moves.length; i++) {
			const child = new Node(root.game);
			child.addParent(root);
			child.game.move(moves[i]);
			alphaBetaPruning(child, max_depth, alpha, beta);

			const score = child.getScore();

			if (minScore === null || score < minScore) {
				minScore = score;
			}

			beta = Math.min(beta, minScore);

			if (beta < alpha) {
				break;
			}
		}
		root.score = minScore;
		return root;
	}
}

function bruteGraphSearch(root, max_depth) {
	if (max_depth <= 0) {
		return getRandomMove(game);
	}

	const q = [];

	q.push(root);

	while (q.length) {
		const curr = q.shift();

		if (curr.depth >= max_depth || curr.game.game_over()) {
			let node = curr;
			node.calculate();
			continue;
		}

		const moves = curr.game.moves();
		for (let i = 0; i < moves.length; i++) {
			const node = new NonRecursiveNode(curr.game);
			node.game.move(moves[i]);
			node.addParent(curr);
			q.push(node);
		}
	}

	root.children.sort((a, b) => a.score - b.score);

	return root;
}

let cache = null;

/**
 * 
 * @param {*} game 
 * @param {*} max_depth 
 * @param {number} ai 0 is bfs, 1 is alpha beta pruning
 * @param {*} debug 
 * @returns 
 */
function getBestMove(game, max_depth, ai, debug) {
	let root;

	if (cache) {
		root = cache;
	}
	else if (ai === 0) {
		root = new Node(game);
		alphaBetaPruning(root, max_depth, -Infinity, Infinity);
	}
	else {
		root = new NonRecursiveNode(game);
		bruteGraphSearch(root, max_depth);
	}

	if (debug) {
		console.log('Root: ', root.score, root.game.history()[0]);
		console.log("Children Count: ", root.children.length);
		for (let i = 0; i < root.children.length; i++) {
			console.log(root.children[i].score, root.children[i].game.history()[0]);
			root.children[i].children.forEach((node) => console.log('\t', node.game.history()[0], node.score));
		}
	}

	const next = getRandom(root.children.filter((child) => child.score === root.score));

	if ((root.score === Infinity || root.score === -Infinity) && next.children.length) {
		cache = next; // cache only if win or lose
	}
	else {
		cache = null;
	}

	return next.game.history()[0];
}

// Below is for web worker

self.addEventListener('message', (e) => {
	const { fen, max_depth, ai, debug } = e.data;
	const game = new Chess(fen);

	const bestMove = getBestMove(game, max_depth, ai, debug);

	self.postMessage(bestMove);
});
