var client = new Keen({
  projectId: "55df52e9e08557169c200d01",
  readKey: "af12bc76de28231d92b51a85b6c776aa5d55b0d85fb2a31f25b20ffd87771055bae4411aeb159a7055364a716a7a2a63d92c5dd6b50721f71467bbe07aaf8903ba5134bd0df1b533099b9c7c691cc55a9ffe0f3ce13d3ff3b35d9e553900f3b5a78635a152a9a73495e423aeaa8d5bef"
});

Keen.ready(function(){

  // ----------------------------------------
  // Query one
  // ----------------------------------------
  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "pageview",
       groupBy: "geo.city",
       timeframe: "this_1_weeks",
       timezone: "US/Pacific"
    });
  client.draw(pageviews_timeline, document.getElementById("chart-01"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      },
      isStacked: true
    }
  });
  // ----------------------------------------
  //  End query one
  // ----------------------------------------


  // ----------------------------------------
  // Query two
  // ----------------------------------------
  var pageviews_static = new Keen.Query("count", {
   eventCollection: "pageview",
   groupBy: "tech.info.browser.family",
   timeframe: "this_1_weeks",
   timezone: "US/Pacific"
  });
  client.draw(pageviews_static, document.getElementById("chart-02"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
      },
      pieHole: .4
    }
  });
  // ----------------------------------------
  // End query two
  // ----------------------------------------

  // ----------------------------------------
  // Query three
  // ----------------------------------------
  var impressions_timeline = new Keen.Query("count", {
    eventCollection: "pageview",
    groupBy: "referrer.info.medium",
    timeframe: "this_1_weeks",
    timezone: "US/Pacific"
  });
  client.draw(impressions_timeline, document.getElementById("chart-03"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });
  // ----------------------------------------
  // End query three
  // ----------------------------------------

  // ----------------------------------------
  // Query four
  // ----------------------------------------
  var impressions_timeline_by_device = new Keen.Query("count", {
    eventCollection: "pageview",
    groupBy: "geo.city",
    interval: "hourly",
    timeframe: "this_1_weeks",
    timezone: "US/Pacific"
  });
  client.draw(impressions_timeline_by_device, document.getElementById("chart-04"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });
  // ----------------------------------------
  // End query four
  // ----------------------------------------

  // ----------------------------------------
  // Query five
  // ----------------------------------------
  var impressions_timeline_by_country = new Keen.Query("count", {
    eventCollection: "pageview",
    groupBy: "geo.country",
    interval: "hourly",
    timeframe: "this_1_weeks",
    timezone: "US/Pacific"
  });
  client.draw(impressions_timeline_by_country, document.getElementById("chart-05"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });
  // ----------------------------------------
  // End query five
  // ----------------------------------------
  // ----------------------------------------
  // Query six
  // ----------------------------------------
  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "pageview",
    interval: "hourly",
    groupBy: "tech.info.browser.family",
    timeframe: "this_1_weeks",
    timezone: "US/Pacific"
  });
  client.draw(pageviews_timeline, document.getElementById("chart-06"), {
    chartType: "areachart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      },
      isStacked: true
    }
  });
  // ----------------------------------------
  //  End query six
  // ----------------------------------------


  // ----------------------------------------
  // Query seven
  // ----------------------------------------
  var pageviews_static = new Keen.Query("count", {
    eventCollection: "pageview",
    groupBy: "referrer.info.medium",
    timeframe: "this_1_weeks",
    timezone: "US/Pacific"
  });
  client.draw(pageviews_static, document.getElementById("chart-07"), {
    chartType: "piechart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
      },
      pieHole: .4
    }
  });
  // ----------------------------------------
  // End query seven
  // ----------------------------------------

  // ----------------------------------------
  // Query eight
  // ----------------------------------------
  var impressions_timeline = new Keen.Query("count", {
    eventCollection: "pageview",
    groupBy: "visitor.time_on_page",
    interval: "hourly",
    timeframe: "this_1_weeks",
    timezone: "US/Pacific"
  });
  client.draw(impressions_timeline, document.getElementById("chart-08"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });
  // ----------------------------------------
  // End query eight
  // ----------------------------------------

  // ----------------------------------------
  // Query nine
  // ----------------------------------------
  var impressions_timeline_by_device = new Keen.Query("count", {
    eventCollection: "pageview",
    groupBy: "tech.browser.language ",
    interval: "hourly",
    timeframe: "this_1_weeks",
    timezone: "US/Pacific"
  });
  client.draw(impressions_timeline_by_device, document.getElementById("chart-09"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });
  // ----------------------------------------
  // End query nine
  // ----------------------------------------

  // ----------------------------------------
  // Query ten
  // ----------------------------------------
  var impressions_timeline_by_country = new Keen.Query("count", {
    eventCollection: "pageview",
    groupBy: "user.geo_info.country",
    interval: "hourly",
    timeframe: "this_1_weeks",
    timezone: "US/Pacific"
  });
  client.draw(impressions_timeline_by_country, document.getElementById("chart-10"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });
  // ----------------------------------------
  // End query ten
  // ----------------------------------------
  // ----------------------------------------
  // query eleven
  // ----------------------------------------
  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "pageview",
    interval: "hourly",
    groupBy: "tech.info.browser.family",
    timeframe: "this_1_weeks",
    timezone: "US/Pacific"
  });
  client.draw(pageviews_timeline, document.getElementById("chart-11"), {
    chartType: "areachart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      },
      isStacked: true
    }
  });
  // ----------------------------------------
  //  End query eleven
  // ----------------------------------------

});

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
$( window ).ready( init );
