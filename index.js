function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(shout(string));
}
function logWhisper(string){
    console.log(whisper(string));
}
function sayHiToHeadphonedRoommate(string){
    let a = "I can\'t hear you!";
    let b = "YES INDEED!"
    let c = "I would love to!"
    if(string === whisper(string)){
        return a;
    }
    if(string === shout(string)){
        return b;
    }
    if(string === "Let\'s have dinner together!"){
        return c;
    }

}