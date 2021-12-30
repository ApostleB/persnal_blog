import System from "../models/System";
export const home = async (req, res) =>{
    const welcomeWords = await System.findOne({
        type:"words", 
        inUsePlace:"home"
    });
    if(!welcomeWords){
        const defaultWords = {
            content: "안녕하세요 DB",
            type:"welcomeWord",
            inUsePlace: "home",
            createUser:"admin",
            imageUrl:null
        }
        console.log(defaultWords);
        res.render("home", { welcomeWords:defaultWords});
    }
    res.render("home", { welcomeWords });
}