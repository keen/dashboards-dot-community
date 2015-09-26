var client = new Keen({
  projectId: "55df52e9e08557169c200d01",
  readKey: "af12bc76de28231d92b51a85b6c776aa5d55b0d85fb2a31f25b20ffd87771055bae4411aeb159a7055364a716a7a2a63d92c5dd6b50721f71467bbe07aaf8903ba5134bd0df1b533099b9c7c691cc55a9ffe0f3ce13d3ff3b35d9e553900f3b5a78635a152a9a73495e423aeaa8d5bef",
  writeKey: "746f3c35d2deba27273543298152fcea67d0d90796e9b699d853b07b7b18a340c7218e0256e8a17bc73ed947af7d74c978d64b83b6cdd4513641a4eae6d3be2731eba526cba195e9b0e2c507dbe7ebe611c52b3738e28de40ed1f801136b0024f5258e5cc652ace8b1426963f520d185"
});

var form, label, input, client, convo;

Keen.ready(function(){

  // table for recent guestbook signatures
  var query = new Keen.Query("extraction", {
    eventCollection: "message",
    targetProperty: "message.name",
    timeframe: "this_1_months",
    timezone: "UTC",
    propertyNames: ["message.name", "message.company", "message.note", "geo.city", "geo.country"]
  });

  client.draw(query, document.getElementById("guestbook"), {
    chartType:"table",
    title: false
  });


  // ----------------------------------------
  // Query one
  // ----------------------------------------
  var el = document.getElementById("chart-01");

    var query = new Keen.Query("count", {
        eventCollection: "message",
        timeframe: "this_1_year",
        groupBy: "geo.country"
    });

    var chart = new Keen.Dataviz()
        .el(el)
        .height(400)
        .prepare();

    client.run(query, function(err, res){
       chart
           .parseRequest(this)
           .call(function(){
               var ds, map;
               ds = new google.visualization.arrayToDataTable(this.data());

               map = new google.visualization.GeoChart(this.el());
               map.draw(ds);
           });
    });

  // ----------------------------------------
  // Query two
  // ----------------------------------------
  var pageviews_static = new Keen.Query("count", {
    eventCollection: "pageview",
    groupBy: "geo.country",
    timeframe: "this_1_months",
    timezone: "UTC"
  });
  client.draw(pageviews_static, document.getElementById("chart-02"), {
    chartType: "barchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
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
    groupBy: "geo.city",
    timeframe: "this_1_months",
    timezone: "UTC"
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
       groupBy: "tech.info.os.family",
       targetProperty: "tech.info.browser.family",
       timeframe: "this_1_months",
       timezone: "US/Pacific"
       });
  client.draw(impressions_timeline_by_device, document.getElementById("chart-04"), {
    chartType: "barchart",
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
        timeframe: "this_1_years",
        timezone: "US/Pacific"
        });
  client.draw(impressions_timeline_by_device, document.getElementById("chart-09"), {
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
       timeframe: "this_1_weeks",
       timezone: "US/Pacific"
       });
  client.draw(impressions_timeline_by_country, document.getElementById("chart-10"), {
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
    eventCollection: "message",
     timeframe: "this_1_years",
     timezone: "US/Pacific"
  });
  client.draw(pageviews_timeline, document.getElementById("chart-11"), {
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
  //  End query eleven
  // ----------------------------------------
});

  function inthis(){
    form = document.getElementById('messenger');

    if (window.addEventListener) {
      form.addEventListener('submit', handleSubmit);
    }
    else {
      form.attachEvent('onsubmit', handleSubmit);
    }
    initAnalytics();
  }

  function handleSubmit(e){
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    client.addEvent('message', {
      message: {
        name: document.getElementById('name-input').value,
        company: document.getElementById('company-input').value,
        note: document.getElementById('note-input').value,
        contact: document.getElementById('contact-input').value
      }
    });

    form.style.display = 'none';
    document.getElementById('message-sent').style.display = 'block';
  }

  function initAnalytics(){

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
$( document ).ready( inthis );
