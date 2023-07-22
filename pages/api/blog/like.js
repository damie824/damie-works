import { prismaDB } from "@/util/prisma";

export default async function handler(req, res) {
    let db = await prismaDB;
    try{
        if (req.method === "POST") {
            req.body = JSON.parse(req.body);

            await db.posts.update({
                where : {
                    id : req.body.id
                },
                data: {
                    like : {
                        increment : 1
                    }
                }
            });

            res.status(200).json({'status' : 'success', 'message' : '포스트를 추가하였습니다.'});
        }
        else{
            res.status(500).json({'status' : 'failed', 'type' : 'method-error', 'message' : '해당 api의 요청 방식은 항상 POST여야 합니다.'});
        }
    }
    catch(e){
        console.log(e)
        res.status(500).json({'status' : 'failed', 'type' : 'unknown', 'message' : '포스트를 추가하지 못했습니다.', 'log' : e.toString()});
    }
}; 