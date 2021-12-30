import System from "../models/System";

export const getAdminHome = (req, res) => {
    res.render("./admin/adminHome");
}
export const postAdminHome = async (req, res) => {
    const {
        content,type,inUsePlace,createUser,imageUrl
    } = req.body;
    try{
        const system = await System.create({
            content,
            type,
            inUsePlace,
            createUser
        });
        console.log("create System");
        return res.redirect("/")
    } catch (error){
        console.log("adminController postAdminHome ERROR",error);
    }
    res.redirect("/");
}

export const userHomeManage = (req, res) => {
    res.render("./admin/adminUserHome");
};