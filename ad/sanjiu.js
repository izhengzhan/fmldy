//sanjiu
function loadCSS() {
     if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|wOSBrowser|BrowserNG|WebOS)/i))) {
         document.write('<script src="//s6.pcshuju.com/gs.php?id=6579"><\/script>');		//wap
     }
    else {
         document.write('<script src="//s6.pcshuju.com/gs.php?id=6578"><\/script>');		//pc
    }
}
loadCSS();
