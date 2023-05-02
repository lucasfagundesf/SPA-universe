export function Backgrounds({bgHome, bgUniverse, bgExplore}) {
    function backgroundHome(){
        document.body.classList.add("backHome");
        document.body.classList.remove("backUni");
        document.body.classList.remove("backExplo");
        
    }
    function backgroundUniverse(){
        document.body.classList.remove("backHome");
        document.body.classList.add("backUni");
        document.body.classList.remove("backExplo");
        
    }
    function backgroundExplo(){
        document.body.classList.remove("backHome");
        document.body.classList.remove("backUni");
        document.body.classList.add("backExplo");
    }
    
    return {
        backgroundHome,
        backgroundUniverse,
        backgroundExplo 
    }
}