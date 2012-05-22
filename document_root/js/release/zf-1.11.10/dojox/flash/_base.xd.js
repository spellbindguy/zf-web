/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.flash._base"],["require","dijit._base.place"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.flash._base"]){_4._hasResource["dojox.flash._base"]=true;_4.provide("dojox.flash._base");_4.experimental("dojox.flash");_4.require("dijit._base.place");_6.flash=function(){};_6.flash={ready:false,url:null,_visible:true,_loadedListeners:[],_installingListeners:[],setSwf:function(_7,_8){this.url=_7;this._visible=true;if(_8!==null&&_8!==undefined){this._visible=_8;}this._initialize();},addLoadedListener:function(_9){this._loadedListeners.push(_9);},addInstallingListener:function(_a){this._installingListeners.push(_a);},loaded:function(){_6.flash.ready=true;if(_6.flash._loadedListeners.length){for(var i=0;i<_6.flash._loadedListeners.length;i++){_6.flash._loadedListeners[i].call(null);}}},installing:function(){if(_6.flash._installingListeners.length){for(var i=0;i<_6.flash._installingListeners.length;i++){_6.flash._installingListeners[i].call(null);}}},_initialize:function(){var _b=new _6.flash.Install();_6.flash.installer=_b;if(_b.needed()){_b.install();}else{_6.flash.obj=new _6.flash.Embed(this._visible);_6.flash.obj.write();_6.flash.comm=new _6.flash.Communicator();}}};_6.flash.Info=function(){this._detectVersion();};_6.flash.Info.prototype={version:-1,versionMajor:-1,versionMinor:-1,versionRevision:-1,capable:false,installing:false,isVersionOrAbove:function(_c,_d,_e){_e=parseFloat("."+_e);if(this.versionMajor>=_c&&this.versionMinor>=_d&&this.versionRevision>=_e){return true;}else{return false;}},_detectVersion:function(){var _f;for(var _10=25;_10>0;_10--){if(_4.isIE){var axo;try{if(_10>6){axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_10);}else{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}if(typeof axo=="object"){if(_10==6){axo.AllowScriptAccess="always";}_f=axo.GetVariable("$version");}}catch(e){continue;}}else{_f=this._JSFlashInfo(_10);}if(_f==-1){this.capable=false;return;}else{if(_f!=0){var _11;if(_4.isIE){var _12=_f.split(" ");var _13=_12[1];_11=_13.split(",");}else{_11=_f.split(".");}this.versionMajor=_11[0];this.versionMinor=_11[1];this.versionRevision=_11[2];var _14=this.versionMajor+"."+this.versionRevision;this.version=parseFloat(_14);this.capable=true;break;}}}},_JSFlashInfo:function(_15){if(navigator.plugins!=null&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var _16=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";var _17=navigator.plugins["Shockwave Flash"+_16].description;var _18=_17.split(" ");var _19=_18[2].split(".");var _1a=_19[0];var _1b=_19[1];var _1c=(_18[3]||_18[4]).split("r");var _1d=_1c[1]>0?_1c[1]:0;var _1e=_1a+"."+_1b+"."+_1d;return _1e;}}return -1;}};_6.flash.Embed=function(_1f){this._visible=_1f;};_6.flash.Embed.prototype={width:215,height:138,id:"flashObject",_visible:true,protocol:function(){switch(window.location.protocol){case "https:":return "https";break;default:return "http";break;}},write:function(_20){var _21;var _22=_6.flash.url;var _23=_22;var _24=_22;var _25=_4.baseUrl;var _26=document.location.protocol+"//"+document.location.host;if(_20){var _27=escape(window.location);document.title=document.title.slice(0,47)+" - Flash Player Installation";var _28=escape(document.title);_23+="?MMredirectURL="+_27+"&MMplayerType=ActiveX"+"&MMdoctitle="+_28+"&baseUrl="+escape(_25)+"&xdomain="+escape(_26);_24+="?MMredirectURL="+_27+"&MMplayerType=PlugIn"+"&baseUrl="+escape(_25)+"&xdomain="+escape(_26);}else{_23+="?cachebust="+new Date().getTime();_23+="&baseUrl="+escape(_25);_23+="&xdomain="+escape(_26);}if(_24.indexOf("?")==-1){_24+="?baseUrl="+escape(_25);}else{_24+="&baseUrl="+escape(_25);}_24+="&xdomain="+escape(_26);_21="<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" "+"codebase=\""+this.protocol()+"://fpdownload.macromedia.com/pub/shockwave/cabs/flash/"+"swflash.cab#version=8,0,0,0\"\n "+"width=\""+this.width+"\"\n "+"height=\""+this.height+"\"\n "+"id=\""+this.id+"\"\n "+"name=\""+this.id+"\"\n "+"align=\"middle\">\n "+"<param name=\"allowScriptAccess\" value=\"always\"></param>\n "+"<param name=\"movie\" value=\""+_23+"\"></param>\n "+"<param name=\"quality\" value=\"high\"></param>\n "+"<param name=\"bgcolor\" value=\"#ffffff\"></param>\n "+"<embed src=\""+_24+"\" "+"quality=\"high\" "+"bgcolor=\"#ffffff\" "+"width=\""+this.width+"\" "+"height=\""+this.height+"\" "+"id=\""+this.id+"Embed"+"\" "+"name=\""+this.id+"\" "+"swLiveConnect=\"true\" "+"align=\"middle\" "+"allowScriptAccess=\"always\" "+"type=\"application/x-shockwave-flash\" "+"pluginspage=\""+this.protocol()+"://www.macromedia.com/go/getflashplayer\" "+"></embed>\n"+"</object>\n";_4.connect(_4,"loaded",_4.hitch(this,function(){var _29=this.id+"Container";if(_4.byId(_29)){return;}var div=document.createElement("div");div.id=this.id+"Container";div.style.width=this.width+"px";div.style.height=this.height+"px";if(!this._visible){div.style.position="absolute";div.style.zIndex="10000";div.style.top="-1000px";}div.innerHTML=_21;var _2a=document.getElementsByTagName("body");if(!_2a||!_2a.length){throw new Error("No body tag for this page");}_2a=_2a[0];_2a.appendChild(div);}));},get:function(){if(_4.isIE||_4.isWebKit){return _4.byId(this.id);}else{return document[this.id+"Embed"];}},setVisible:function(_2b){var _2c=_4.byId(this.id+"Container");if(_2b){_2c.style.position="absolute";_2c.style.visibility="visible";}else{_2c.style.position="absolute";_2c.style.y="-1000px";_2c.style.visibility="hidden";}},center:function(){var _2d=this.width;var _2e=this.height;var _2f=_5.getViewport();var x=_2f.l+(_2f.w-_2d)/2;var y=_2f.t+(_2f.h-_2e)/2;var _30=_4.byId(this.id+"Container");_30.style.top=y+"px";_30.style.left=x+"px";}};_6.flash.Communicator=function(){};_6.flash.Communicator.prototype={_addExternalInterfaceCallback:function(_31){var _32=_4.hitch(this,function(){var _33=new Array(arguments.length);for(var i=0;i<arguments.length;i++){_33[i]=this._encodeData(arguments[i]);}var _34=this._execFlash(_31,_33);_34=this._decodeData(_34);return _34;});this[_31]=_32;},_encodeData:function(_35){if(!_35||typeof _35!="string"){return _35;}_35=_35.replace("\\","&custom_backslash;");_35=_35.replace(/\0/g,"&custom_null;");return _35;},_decodeData:function(_36){if(_36&&_36.length&&typeof _36!="string"){_36=_36[0];}if(!_36||typeof _36!="string"){return _36;}_36=_36.replace(/\&custom_null\;/g,"\x00");_36=_36.replace(/\&custom_lt\;/g,"<").replace(/\&custom_gt\;/g,">").replace(/\&custom_backslash\;/g,"\\");return _36;},_execFlash:function(_37,_38){var _39=_6.flash.obj.get();_38=(_38)?_38:[];for(var i=0;i<_38;i++){if(typeof _38[i]=="string"){_38[i]=this._encodeData(_38[i]);}}var _3a=function(){return eval(_39.CallFunction("<invoke name=\""+_37+"\" returntype=\"javascript\">"+__flash__argumentsToXML(_38,0)+"</invoke>"));};var _3b=_3a.call(_38);if(typeof _3b=="string"){_3b=this._decodeData(_3b);}return _3b;}};_6.flash.Install=function(){};_6.flash.Install.prototype={needed:function(){if(!_6.flash.info.capable){return true;}if(!_6.flash.info.isVersionOrAbove(8,0,0)){return true;}return false;},install:function(){var _3c;_6.flash.info.installing=true;_6.flash.installing();if(_6.flash.info.capable==false){_3c=new _6.flash.Embed(false);_3c.write();}else{if(_6.flash.info.isVersionOrAbove(6,0,65)){_3c=new _6.flash.Embed(false);_3c.write(true);_3c.setVisible(true);_3c.center();}else{alert("This content requires a more recent version of the Macromedia "+" Flash Player.");window.location.href=+_6.flash.Embed.protocol()+"://www.macromedia.com/go/getflashplayer";}}},_onInstallStatus:function(msg){if(msg=="Download.Complete"){_6.flash._initialize();}else{if(msg=="Download.Cancelled"){alert("This content requires a more recent version of the Macromedia "+" Flash Player.");window.location.href=_6.flash.Embed.protocol()+"://www.macromedia.com/go/getflashplayer";}else{if(msg=="Download.Failed"){alert("There was an error downloading the Flash Player update. "+"Please try again later, or visit macromedia.com to download "+"the latest version of the Flash plugin.");}}}}};_6.flash.info=new _6.flash.Info();}}};});