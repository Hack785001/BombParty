javascript:newWords = []; monDico = []; channel.socket.on("winWord", function (acteur) {var lastMot = channel.data.actorsByAuthId[acteur.playerAuthId].lastWord.toUpperCase(); newWords.push(lastMot)}); Array.prototype.unique = function(word1){ return function(){ return this.filter(word1) }}(function(word1,word2,word3){ return word3.indexOf(word1,word2+1) < 0 });function existeounon(testing) { return monDico.indexOf(testing) < 0;}