import req from "express/lib/request";
import User from "../models/User";

export const getLogin = (req, res) => {
    res.render("./user/login");
}

export const getJoin = (req, res) => {
    res.render("./user/join");
};

export const postJoin = async (req, res ) =>{
    const {
        email,nickName,name,password,socialOnly,location
    } = req.body;

    const exists = await User.exists({
        email
    });
    if(exists){
        console.log("email 중복");
        const errorMessage = "이메일이 중복됩니다.";
        return res.status(400).render("user/join",{ errorMessage })
    }
    try{
        await User.create({
            email,nickName,name,password,socialOnly,location
        });
        console.log("계정 생성 정상");
        return res.redirect("login");
    }catch(error) {
        const errorMessage = "계정생성 오류";
        console.log("계정생성부분 오류",error);
        return res.status(400).render("user/join",{errorMessage})
    }
}