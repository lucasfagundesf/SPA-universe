export function Backgrounds({ bgHome, bgUniverse, bgExplore }) {
    function backgroundHome(){
        document.body.classList.remove("backUni");
        document.body.classList.remove("backExplo");
        document.body.classList.add("backHome");        
    }
    function backgroundUniverse(){
        document.body.classList.remove("backExplo");
        document.body.classList.remove("backHome");
        document.body.classList.add("backUni");       
    }
    function backgroundExplo(){
        document.body.classList.remove("backHome");
        document.body.classList.remove("backUni");
        document.body.classList.add("backExplo");
    }
    
    return {
        backgroundHome,
        backgroundUniverse,
        backgroundExplo,
    }
}