const V='bypass-dash-v1',APP=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(APP)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET')return;
const keep=res=>{if(res&&(res.ok||res.type==='opaque')){const cp=res.clone();caches.open(V).then(c=>c.put(q,cp))}return res};
if(q.mode==='navigate'){e.respondWith(fetch(q).then(keep).catch(()=>caches.match('index.html')));return}
e.respondWith(caches.match(q,{ignoreSearch:true}).then(r=>r||fetch(q).then(keep)))});
