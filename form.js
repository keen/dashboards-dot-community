var form, label, input, client, convo;

  function init(){
    form = document.getElementById('messenger');
    label = document.getElementById('messenger-label');
    input = document.getElementById('messenger-input');

    convo = {
      marker: 'name',
      name: {
        label: 'What\'s your name?',
        placeholder: 'reply',
        reply: ''
      },
      message: {
        label: 'Hello, {Name}! Where do you work?',
        placeholder: 'reply',
        reply: ''
      },
      contact: {
        label: 'What\'s your email so we can send you friendly communication?',
        placeholder: 'reply',
        reply: ''
      },
      thanks: {
        label: 'Roger that, {Name}!',
        placeholder: 'thanks :)',
        reply: undefined
      }
    };

    if (window.addEventListener) {
      input.addEventListener('keydown', handleKeypress);
      form.addEventListener('submit', handleSubmit);
    }
    else {
      input.attachEvent('onkeydown', handleKeypress);
      form.attachEvent('onsubmit', handleSubmit);
    }

    initAnalytics();
  }

  function handleCompletion(){
    client.addEvent('message', {
      message: {
        name: convo['name'].reply,
        text: convo['message'].reply,
        contact: convo['contact'].reply
      }
    });
  }

  function handleKeypress(e){
    if (e.keyCode === 13) {
      handleSubmit(input.value);
    }
    else {
      resetTextareaHeight();
    }
  }

  function handleSubmit(e){
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    convo[convo.marker].reply = input.value;
    switch (convo.marker) {
      case 'name':
        convo.marker = 'message';
        break;
      case 'message':
        convo.marker = 'contact';
        break;
      case 'contact':
        convo.marker = 'thanks';
        input.disabled = true;
        handleCompletion();
        // console.log(convo);
        break;
    }
    input.blur();
    input.value = '';
    label.innerHTML = convo[convo.marker]['label'].replace('{Name}', convo['name'].reply);
    input.placeholder = convo[convo.marker]['placeholder'];
    setTimeout(function(){
      input.focus();
    }, 500);

  }

  function resetTextareaHeight(len){
    var len = input.value.length;
    var width = input.clientWidth;
    input.style.minHeight = len / (width/23) * 70 + "px";
  }

  function initAnalytics(){
    client = new Keen({
      projectId: '55df52e9e08557169c200d01',
      writeKey: '746f3c35d2deba27273543298152fcea67d0d90796e9b699d853b07b7b18a340c7218e0256e8a17bc73ed947af7d74c978d64b83b6cdd4513641a4eae6d3be2731eba526cba195e9b0e2c507dbe7ebe611c52b3738e28de40ed1f801136b0024f5258e5cc652ace8b1426963f520d185',
      requestType: "xhr"
    });

    client.setGlobalProperties(function(collection){
      return {
        page: {
          title: document.title,
          host: document.location.host,
          href: document.location.href,
          path: document.location.pathname,
          protocol: document.location.protocol.replace(/:/g, ''),
          query: document.location.search
        },
        referrer: {
          url: document.referrer
        },
        tech: {
          ip_address: "${keen.ip}",
          user_agent: "${keen.user_agent}"
        },
        keen: {
          timestamp: new Date().toISOString(),
          addons: [
            {
              "name"   : "keen:ip_to_geo",
              "input"  : { "ip": "tech.ip_address" },
              "output" : "geo"
            },
            {
              "name"   : "keen:ua_parser",
              "input"  : { "ua_string": "tech.user_agent" },
              "output" : "tech"
            },
            {
              "name"   : "keen:url_parser",
              "input"  : { "url": "page.href" },
              "output" : "page.info"
            },
            {
              "name"   : "keen:referrer_parser",
              "input"  : { "referrer_url": "referrer.url", "page_url": "page.href" },
              "output" : "referrer.info"
            }
          ]
        }
      };
    });
  }

  $( document ).ready( init );
