(()=>{var a={fallback:"https://G-Zai.github.io/",homes:{en:"https://G-Zai.github.io/","zh-hans":"https://G-Zai.github.io/zh-hans/"}};(()=>{let o=navigator.language||navigator.userLanguage;if(o in a.homes){window.location.href=a.homes[o];return}let n=o.split("-");for(let i in a.homes)if(i.indexOf(n[0])===0){window.location.href=a.homes[i];return}window.location.href=a.fallback})();})();