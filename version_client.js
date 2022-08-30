versions=[{name:"apple-version1",
           date:"30/08/2014",
           Type:"major",
           features:["Battery preservation","search"],
           Author:"Steve_jobs",
           Bugs:"Audio"},

        {name:"Kiwi-version3",
        date:"08/01/2001",
        Type:"patch",
        features:["scalable text"],
        Author:"Ronald_wayne",
        Bugs:"Video"},

        {name:"Grapes-version5.F",
        date:"25/07/2017",
        Type:"enhancement",
        features:["Security-By-Design Approach"],
        Author:"Brian Acton ",
        Bugs:"crash button after tap"},
    
        {name:"orange-version2.0",
        date:"30/06/2015",
        Type:"patch",
        features:["Auto Rotation Animation"],
        Author:"Sergey Brin",
        Bugs:"Poor UX Writing practices"},
    
        {name:"Mango-version7.A",
        date:"14/03/1999",
        Type:"enhancement",
        features:["scalable text"],
        Author:"Larry Page",
        Bugs:"Visualization problems"}]
function findByBug(object){
    Bug=versions.filter(n=>n.Bugs.includes(object))
    console.log(`${Bug.length} version have ${object} bugs`)
    console.log(Bug.length,"bugs")
}
findByBug("problems")
