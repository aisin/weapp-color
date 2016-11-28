const pageData = {
  data: {},
  toGo: function () {
    wx.redirectTo({
      url: '../game/game'
    });
  }
};

Page(pageData);