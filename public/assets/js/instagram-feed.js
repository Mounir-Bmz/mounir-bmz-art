var feed = new Instafeed({
  get: 'user',
  userId: '48161752968',
  accessToken: 'VOTRE_ACCESS_TOKEN',
  limit: 9,
  resolution: 'standard_resolution',
  template: '<div class="instagram-image"><a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}"></a></div>'
});

feed.run();
