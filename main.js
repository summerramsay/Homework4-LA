for(let i = 1000; i >= 0; i-=2) {
    console.log(i)
}

for(let i = 0; i < 10001; i++) {
    if(i === 2500) {
        alert("A quarter of the way there!")
    } else if(i === 5000) {
        alert("Half way there!")
    } else if(i === 10000) {
        alert("The loop is done!")
    }
}

const favoriteShows = ["The Vampire Diaries", "Greys Anatomy", "The Originals", "Gilmore Girls", "Survivor"]
for(let i = favoriteShows.length - 1; i >= 0 ; i--) {
    console.log("My # " + (i + 1) + " favorite tv show is " + favoriteShows[i])
    
}
