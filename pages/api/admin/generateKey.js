import { prismaDB } from "@/util/prisma";

export default async function handler(req, res) {
    let db = await prismaDB;
    try{
        await db.key.create({
            data : {
                used : false
            }
        });

        res.status(200).json({'status' : 'success', 'message' : '새로운 키를 추가했습니다.'});
    }
    catch(e){
        console.log(e)
        res.status(500).json({'status' : 'failed', 'type' : 'unknown', 'message' : '키를 추가하지 못했습니다.', 'log' : e.toString()});
    }
}; 