!function e(t,c,i){function r(o,l){if(!c[o]){if(!t[o]){var a="function"==typeof require&&require;if(!l&&a)return a(o,!0);if(n)return n(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var s=c[o]={exports:{}};t[o][0].call(s.exports,function(e){var c=t[o][1][e];return r(c||e)},s,s.exports,e,t,c,i)}return c[o].exports}for(var n="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(e,t,c){t.exports=(()=>{$(".allCheck").on("click",function(){const e=$(this).attr("id").split("-")[1];$("."+e+"-epcheck").prop("checked",$(this).prop("checked"))}),$(".get_more_eps").on("click",function(){const e=$(this).attr("id"),t=$("#allCheck-"+e).prop("checked"),c=$("tr#"+e),i=$(this).data("clicked"),r=$(this).attr("value");i?"Collapse"===r?($("table tr").filter(".show-"+e).hide(),$(this).prop("value","Expand")):"Expand"===r&&($("table tr").filter(".show-"+e).show(),$(this).prop("value","Collapse")):($.getJSON("manage/showSubtitleMissed",{indexer_id:e,whichSubs:$("#selectSubLang").val()},i=>{$.each(i,(i,r)=>{$.each(r,(r,n)=>{c.after($.makeSubtitleRow(e,i,r,n.name,n.subtitles,t))})})}),$(this).data("clicked",1),$(this).prop("value","Collapse"))}),$(".selectAllShows").on("click",()=>{$(".allCheck").each(function(){this.checked=!0}),$('input[class*="-epcheck"]').each(function(){this.checked=!0})}),$(".unselectAllShows").on("click",()=>{$(".allCheck").each(function(){this.checked=!1}),$('input[class*="-epcheck"]').each(function(){this.checked=!1})})})},{}]},{},[1]);
//# sourceMappingURL=subtitle-missed.js.map
