/* Javascript plotting library for jQuery, v. 0.4.
 * Released under the MIT license by iola, December 2007.
 * PIE modifications by Sergey Nosenko http://javascript.cooldev.com
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(W($){W 4y(z,A,B){N C=[];N D={3a:["#5V","#5W","#5X","#5Y","#5Z"],1t:{1r:1s,4z:1,2G:P,4A:"#61",3R:P,1K:"62",4B:5,2v:P,3S:0.85},R:{2f:P,T:P,U:P,3b:P,1c:P,2g:P,3c:P,1j:P,2w:P,3T:P,3U:P},Q:{3b:0.63},1p:{1r:1n,2H:3,1d:2,1L:1s,27:"#64"},1W:{1r:1n,1d:2,1L:1n,27:P},1x:{1r:1n,1d:2,3d:1,1L:1s,27:P},1q:{1i:"#65",2v:P,4C:"#66",3e:3,3f:2,4D:P,3V:P,4E:"#67"},2h:{2f:P,1i:"#68"},1l:{1r:1n,3W:\'#69\',3X:1,4F:0,3Y:0,4G:1s,2G:W(a){13 a.1M},4H:5/6,4I:0.85,3Z:0},2I:4};N E=P,2x=P,2J=P,O=P,1N=P,1u=z,R={},Q={},15={1k:0,1v:0,18:0,1w:0},3g=0,40=0,2Z=0,1X=0,1Y=0,1Z=0,1R=0,2i=0,2j=0,1S,4J,41=12,4K,31=0,3h=0,32=0,43=0,2y,2z,2A={};14.3i=3i;14.3j=3j;14.3k=3k;14.2K=2K;14.44=44;14.6a=W(){13 E};14.6b=W(){13 15};14.6c=W(){13 C};14.6d=W(){13{R:R,Q:Q}};4L(B);3i(A);4M();3j();3k();W 3i(d){C=4N(d);4O();4P()}W 4N(d){N a=[];1h(N i=0;i<d.17;i++){N s;L(d[i].1A){s={};1h(N v 6e d[i])s[v]=d[i][v]}Z{s={1A:d[i]}}a.1B(s)}13 a}W 4L(o){$.33(1s,D,o);L(D.R.3l&&D.R.1c==P)D.R.1c=D.R.3l;L(D.Q.3l&&D.Q.1c==P)D.Q.1c=D.Q.3l}W 4O(){N i;N a=C.17;N b=[];N d=[];1h(i=0;i<C.17;++i){N e=C[i].1i;L(e!=P){--a;L(2B e=="34")d.1B(e);Z b.1B(2k(C[i].1i))}}1h(i=0;i<d.17;++i){a=11.U(a,d[i]+1)}N f=[];N g=0;i=0;2C(f.17<a){N c;L(D.3a.17==i)c=1E 1T(2L,2L,2L);Z c=2k(D.3a[i]);N h=g%2==1?-1:1;N j=1+h*11.6f(g/2)*0.2;c.2M(j,j,j);f.1B(c);++i;L(i>=D.3a.17){i=0;++g}}N k=0,s;1h(i=0;i<C.17;++i){s=C[i];L(s.1i==P){s.1i=f[k].2l();++k}Z L(2B s.1i=="34")s.1i=f[s.1i].2l();s.1W=$.33(1s,{},D.1W,s.1W);s.1p=$.33(1s,{},D.1p,s.1p);s.1x=$.33(1s,{},D.1x,s.1x);s.1l=$.33(1s,{},D.1l,s.1l);L(s.2I==P)s.2I=D.2I}}W 4P(){L(D.1l.1r){41=12;4K=1/41;31=0;32=0;1h(N i=0;i<C.17;i++){32+=C[i].1A}1h(N i=0;i<C.17;i++){C[i].6g=(C[i].1A/32)*2L}13}R.1O=Q.1O=2N.45;R.1C=Q.1C=2N.46;1h(N i=0;i<C.17;++i){N a=C[i].1A;1h(N j=0;j<a.17;++j){L(a[j]==P)1f;N x=a[j][0],y=a[j][1];L(x==P||y==P||4Q(x=+x)||4Q(y=+y)){a[j]=P;1f}L(x<R.1O)R.1O=x;L(x>R.1C)R.1C=x;L(y<Q.1O)Q.1O=y;L(y>Q.1C)Q.1C=y}}L(R.1O==2N.45)R.1O=0;L(Q.1O==2N.45)Q.1O=0;L(R.1C==2N.46)R.1C=1;L(Q.1C==2N.46)Q.1C=1}W 4M(){1X=1u.1F();1Y=1u.20();1u.6h("");1u.2O("1K","6i");L(1X<=0||1Y<=0)6j"6k 6l 1h 4R, 1F = "+1X+", 20 = "+1Y;E=$(\'<3m 1F="\'+1X+\'" 20="\'+1Y+\'"></3m>\').35(1u).48(0);L($.4S.4T)E=49.4U.4V(E);O=E.4W("2d");2x=$(\'<3m 1G="1K:2m;1k:4X;18:4X;" 1F="\'+1X+\'" 20="\'+1Y+\'"></3m>\').35(1u).48(0);L($.4S.4T)2x=49.4U.4V(2x);1N=2x.4W("2d");2J=$([2x,E]);L(D.2h.2f!=P){2J.6m(4Y);2J.6n(W(){14.6o=4Z})}L(D.1q.4D)2J.6p(51)}W 3j(){L(D.1l.1r){1S=D.1l.1S||11.T(1X,1Y)/2;4J=1S*2;4a();2y=D.1l.3Y==\'6q\'?D.1t.1K.6r(\'w\')?1S+43:1S:1S+D.1l.3Y;2z=1S+D.1l.4F;13}4b(R,D.R);4c(R,D.R);4d(R,D.R);52();4b(Q,D.Q);4c(Q,D.Q);4d(Q,D.Q);53();54();4a()}W 4b(a,b){N c=b.T!=P?b.T:a.1O;N d=b.U!=P?b.U:a.1C;L(d-c==0.0){N e;L(d==0.0)e=1.0;Z e=0.6s;c-=e;d+=e}Z{N f=b.3b;L(f!=P){L(b.T==P){c-=(d-c)*f;L(c<0&&a.1O>=0)c=0}L(b.U==P){d+=(d-c)*f;L(d>0&&a.1C<=0)d=0}}}a.T=c;a.U=d}W 4c(h,j){N k;L(2B j.1c=="34"&&j.1c>0)k=j.1c;Z L(h==R)k=1X/2L;Z k=1Y/60;N l=(h.U-h.T)/k;N m,3n,1y,3o,i,2D,21;L(j.2f=="6t"){W 4e(d,a,b){N e=W(n){n=""+n;13 n.17==1?"0"+n:n};N r=[];N f=1n;L(b==P)b=["6u","6v","6w","6x","6y","6z","6A","6B","6C","6D","6E","6F"];1h(N i=0;i<a.17;++i){N c=a.36(i);L(f){6G(c){2n\'h\':c=""+d.3p();22;2n\'H\':c=e(d.3p());22;2n\'M\':c=e(d.56());22;2n\'S\':c=e(d.57());22;2n\'d\':c=""+d.6H();22;2n\'m\':c=""+(d.37()+1);22;2n\'y\':c=""+d.4f();22;2n\'b\':c=""+b[d.37()];22}r.1B(c);f=1n}Z{L(c=="%")f=1s;Z r.1B(c)}}13 r.2P("")}N o={"19":2Q,"28":60*2Q,"29":60*60*2Q,"2o":24*60*60*2Q,"23":30*24*60*60*2Q,"26":6I.6J*24*60*60*2Q};N p=[[1,"19"],[2,"19"],[5,"19"],[10,"19"],[30,"19"],[1,"28"],[2,"28"],[5,"28"],[10,"28"],[30,"28"],[1,"29"],[2,"29"],[4,"29"],[8,"29"],[12,"29"],[1,"2o"],[2,"2o"],[3,"2o"],[0.25,"23"],[0.5,"23"],[1,"23"],[2,"23"],[3,"23"],[6,"23"],[1,"26"]];N q=0;L(j.2w!=P){L(2B j.1j=="34")q=j.1j;Z q=j.2w[0]*o[j.2w[1]]}1h(i=0;i<p.17-1;++i)L(l<(p[i][0]*o[p[i][1]]+p[i+1][0]*o[p[i+1][1]])/2&&p[i][0]*o[p[i][1]]>=q)22;m=p[i][0];1y=p[i][1];L(1y=="26"){2D=11.58(10,11.1U(11.59(l/o.26)/11.5a));21=(l/o.26)/2D;L(21<1.5)m=1;Z L(21<3)m=2;Z L(21<7.5)m=5;Z m=10;m*=2D}L(j.1j){m=j.1j[0];1y=j.1j[1]}3n=W(a){N b=[],1j=a.1j[0],1y=a.1j[1],d=1E 5b(a.T);N c=1j*o[1y];L(1y=="19")d.5c(2E(d.57(),1j));L(1y=="28")d.5d(2E(d.56(),1j));L(1y=="29")d.4g(2E(d.3p(),1j));L(1y=="23")d.3q(2E(d.37(),1j));L(1y=="26")d.5e(2E(d.4f(),1j));d.6K(0);L(c>=o.28)d.5c(0);L(c>=o.29)d.5d(0);L(c>=o.2o)d.4g(0);L(c>=o.2o*4)d.5f(1);L(c>=o.26)d.3q(0);N e=0,v;4h{v=d.4i();b.1B({v:v,1M:a.2g(v,a)});L(1y=="23"){L(1j<1){d.5f(1);N f=d.4i();d.3q(d.37()+1);N g=d.4i();d.5g(v+e*o.29+(g-f)*1j);e=d.3p();d.4g(0)}Z d.3q(d.37()+1j)}Z L(1y=="26"){d.5e(d.4f()+1j)}Z d.5g(v+c)}2C(v<a.U);13 b};3o=W(v,a){N d=1E 5b(v);L(j.3U!=P)13 4e(d,j.3U,j.3T);N t=a.1j[0]*o[a.1j[1]];N b=a.U-a.T;L(t<o.28)2p="%h:%M:%S";Z L(t<o.2o){L(b<2*o.2o)2p="%h:%M";Z 2p="%b %d %h:%M"}Z L(t<o.23)2p="%b %d";Z L(t<o.26){L(b<o.26)2p="%b";Z 2p="%b %y"}Z 2p="%y";13 4e(d,2p,j.3T)}}Z{N s=j.3c;N u=-11.1U(11.59(l)/11.5a);L(s!=P&&u>s)u=s;2D=11.58(10,-u);21=l/2D;L(21<1.5)m=1;Z L(21<3){m=2;L(21>2.25&&(s==P||u+1<=s)){m=2.5;++u}}Z L(21<7.5)m=5;Z m=10;m*=2D;L(j.2w!=P&&m<j.2w)m=j.2w;L(j.1j!=P)m=j.1j;h.3c=11.U(0,(s!=P)?s:u);3n=W(a){N b=[];N c=2E(a.T,a.1j);N i=0,v;4h{v=c+i*a.1j;b.1B({v:v,1M:a.2g(v,a)});++i}2C(v<a.U);13 b};3o=W(v,a){13 v.6L(a.3c)}}h.1j=1y?[m,1y]:m;h.4j=3n;L($.4k(j.2g))h.2g=W(v,a){13""+j.2g(v,a)};Z h.2g=3o}W 52(){L(D.R.U==P){N a=R.U;1h(N i=0;i<C.17;++i)L(C[i].1x.1r&&C[i].1x.3d+R.1C>a)a=R.1C+C[i].1x.3d;R.U=a}}W 4d(a,b){a.1c=[];L(b.1c==P)a.1c=a.4j(a);Z L(2B b.1c=="34"){L(b.1c>0)a.1c=a.4j(a)}Z L(b.1c){N c=b.1c;L($.4k(c))c=c({T:a.T,U:a.U});N i,v;1h(i=0;i<c.17;++i){N d=P;N t=c[i];L(2B t=="6M"){v=t[0];L(t.17>1)d=t[1]}Z v=t;L(d==P)d=a.2g(v,a);a.1c[i]={v:v,1M:d}}}L(b.3b!=P&&a.1c.17>0){L(b.T==P)a.T=11.T(a.T,a.1c[0].v);L(b.U==P&&a.1c.17>1)a.U=11.T(a.U,a.1c[a.1c.17-1].v)}}W 53(){N i,2q=[],l;1h(i=0;i<Q.1c.17;++i){l=Q.1c[i].1M;L(l)2q.1B(\'<1m 2a="3r">\'+l+\'</1m>\')}L(2q.17>0){N a=$(\'<1m 1G="1K:2m;18:-5h;3s-3t:3u">\'+2q.2P("")+\'</1m>\').35(1u);3g=a.1F();40=a.4l("1m").20();a.3v()}N b=D.1q.3f;L(D.1p.1r)b=11.U(b,D.1p.2H+D.1p.1d/2);1h(i=0;i<C.17;++i){L(C[i].1p.1r)b=11.U(b,C[i].1p.2H+C[i].1p.1d/2)}15.1k=15.1v=15.18=15.1w=b;15.1k+=3g+D.1q.3e;1Z=1X-15.1k-15.1v;2Z=1Z/6;2q=[];1h(i=0;i<R.1c.17;++i){l=R.1c[i].1M;L(l)2q.1B(\'<3w 2a="3r" 1F="\'+2Z+\'">\'+l+\'</3w>\')}N c=0;L(2q.17>0){N a=$(\'<1m 1G="1K:2m;18:-5h;3s-3t:3u">\'+2q.2P("")+\'</1m>\').35(1u);c=a.20();a.3v()}15.1w+=c+D.1q.3e;1R=1Y-15.1w-15.18;2i=1Z/(R.U-R.T);2j=1R/(Q.U-Q.T)}W 3k(){5i();1h(N i=0;i<C.17;i++){5j(C[i])}}W 1a(x){13(x-R.T)*2i}W 1b(y){13 1R-(y-Q.T)*2j}W 5i(){N i;O.3x();O.5k(0,0,1X,1Y);O.3y(15.1k,15.18);L(D.1q.2v!=P){O.2F=D.1q.2v;O.4m(0,0,1Z,1R)}L(D.1l.1r)13;L(D.1q.3V){N b=D.1q.3V;L($.4k(b))b=b({6N:R.T,6O:R.U,6P:Q.T,6Q:Q.U});1h(i=0;i<b.17;++i){N a=b[i];L(a.1P==P||a.1P<R.T)a.1P=R.T;L(a.X==P||a.X>R.U)a.X=R.U;L(a.V==P||a.V<Q.T)a.V=Q.T;L(a.Y==P||a.Y>Q.U)a.Y=Q.U;N c;L(a.1P>a.X){c=a.1P;a.1P=a.X;a.X=c}L(a.V>a.Y){c=a.V;a.V=a.Y;a.Y=c}L(a.1P>=R.U||a.X<=R.T||a.1P==a.X||a.V>=Q.U||a.Y<=Q.T||a.V==a.Y)1f;O.2F=a.1i||D.1q.4E;O.4m(11.1U(1a(a.1P)),11.1U(1b(a.Y)),11.1U(1a(a.X)-1a(a.1P)),11.1U(1b(a.V)-1b(a.Y)))}}O.1d=1;O.1Q=D.1q.4C;O.2b();N v;1h(i=0;i<R.1c.17;++i){v=R.1c[i].v;L(v<=R.T||v>=R.U)1f;O.1V(11.1U(1a(v))+O.1d/2,0);O.1o(11.1U(1a(v))+O.1d/2,1R)}1h(i=0;i<Q.1c.17;++i){v=Q.1c[i].v;L(v<=Q.T||v>=Q.U)1f;O.1V(0,11.1U(1b(v))+O.1d/2);O.1o(1Z,11.1U(1b(v))+O.1d/2)}O.2R();L(D.1q.3f){O.1d=D.1q.3f;O.1Q=D.1q.1i;O.3z="2S";O.5l(0,0,1Z,1R);O.3A()}}W 54(){1u.4l(".5m").3v();N i,1H;N a=\'<1m 2a="5m" 1G="3s-3t:3u;1i:\'+D.1q.1i+\'">\';1h(i=0;i<R.1c.17;++i){1H=R.1c[i];L(!1H.1M||1H.v<R.T||1H.v>R.U)1f;a+=\'<1m 1G="1K:2m;18:\'+(15.18+1R+D.1q.3e)+\'1I;1k:\'+(15.1k+1a(1H.v)-2Z/2)+\'1I;1F:\'+2Z+\'1I;5n-5o:6R" 2a="3r">\'+1H.1M+"</1m>"}1h(i=0;i<Q.1c.17;++i){1H=Q.1c[i];L(!1H.1M||1H.v<Q.T||1H.v>Q.U)1f;a+=\'<1m 1G="1K:2m;18:\'+(15.18+1b(1H.v)-40/2)+\'1I;1k:0;1F:\'+3g+\'1I;5n-5o:1v" 2a="3r">\'+1H.1M+"</1m>"}a+=\'</1m>\';1u.4n(a)}W 5j(a){L(a.1l.1r){5p(a);13}L(a.1W.1r||(!a.1x.1r&&!a.1p.1r))5q(a);L(a.1x.1r)5r(a);L(a.1p.1r)5s(a)}W 5p(a){N b=a.1A/32;N c=11.3B*(-0.5+2*31);N d=11.3B*(-0.5+2*(31+b));O.2b();O.1d=0;O.1V(2y,2z);O.3C(2y,2z,1S,c,d,1n);O.5t();O.2F=a.1i;O.1L();L(a.1l.3X>0){O.1Q=a.1l.3W;O.1d=a.1l.3X;O.2b();O.1V(2y,2z);O.3C(2y,2z,1S,c,d,1n);O.5t();O.1Q=a.1l.3W;O.2R()}L(D.1l.4G&&2B(D.1l.2G)==\'W\'){N e=D.1l.2G(a);N f=(d+c)/2;N g=a.1l.3Z?a.1l.3Z:1S*a.1l.4H;N h=2y+11.2S(11.6S(f)*g);N i=2z+11.2S(11.6T(f)*g);N j=\'<3w  2a="4o" 6U="4o\'+3h+\'" 1G="1K:2m;18:\'+(15.18+i)+\'1I;1k:\'+(15.1k+h)+\'1I;"><1m>\'+e+"</1m></3w>";1u.4n(j);N k=$(\'#4o\'+3h);k.2O(\'5u\',a.1l.4I);k.2O(\'18\',(15.18+i-k.20()/2));k.2O(\'1k\',(15.1k+h-k.1F()/2))}31+=b;3h++}W 5q(h){W 3D(a,b){N c,1J=P,3E=P,3F=P;O.2b();1h(N i=0;i<a.17;++i){c=1J;1J=a[i];L(c==P||1J==P)1f;N d=c[0],V=c[1],X=1J[0],Y=1J[1];L(V<=Y&&V<Q.T){L(Y<Q.T)1f;d=(Q.T-V)/(Y-V)*(X-d)+d;V=Q.T}Z L(Y<=V&&Y<Q.T){L(V<Q.T)1f;X=(Q.T-V)/(Y-V)*(X-d)+d;Y=Q.T}L(V>=Y&&V>Q.U){L(Y>Q.U)1f;d=(Q.U-V)/(Y-V)*(X-d)+d;V=Q.U}Z L(Y>=V&&Y>Q.U){L(V>Q.U)1f;X=(Q.U-V)/(Y-V)*(X-d)+d;Y=Q.U}L(d<=X&&d<R.T){L(X<R.T)1f;V=(R.T-d)/(X-d)*(Y-V)+V;d=R.T}Z L(X<=d&&X<R.T){L(d<R.T)1f;Y=(R.T-d)/(X-d)*(Y-V)+V;X=R.T}L(d>=X&&d>R.U){L(X>R.U)1f;V=(R.U-d)/(X-d)*(Y-V)+V;d=R.U}Z L(X>=d&&X>R.U){L(d>R.U)1f;Y=(R.U-d)/(X-d)*(Y-V)+V;X=R.U}L(3E!=1a(d)||3F!=1b(V)+b)O.1V(1a(d),1b(V)+b);3E=1a(X);3F=1b(Y)+b;O.1o(3E,3F)}O.2R()}W 5v(a){N b,1J=P;N c=11.T(11.U(0,Q.T),Q.U);N d,3G=0;N e=1n;1h(N i=0;i<a.17;++i){b=1J;1J=a[i];L(e&&b!=P&&1J==P){O.1o(1a(3G),1b(c));O.1L();e=1n;1f}L(b==P||1J==P)1f;N f=b[0],V=b[1],X=1J[0],Y=1J[1];L(f<=X&&f<R.T){L(X<R.T)1f;V=(R.T-f)/(X-f)*(Y-V)+V;f=R.T}Z L(X<=f&&X<R.T){L(f<R.T)1f;Y=(R.T-f)/(X-f)*(Y-V)+V;X=R.T}L(f>=X&&f>R.U){L(X>R.U)1f;V=(R.U-f)/(X-f)*(Y-V)+V;f=R.U}Z L(X>=f&&X>R.U){L(f>R.U)1f;Y=(R.U-f)/(X-f)*(Y-V)+V;X=R.U}L(!e){O.2b();O.1V(1a(f),1b(c));e=1s}L(V>=Q.U&&Y>=Q.U){O.1o(1a(f),1b(Q.U));O.1o(1a(X),1b(Q.U));1f}Z L(V<=Q.T&&Y<=Q.T){O.1o(1a(f),1b(Q.T));O.1o(1a(X),1b(Q.T));1f}N g=f,3H=X;L(V<=Y&&V<Q.T&&Y>=Q.T){f=(Q.T-V)/(Y-V)*(X-f)+f;V=Q.T}Z L(Y<=V&&Y<Q.T&&V>=Q.T){X=(Q.T-V)/(Y-V)*(X-f)+f;Y=Q.T}L(V>=Y&&V>Q.U&&Y<=Q.U){f=(Q.U-V)/(Y-V)*(X-f)+f;V=Q.U}Z L(Y>=V&&Y>Q.U&&V<=Q.U){X=(Q.U-V)/(Y-V)*(X-f)+f;Y=Q.U}L(f!=g){L(V<=Q.T)d=Q.T;Z d=Q.U;O.1o(1a(g),1b(d));O.1o(1a(f),1b(d))}O.1o(1a(f),1b(V));O.1o(1a(X),1b(Y));L(X!=3H){L(Y<=Q.T)d=Q.T;Z d=Q.U;O.1o(1a(3H),1b(d));O.1o(1a(X),1b(d))}3G=11.U(X,3H)}L(e){O.1o(1a(3G),1b(c));O.1L()}}O.3x();O.3y(15.1k,15.18);O.3z="2S";N j=h.1W.1d;N k=h.2I;L(k>0){O.1d=k/2;O.1Q="2r(0,0,0,0.1)";3D(h.1A,j/2+k/2+O.1d/2);O.1d=k/2;O.1Q="2r(0,0,0,0.2)";3D(h.1A,j/2+O.1d/2)}O.1d=j;O.1Q=h.1i;L(h.1W.1L){O.2F=h.1W.27!=P?h.1W.27:2k(h.1i).2M(P,P,P,0.4).2l();5v(h.1A,0)}3D(h.1A,0);O.3A()}W 5s(d){W 5w(a,b,c){1h(N i=0;i<a.17;++i){L(a[i]==P)1f;N x=a[i][0],y=a[i][1];L(x<R.T||x>R.U||y<Q.T||y>Q.U)1f;O.2b();O.3C(1a(x),1b(y),b,0,2*11.3B,1s);L(c)O.1L();O.2R()}}W 4p(a,b,c){1h(N i=0;i<a.17;++i){L(a[i]==P)1f;N x=a[i][0],y=a[i][1];L(x<R.T||x>R.U||y<Q.T||y>Q.U)1f;O.2b();O.3C(1a(x),1b(y)+b,c,0,11.3B,1n);O.2R()}}O.3x();O.3y(15.1k,15.18);N e=d.1W.1d;N f=d.2I;L(f>0){O.1d=f/2;O.1Q="2r(0,0,0,0.1)";4p(d.1A,f/2+O.1d/2,d.1p.2H);O.1d=f/2;O.1Q="2r(0,0,0,0.2)";4p(d.1A,O.1d/2,d.1p.2H)}O.1d=d.1p.1d;O.1Q=d.1i;O.2F=d.1p.27!=P?d.1p.27:d.1i;5w(d.1A,d.1p.2H,d.1p.1L);O.3A()}W 5r(g){W 5x(a,b,c,d){1h(N i=0;i<a.17;i++){L(a[i]==P)1f;N x=a[i][0],y=a[i][1];N e=1s,3I=1s,3J=1s;N f=x,1v=x+b,1w=0,18=y;L(1v<R.T||f>R.U||18<Q.T||1w>Q.U)1f;L(f<R.T){f=R.T;e=1n}L(1v>R.U){1v=R.U;3J=1n}L(1w<Q.T)1w=Q.T;L(18>Q.U){18=Q.U;3I=1n}L(d){O.2b();O.1V(1a(f),1b(1w)+c);O.1o(1a(f),1b(18)+c);O.1o(1a(1v),1b(18)+c);O.1o(1a(1v),1b(1w)+c);O.1L()}L(e||3J||3I){O.2b();O.1V(1a(f),1b(1w)+c);L(e)O.1o(1a(f),1b(18)+c);Z O.1V(1a(f),1b(18)+c);L(3I)O.1o(1a(1v),1b(18)+c);Z O.1V(1a(1v),1b(18)+c);L(3J)O.1o(1a(1v),1b(1w)+c);Z O.1V(1a(1v),1b(1w)+c);O.2R()}}}O.3x();O.3y(15.1k,15.18);O.3z="2S";N h=g.1x.3d;N j=11.T(g.1x.1d,h);O.1d=j;O.1Q=g.1i;L(g.1x.1L){O.2F=g.1x.27!=P?g.1x.27:2k(g.1i).2M(P,P,P,0.4).2l()}5x(g.1A,h,0,g.1x.1L);O.3A()}W 4a(){1u.4l(".1t").3v();L(!D.1t.1r)13;N a=[];N b=1n;1h(i=0;i<C.17;++i){L(!C[i].1M)1f;L(i%D.1t.4z==0){L(b)a.1B(\'</4q>\');a.1B(\'<4q>\');b=1s}N d=C[i].1M;L(D.1t.2G!=P)d=D.1t.2G(d);a.1B(\'<3K 2a="6V"><1m 1G="6W:5y 6X \'+D.1t.4A+\';6Y:5y"><1m 1G="1F:6Z;20:70;4r-1i:\'+C[i].1i+\';71:72"></1m></1m></3K>\'+\'<3K 2a="73">\'+d+\'</3K>\')}L(b)a.1B(\'</4q>\');L(a.17>0){N e=\'<5z 1G="3s-3t:3u;1i:\'+D.1q.1i+\'">\'+a.2P("")+\'</5z>\';L(D.1t.3R!=P)D.1t.3R.4n(e);Z{N f="";N p=D.1t.1K,m=D.1t.4B;L(p.36(0)=="n")f+=\'18:\'+(m+15.18)+\'1I;\';Z L(p.36(0)=="s")f+=\'1w:\'+(m+15.1w)+\'1I;\';L(p.36(1)=="e")f+=\'1v:\'+(m+15.1v)+\'1I;\';Z L(p.36(1)=="w")f+=\'1k:\'+(m+15.1w)+\'1I;\';N g=$(\'<1m 2a="1t">\'+e.74(\'1G="\',\'1G="1K:2m;\'+f+\';\')+\'</1m>\').35(1u);43=g.5A().1F();L(D.1t.3S!=0.0){N c=D.1t.2v;L(c==P){N h;L(D.1q.2v!=P)h=D.1q.2v;Z h=5B(g);c=2k(h).5C(P,P,P,1).2l()}N j=g.5A();$(\'<1m 1G="1K:2m;1F:\'+j.1F()+\'1I;20:\'+j.20()+\'1I;\'+f+\'4r-1i:\'+c+\';"> </1m>\').76(g).2O(\'5u\',D.1t.3S)}}}}N F={2c:P,2T:P};N G={1g:{x:-1,y:-1},19:{x:-1,y:-1}};N H=P;N I=P;N J=1n;W 4Z(a){N e=a||49.77;L(e.2c==P&&e.5D!=P){N c=1D.78,b=1D.4s;F.2c=e.5D+(c&&c.5E||b.5E||0);F.2T=e.79+(c&&c.5F||b.5F||0)}Z{F.2c=e.2c;F.2T=e.2T}}W 4Y(e){L(e.5G!=1)13;1D.4s.7a();L(1D.2s!==3L&&2A.2s==P){2A.2s=1D.2s;1D.2s=W(){13 1n}}L(1D.2t!==3L&&2A.2t==P){2A.2t=1D.2t;1D.2t=W(){13 1n}}3M(G.1g,e);L(I!=P)5H(I);F.2c=P;I=7b(5I,7c);$(1D).7d("7e",5J)}W 51(e){L(J){J=1n;13}N a=2J.5K();N b={};b.x=e.2c-a.1k-15.1k;b.x=R.T+b.x/2i;b.y=e.2T-a.18-15.18;b.y=Q.U-b.y/2j;1u.5L("7f",[b])}W 4t(){N a,X,V,Y;L(G.1g.x<=G.19.x){a=G.1g.x;X=G.19.x}Z{a=G.19.x;X=G.1g.x}L(G.1g.y>=G.19.y){V=G.1g.y;Y=G.19.y}Z{V=G.19.y;Y=G.1g.y}a=R.T+a/2i;X=R.T+X/2i;V=Q.U-V/2j;Y=Q.U-Y/2j;1u.5L("7g",[{1P:a,V:V,X:X,Y:Y}])}W 5J(e){L(1D.2s!==3L)1D.2s=2A.2s;L(1D.2t!==3L)1D.2t=2A.2t;L(I!=P){5H(I);I=P}3M(G.19,e);2K();L(!4u()||e.5G!=1)13 1n;3N();4t();J=1s;13 1n}W 3M(a,e){N b=$(2x).5K();L(D.2h.2f=="y"){L(a==G.1g)a.x=0;Z a.x=1Z}Z{a.x=e.2c-b.1k-15.1k;a.x=11.T(11.U(0,a.x),1Z)}L(D.2h.2f=="x"){L(a==G.1g)a.y=0;Z a.y=1R}Z{a.y=e.2T-b.18-15.18;a.y=11.T(11.U(0,a.y),1R)}}W 5I(){L(F.2c==P)13;3M(G.19,F);2K();L(4u())3N()}W 2K(){L(H==P)13;N x=11.T(H.1g.x,H.19.x),y=11.T(H.1g.y,H.19.y),w=11.2U(H.19.x-H.1g.x),h=11.2U(H.19.y-H.1g.y);1N.5k(x+15.1k-1N.1d,y+15.18-1N.1d,w+1N.1d*2,h+1N.1d*2);H=P}W 44(a){2K();L(D.2h.2f=="x"){G.1g.y=0;G.19.y=1R}Z{G.1g.y=(Q.U-a.V)*2j;G.19.y=(Q.U-a.Y)*2j}L(D.2h.2f=="y"){G.1g.x=0;G.19.x=1Z}Z{G.1g.x=(a.1P-R.T)*2i;G.19.x=(a.X-R.T)*2i}3N();4t()}W 3N(){L(H!=P&&G.1g.x==H.1g.x&&G.1g.y==H.1g.y&&G.19.x==H.19.x&&G.19.y==H.19.y)13;1N.1Q=2k(D.2h.1i).2M(P,P,P,0.8).2l();1N.1d=1;O.3z="2S";1N.2F=2k(D.2h.1i).2M(P,P,P,0.4).2l();H={1g:{x:G.1g.x,y:G.1g.y},19:{x:G.19.x,y:G.19.y}};N x=11.T(G.1g.x,G.19.x),y=11.T(G.1g.y,G.19.y),w=11.2U(G.19.x-G.1g.x),h=11.2U(G.19.y-G.1g.y);1N.4m(x+15.1k,y+15.18,w,h);1N.5l(x+15.1k,y+15.18,w,h)}W 4u(){N a=5;13 11.2U(G.19.x-G.1g.x)>=a&&11.2U(G.19.y-G.1g.y)>=a}}$.4R=W(a,b,c){N d=1E 4y(a,b,c);13 d};W 2E(n,a){13 a*11.1U(n/a)}W 1T(r,g,b,a){N e=[\'r\',\'g\',\'b\',\'a\'];N x=4;2C(-1<--x){14[e[x]]=38[x]||((x==3)?1.0:0)}14.2l=W(){L(14.a>=1.0){13"4v("+[14.r,14.g,14.b].2P(",")+")"}Z{13"2r("+[14.r,14.g,14.b,14.a].2P(",")+")"}};14.2M=W(a,b,c,d){x=4;2C(-1<--x){L(38[x]!=P)14[e[x]]*=38[x]}13 14.3O()};14.5C=W(a,b,c,d){x=4;2C(-1<--x){L(38[x]!=P)14[e[x]]+=38[x]}13 14.3O()};14.7h=W(){13 1E 1T(14.r,14.b,14.g,14.a)};N f=W(a,b,c){13 11.U(11.T(a,c),b)};14.3O=W(){14.r=f(1z(14.r),0,1e);14.g=f(1z(14.g),0,1e);14.b=f(1z(14.b),0,1e);14.a=f(14.a,0,1);13 14};14.3O()}N K={7i:[0,1e,1e],7j:[5M,1e,1e],7k:[5N,5N,7l],7m:[0,0,0],7n:[0,0,1e],7o:[5O,42,42],7p:[0,1e,1e],7q:[0,0,2V],7r:[0,2V,2V],7s:[4w,4w,4w],7t:[0,2L,0],7u:[7v,7w,5P],7x:[2V,0,2V],7y:[85,5P,47],7z:[1e,5Q,0],7A:[7B,50,7C],7D:[2V,0,0],7E:[7F,7G,7H],7I:[7J,0,3P],7K:[1e,0,1e],7L:[1e,7M,0],7N:[0,2e,0],7O:[75,0,7P],7Q:[5M,5R,5Q],7R:[7S,7T,5R],7U:[5S,1e,1e],7V:[5T,7W,5T],7X:[3P,3P,3P],7Y:[1e,7Z,80],81:[1e,1e,5S],82:[0,1e,0],83:[1e,0,1e],84:[2e,0,0],86:[0,0,2e],87:[2e,2e,0],88:[1e,5O,0],89:[1e,3Q,8a],8b:[2e,0,2e],8c:[2e,0,2e],8d:[1e,0,0],8e:[3Q,3Q,3Q],8f:[1e,1e,1e],8g:[1e,1e,0]};W 5B(a){N b,39=a;4h{b=39.2O("4r-1i").5U();L(b!=\'\'&&b!=\'4x\')22;39=39.8h()}2C(!$.8i(39.48(0),"4s"));L(b=="2r(0, 0, 0, 0)")13"4x";13 b}W 2k(a){N b;L(b=/4v\\(\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*\\)/.2W(a))13 1E 1T(1z(b[1],10),1z(b[2],10),1z(b[3],10));L(b=/2r\\(\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*,\\s*([0-9]+(?:\\.[0-9]+)?)\\s*\\)/.2W(a))13 1E 1T(1z(b[1],10),1z(b[2],10),1z(b[3],10),2u(b[4]));L(b=/4v\\(\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*,\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*,\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*\\)/.2W(a))13 1E 1T(2u(b[1])*2.55,2u(b[2])*2.55,2u(b[3])*2.55);L(b=/2r\\(\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*,\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*,\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*,\\s*([0-9]+(?:\\.[0-9]+)?)\\s*\\)/.2W(a))13 1E 1T(2u(b[1])*2.55,2u(b[2])*2.55,2u(b[3])*2.55,2u(b[4]));L(b=/#([a-2X-2Y-9]{2})([a-2X-2Y-9]{2})([a-2X-2Y-9]{2})/.2W(a))13 1E 1T(1z(b[1],16),1z(b[2],16),1z(b[3],16));L(b=/#([a-2X-2Y-9])([a-2X-2Y-9])([a-2X-2Y-9])/.2W(a))13 1E 1T(1z(b[1]+b[1],16),1z(b[2]+b[2],16),1z(b[3]+b[3],16));N c=$.8j(a).5U();L(c=="4x")13 1E 1T(1e,1e,1e,0);Z{b=K[c];13 1E 1T(b[0],b[1],b[2])}}})(8k);',62,517,'|||||||||||||||||||||||||||||||||||||||||||||||if||var|ctx|null|yaxis|xaxis||min|max|y1|function|x2|y2|else||Math||return|this|plotOffset||length|top|second|tHoz|tVert|ticks|lineWidth|255|continue|first|for|color|tickSize|left|pie|div|false|lineTo|points|grid|show|true|legend|target|right|bottom|bars|unit|parseInt|data|push|datamax|document|new|width|style|tick|px|cur|position|fill|label|octx|datamin|x1|strokeStyle|plotHeight|pieChartRadius|Color|floor|moveTo|lines|canvasWidth|canvasHeight|plotWidth|height|norm|break|month|||year|fillColor|minute|hour|class|beginPath|pageX||128|mode|tickFormatter|selection|hozScale|vertScale|parseColor|toString|absolute|case|day|fmt|labels|rgba|onselectstart|ondrag|parseFloat|backgroundColor|minTickSize|overlay|pieCenterLeft|pieCenterTop|workarounds|typeof|while|magn|floorInBase|fillStyle|labelFormatter|radius|shadowSize|eventHolder|clearSelection|100|scale|Number|css|join|1000|stroke|round|pageY|abs|139|exec|fA|F0|xLabelBoxWidth||pieIndex|pieTotal|extend|number|appendTo|charAt|getMonth|arguments|elem|colors|autoscaleMargin|tickDecimals|barWidth|labelMargin|borderWidth|yLabelMaxWidth|pieArcIndex|setData|setupGrid|draw|noTicks|canvas|generator|formatter|getHours|setMonth|tickLabel|font|size|smaller|remove|span|save|translate|lineJoin|restore|PI|arc|plotLine|drawx|drawy|lastX|x2old|drawTop|drawRight|td|undefined|setSelectionPos|drawSelection|normalize|211|192|container|backgroundOpacity|monthNames|timeformat|coloredAreas|pieStrokeColor|pieStrokeLineWidth|centerOffsetLeft|labelOffset|yLabelMaxHeight|pieVertices||legendWidth|setSelection|MAX_VALUE|MIN_VALUE||get|window|insertLegend|setRange|prepareTickGeneration|setTicks|formatDate|getFullYear|setHours|do|getTime|tickGenerator|isFunction|find|fillRect|append|pieLabel|plotPointShadows|tr|background|body|triggerSelectedEvent|selectionIsSane|rgb|169|transparent|Plot|noColumns|labelBoxBorderColor|margin|tickColor|clickable|coloredAreasColor|centerOffsetTop|showLabel|labelOffsetFactor|labelBackgroundOpacity|pieChartDiameter|arcIncrementMultiplier|parseOptions|constructCanvas|parseData|fillInSeriesOptions|processData|isNaN|plot|browser|msie|G_vmlCanvasManager|initElement|getContext|0px|onMouseDown|onMouseMove||onClick|extendXRangeIfNeededByBar|setSpacing|insertLabels||getMinutes|getSeconds|pow|log|LN10|Date|setSeconds|setMinutes|setFullYear|setDate|setTime|10000px|drawGrid|drawSeries|clearRect|strokeRect|tickLabels|text|align|drawSeriesPie|drawSeriesLines|drawSeriesBars|drawSeriesPoints|closePath|opacity|plotLineArea|plotPoints|plotBars|1px|table|children|extractColor|adjust|clientX|scrollLeft|scrollTop|which|clearInterval|updateSelectionOnMouseMove|onSelectionMouseUp|offset|trigger|240|245|165|107|140|230|224|144|toLowerCase|edc240|afd8f8|cb4b4b|4da74d|9440ed||ccc|ne|02|ffffff|545454|dddddd|f4f4f4|e8cfac|FFF|getCanvas|getPlotOffset|getData|getAxes|in|ceil|percent|html|relative|throw|Invalid|dimensions|mousedown|each|onmousemove|click|auto|match|01|time|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|switch|getDate|365|2425|setMilliseconds|toFixed|object|xmin|xmax|ymin|ymax|center|cos|sin|id|legendColorBox|border|solid|padding|14px|10px|overflow|hidden|legendLabel|replace||prependTo|event|documentElement|clientY|focus|setInterval|200|one|mouseup|plotclick|selected|clone|aqua|azure|beige|220|black|blue|brown|cyan|darkblue|darkcyan|darkgrey|darkgreen|darkkhaki|189|183|darkmagenta|darkolivegreen|darkorange|darkorchid|153|204|darkred|darksalmon|233|150|122|darkviolet|148|fuchsia|gold|215|green|indigo|130|khaki|lightblue|173|216|lightcyan|lightgreen|238|lightgrey|lightpink|182|193|lightyellow|lime|magenta|maroon||navy|olive|orange|pink|203|purple|violet|red|silver|white|yellow|parent|nodeName|trim|jQuery'.split('|'),0,{}))