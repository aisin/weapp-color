const pageData = {
    onShow: function(){
        let app = getApp();
        let level = app.level;
        this.setData({
            level: level
        });
    },

    goAgain: function(){
        wx.redirectTo({
          url: '../index/index'
        })
    }
};

Page(pageData);