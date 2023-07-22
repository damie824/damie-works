import sendgrid from "@sendgrid/mail";

export default async function handler(req, res) {
    try{
        if (req.method === "POST") {
            req.body = JSON.parse(req.body);

            sendgrid.setApiKey(process.env.SGAPIKEY);

            await sendgrid.send({
                to: 'booboo4055@gmail.com',
                from: 'noreply@damie.works',
                subject: `${req.body.title} from ${req.body.username}`,
                text: `email: ${req.body.email}\n\ncontent:\n${req.body.content}`,
            })

            console.log('done')

            res.status(200).json({'status' : 'success', 'message' : '이메일 발송을 완료했습니다.'})

        }
        else{
            res.status(500).json({'status' : 'failed', 'type' : 'method-error', 'message' : '해당 api의 요청 방식은 항상 POST여야 합니다.'});
        }
    }
    catch(e){
        console.log(e.response.body.errors)
        res.status(500).json({'status' : 'failed', 'type' : 'unknown', 'message' : '이메일 전송에 실패하였습니다.', 'log' : e.toString()});
    }
}; 