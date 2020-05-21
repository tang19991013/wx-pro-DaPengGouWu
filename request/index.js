let ajaxNum=0;
export const request=(params)=>{
    ajaxNum++;
    wx.showLoading({
        title: "加载中",
        mask:true
    });
    return new Promise((reslove,reject)=>{
        wx.request({
            ...params,
            success: function(res) {
                reslove(res)
            },
            fail: function(err) {
                reject(err)
            },
            complete: function() {
                ajaxNum--;
                if(ajaxNum===0){
                    wx.hideLoading();
                }
            }
        })
    })
}