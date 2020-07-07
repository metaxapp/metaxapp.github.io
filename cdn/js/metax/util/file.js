if(!metax) var metax={};
if(!metax.util) metax.util={};
if(!metax.util.file) metax.util.file={
    put:function(path,file){
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e){
            var base64 = e.target.result.split("base64,")[1];
            this.putBase64(path,base64);
        };
    },
    remove:function(path){
        meta.removeFile(path);
    },
    rename:function(oldPath,newPath){
        meta.rename(oldPath,newPath);
    },
    getArray(dir){
        var json=meta.getFileArray(dir);
        return JSON.parse(json);
    },
    putBase64:function(path,base64){
        return meta.putFile(path,base64,false);
    },
    getBase64:function(path){
        return meta.getFile(path);
    },
    putText:function(path,text,append){
        var base64=btoa(unescape(encodeURIComponent(text)));
        return meta.putFile(path,base64,append);
    },
    getText:function(path){
        var base64=meta.getFile(path);
        if(base64==null) return null;
        return decodeURIComponent(escape(atob(base64)));
    }
};