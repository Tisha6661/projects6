const {spawn} = require("child_process");
const {once} = require("events");

const processPython= (async (pathname,args)=>{
    let obj ={};
    let pyprocess =  spawn('python',[pathname,...args]);
    try {
        console.log("called path: ",pathname);
        async function updateobject(){
            obj = JSON.parse(await once(pyprocess.stdout, 'data'));
            console.log(obj);
        }
        await updateobject();
        // console.log("obj : ",obj);
        return obj;
    }catch(e){
        console.log("error (at JsPythonConnector.js) : ",e.message);
        return "Something went wrong !! ";
    }

})

module.exports.processPython = processPython;

// NOTE: 
// 1. This function (processPython) takes 2 input ,(pathname , argument array) and returns an object
// 2. The object contains the response (print/stdout) of the code executed by the file at the pathname. 