import { prismaDB } from "@/util/prisma";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
    let db = await prismaDB;

    try{
        if (req.method === "POST") {
            req.body = JSON.parse(req.body);

            let findKey = await db.key.findUnique({
                where : {
                    id : req.body.key
                }
            });

            console.log(findKey)

            if(!findKey || findKey.used) {
                res.status(500).json({'status' : 'failed', 'type' : 'method-error', 'message' : '키를 찾을 수 없었습니다.'});
                console.log('Caught unknown key value : ' + req.body.key)
                return
            }

            await db.key.update({
                where: {
                    id : req.body.key
                },
                data: {
                    used : true
                }
            });

            const hash = await bcrypt.hash(req.body.password, 15);
            req.body.password = hash;
            
            const userData = {
                email : req.body.email,
                password : req.body.password
            }
            
            await db.user.create({
                data : userData
            });

            res.status(200).json({'status' : 'success', 'message' : '회원가입을 성공하였습니다.'});
        }
        else{
            res.status(500).json({'status' : 'failed', 'type' : 'method-error', 'message' : '해당 api의 요청 방식은 항상 POST여야 합니다.'});
        }
    }
    catch(e){
        res.status(500).json({'status' : 'failed', 'type' : 'unknown', 'message' : '회원가입에 실패하였습니다.', 'log' : e.toString()});
        console.log(e)
    }
}; 