YUI.add("gallery-sm-editor-style",function(e,t){(function(){var t=1,n=e.Base.create("editorStyle",e.Base,[],{styleCommands:{bold:{property:"fontWeight",valueOn:"bold",valueOff:"normal"},fontName:{property:"fontFamily"},fontSize:{property:"fontSize"},italic:{property:"fontStyle",valueOn:"italic",valueOff:"normal"},underline:{property:"textDecoration",valueOn:"underline",valueOff:"none"}},bold:function(){return this.command("bold","toggle"),this},italic:function(){return this.command("italic","toggle"),this},styles:function(e){var t={},n;if(e)for(n in e)e.hasOwnProperty(n)&&(t[n]=this.command(n,e[n]));else{var r=this.styleCommands;for(n in r)r.hasOwnProperty(n)&&(t[n]=this._queryCommandValue(n))}return t},underline:function(){return this.command("underline","toggle"),this},_cleanNode:function(n,r){function s(o){if(t!==o.get("nodeType"))return;if(o!==n){if(""===o.get("text"))return o.remove(!0);e.Array.each(r,function(e){o.setStyle(e,"")})}o.get("children").each(s);var u=e.Object.some(i,function(e){return""!==o._node.style[e.property]});if(!u){var a=e.Node.create(o.getHTML());o.replace(a).remove(!0),o=a}return o}var i=this.styleCommands;return r=e.Array(r),s(n)},_execCommand:function(n,r){var i=this.styleCommands[n],s=this.selection.range(),o,u;if(!i)return e.Editor.Base.prototype._execCommand.call(this,n,r);if(!s)return;o=s.parentNode(),t!==o.get("nodeType")&&(o=o.ancestor()),o!==this._inputNode&&o.get("text")===s.toString()?u=o:u=s.wrap("<span>"),this.boolCommands[n]&&(this._queryCommandValue(n)?r=this._getStyledAncestor(u,i.property)?i.valueOff:"":r=i.valueOn||r),u.setStyle(i.property,r),u=this._cleanNode(u,i.property),s.startNode(u),s.endNode(u),t===u.get("nodeType")?s.endOffset(u.get("childNodes").size()):s.endOffset(u.get("text").length),this.selection.select(s)},_getStyledAncestor:function(e,n,r){return e.ancestor(function(e){return t!==e._node.nodeType?!1:!!e._node.style[n]},r,this.selectors.input)},_queryCommandValue:function(n){var r=this.styleCommands[n],i=this.selection.range(),s,o,u;return r?(i&&(s=i.shrink().parentNode(),o=s.ancestor(function(e){return t===e.get("nodeType")},!0),u=o.getStyle(r.property),this.boolCommands[n]&&(u=u===r.valueOn)),u):e.Editor.Base.prototype._queryCommandValue.call(this,n)}});e.namespace("Editor").Style=n})()},"@VERSION@",{requires:["node-style","gallery-sm-editor-base"]});
