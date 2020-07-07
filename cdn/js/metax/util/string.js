if(!metax) var metax={};
if(!metax.util) metax.util={};
if(!metax.util.string){
	metax.util.string={
	map:new Map(),
	put:function(baseUrl){
        var json=(function(){
			if(baseUrl==null) baseUrl=(function(){
        		var element=document.querySelector("base");
        		if(element!=null) return element.href+"string/";
				var url=location.href;
				if(url.indexOf("/")===-1) return null;
				return url.substring(0,url.lastIndexOf("/")+1)+"string/";
    		})();
			baseUrl=baseUrl+"%s.json";
			function request(name){
        		if(baseUrl==null) return null;
        		return meta.requestText(baseUrl.replace("%s",name),null);
    		}
			var language=navigator.language;
        	var json=request(language);
			if(json!=null||language==="zh-CN") return json;
        	else return request("zh-CN");
    	})();
        if(json==null) return null;
        var array=JSON.parse(json);
        for(var i=0;i<array.length;i++){
            var object=array[i];
            this.map.set(object.key,object.value);
        }
    },
    get:function(key){
        return this.map!=null&&this.map.has(key)?this.map.get(key):key;
    }
    };
	metax.util.string.put();
}
