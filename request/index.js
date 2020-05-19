export const request=(params)=>{
    return new Promise((reslove,reject)=>{
        wx.request({
            ...params,
            success: function(res) {
                reslove(res)
            },
            fail: function(err) {
                reject(err)
            }
        })
    })
}