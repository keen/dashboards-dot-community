// Full keen-js is loaded from the page

// Load keen-tracking.js
!function(name,path,ctx){
  var latest,prev=name!=='Keen'&&window.Keen?window.Keen:false;ctx[name]=ctx[name]||{ready:function(fn){var h=document.getElementsByTagName('head')[0],s=document.createElement('script'),w=window,loaded;s.onload=s.onerror=s.onreadystatechange=function(){if((s.readyState&&!(/^c|loade/.test(s.readyState)))||loaded){return}s.onload=s.onreadystatechange=null;loaded=1;latest=w.Keen;if(prev){w.Keen=prev}else{try{delete w.Keen}catch(e){w.Keen=void 0}}ctx[name]=latest;ctx[name].ready(fn)};s.async=1;s.src=path;h.parentNode.insertBefore(s,h)}}
}('KeenTracker','https://d26b395fwzu5fz.cloudfront.net/keen-tracking-0.0.1.js',this);

Keen.ready(function(){
  KeenTracker.ready(init);
});

// Executes when the library is loaded and ready
function init(){
  // Create a new client instance
  // Use this for query+dataviz
  var client = new Keen({
      projectId: '55df52e9e08557169c200d01',
      readKey: 'af12bc76de28231d92b51a85b6c776aa5d55b0d85fb2a31f25b20ffd87771055bae4411aeb159a7055364a716a7a2a63d92c5dd6b50721f71467bbe07aaf8903ba5134bd0df1b533099b9c7c691cc55a9ffe0f3ce13d3ff3b35d9e553900f3b5a78635a152a9a73495e423aeaa8d5bef'
  });

  // Use this for recording events
  var tracker = new KeenTracker({
    projectId: '55df52e9e08557169c200d01',
    writeKey: '746f3c35d2deba27273543298152fcea67d0d90796e9b699d853b07b7b18a340c7218e0256e8a17bc73ed947af7d74c978d64b83b6cdd4513641a4eae6d3be2731eba526cba195e9b0e2c507dbe7ebe611c52b3738e28de40ed1f801136b0024f5258e5cc652ace8b1426963f520d185'
  });

    var uniqueId; // = KeenTracker.helpers.getUniqueId();
    var userId;

    var sessionCookie = window.sessionCookie = KeenTracker.utils.cookie('track-session');
    if ('string' !== typeof sessionCookie.get('guest_id')) {
        sessionCookie.set('guest_id', KeenTracker.helpers.getUniqueId());
    }

    var sessionTimer = KeenTracker.utils.timer();
    sessionTimer.start();

    KeenTracker.listenTo({
      'click button.btn-primary': function(e){
          // 500ms to record an event
          tracker.recordEvent('highfive');
      }
    });

    // THE BIG DATA MODEL!
    tracker.extendEvents(function(){
        return {
            page: {
                title: document.title,
                url: document.location.href
                // info: {} (add-on)
            },
            referrer: {
                url: document.referrer
                // info: {} (add-on)
            },
            tech: {
                browser: KeenTracker.helpers.getBrowserProfile(),
                // info: {} (add-on)
                ip: '${keen.ip}',
                ua: '${keen.user_agent}'
            },
            time: KeenTracker.helpers.getDatetimeIndex(),
            visitor: {
                id: sessionCookie.get('user_id'),
                time_on_page: sessionTimer.value()
            },
            // geo: {} (add-on)
            keen: {
                timestamp: new Date().toISOString(),
                addons: [
                    {
                        name: 'keen:ip_to_geo',
                        input: {
                            ip: 'tech.ip'
                        },
                        output: 'geo'
                    },
                    {
                        name: 'keen:ua_parser',
                        input: {
                            ua_string: 'tech.ua'
                        },
                        output: 'tech.info'
                    },
                    {
                        name: 'keen:url_parser',
                        input: {
                            url: 'page.url'
                        },
                        output: 'page.info'
                    },
                    {
                        name: 'keen:referrer_parser',
                        input: {
                            page_url: 'page.url',
                            referrer_url: 'referrer.url'
                        },
                        output: 'referrer.info'
                    }
                ]
            }
        };
    });

    tracker.recordEvent('pageview');

    // Track errors and messages in the dev console
    Keen.debug = true;
    KeenTracker.debug = true;

    // Observe what's happening in each method
    tracker.on('recordEvent', Keen.log);
    tracker.on('recordEvents', Keen.log);
    tracker.on('deferEvent', Keen.log);
    tracker.on('deferEvents', Keen.log);
    tracker.on('recordDeferredEvents', Keen.log);
    tracker.on('extendEvent', Keen.log);
    tracker.on('extendEvents', Keen.log);
}
