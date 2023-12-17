import bcrypt from "bcrypt"

export const hashpassword = async (password)=>{
    try {
        const saltRounds = 10;
        const hashpassword = await bcrypt.hash(password,saltRounds);
        return  hashpassword;
    } catch (error) {
        console.log(error)
        
    }
};

export const comparePassword = async (password,hashpassword)=>{
    return bcrypt.compare(password,hashpassword)
};