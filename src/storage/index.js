//storage的进一步封装
//本例中只对sessionStorage进行封装，特点是浏览器窗口关闭自动清空缓存数据
const STORAGE_KEY ='mall';
export default{
    //存储值的函数
    setItem(key,value,module_name){
        if(module_name){
            let val=this.getStorage(module_name);
            val[key]=value;
            this.setItem(module_name,val);
        }else{
            let val=this.getStorage();
            val[key]=value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
        }  
    },
    //获取值的函数
    getItem(key,module_name){
        if(module_name){
            let val=this.getItem();
            if(val) return val[key]
        }
        return this.getStorage()[key];
    },
    //获取整个sessionStorage中的数据
    getStorage(){
      return  JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');//以JSON字符串形式返回
    },
    //清空sessionStorage中的某个值
    clear(key,module_name){
        let val=this.getStorage();
        if(module_name){
            delete val[module_name][key];
        }else{
            delete val[key];
        }
       window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
    }
}