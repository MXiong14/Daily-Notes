const notes = [ {
id:1,
subject: "Adding properties to objects in Javascript",
date: "June 2nd",
feeling: "Beat up and tired",
timeSpent: "Roughly a hour trying to understand it completely"
}, 

{
    id:2,
    subject: "Learing the push and pull method",
    date: "June 2nd",
    feeling: "This was a little easier so I was feeling okay",
    timeSpent: "30 minutes or so. This was easier to understand"
}
]

const noteAboutToday = {
    id:3,
    subject: "Understanding what my code meant and how to write it fully without any issues",
    date: "June 2nd",
    feeling: "A little discouraged. With time though, I think I will be ok",
    timeSpent: "Roughly 2 days lol"
}

notes.push(noteAboutToday)

for (let x of notes) {
    console.log(`Note ${x.id}
        Subject is ${x.subject}
        Date is ${x.date}
        Feeling is ${x.feeling}
        TimeSpent on it is ${x.timeSpent}
        ---------
        `)
}
