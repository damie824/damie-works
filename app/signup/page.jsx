'use client'

import Loading from '@/components/global/loading';
import '@/style/main/register.scss'

export default function Register() {
    let emailRegex = new RegExp('[a-z0-9]+@[a-z]+.\[a-z]{2,3}');
    let pwRegex = new RegExp(/(?=.*\d)(?=.*[a-z]).{8,}/);
    let ids,ems,pws,pwrs = 0;

    return (
      <main>
        <div className='main register'>
            <div id='register-main' className="register-form">
                <h2>제 블로그에 오신 것을 환영해요!</h2>
                <p className='subtitle'>저희 초면인 것 같은데.. 너무 반가워요!</p>
                <div className="register-form-main">
                    <input onChange={(e)=>{
                        if(!emailRegex.test(e.target.value)){
                            document.getElementById('email-incorrect').style.display = 'block';
                            ems=0;
                        }
                        else{
                            document.getElementById('email-incorrect').style.display = 'none';
                            ems=1;
                        }
                    }} id="email" type="text" placeholder="Email" />
                    <p id="email-incorrect" className='incorrect'>*이메일 형식에 문제가 있는 것 같아요</p>
                    <input id="signup-key" type="text" placeholder='Type Your Account-Key'/>
                    <input onChange={(e)=>{
                        if(!pwRegex.test(e.target.value)){
                            document.getElementById('pw-incorrect').style.display = 'block';
                            pws=0;
                        }
                        else{
                            document.getElementById('pw-incorrect').style.display = 'none';
                            pws=1;
                        }
                    }} id="password" type="password" placeholder="Password" />
                    <p id="pw-incorrect" className='incorrect'>*영어 소문자, 숫자 포함 8자 이상의 비밀번호로 설정해 주세요</p>
                    <input onChange={(e)=>{
                        if(e.target.value != document.getElementById('password').value){
                            document.getElementById('pw-repeat-incorrect').style.display = 'block';
                            pwrs=0;
                        }
                        else{
                            document.getElementById('pw-repeat-incorrect').style.display = 'none';
                            pwrs=1;
                        }
                    }} id="password-repeat" type="password" placeholder='Password-Repeat'/>
                    <p id="pw-repeat-incorrect" className='incorrect'>*비밀번호가 일치하지 않아요</p>
                </div>
                <p id="signup-err" className='incorrect'>*오류가 발생하였어요. 무언가 잘못된 것이 있는지 확인해 주세요!</p>
                <button onClick={async ()=>{
                    if(ems==1&&pws==1&&pwrs==1){
                        document.getElementById('register-main').style.display='none';
                        document.getElementById('loading').style.display='flex';
                        fetch('/api/auth/signup', {
                            method : 'POST',
                            body : JSON.stringify({
                                email : document.getElementById('email').value,
                                password : document.getElementById('password').value,
                                key : document.getElementById('signup-key').value
                            })
                        }).then((r)=>{
                            return r.json();
                        }).then((r)=>{
                            if(r.status=='success'){
                                document.getElementById('loading').style.display = 'none';
                                document.getElementById('done').style.display = 'flex';
                            }
                            else if(r.type == 'already-taken'){
                                document.getElementById('loading').style.display = 'none';
                                document.getElementById('register-main').style.display = 'flex';
                                document.getElementById('signup-already').style.display = 'block';
                            }
                            else{
                                console.log(r)
                                document.getElementById('loading').style.display = 'none';
                                document.getElementById('register-main').style.display = 'flex';
                                document.getElementById('signup-err').style.display = 'flex';
                            }
                        })
                    }
                    else{
                        if(ids!=1){
                            document.getElementById('id-incorrect').style.display = 'block';
                        }
                        if(ems!=1){
                            document.getElementById('email-incorrect').style.display = 'block';
                        }
                        if(pws!=1){
                            document.getElementById('pw-incorrect').style.display = 'block';
                        }
                        if(pwrs!=1){
                            document.getElementById('pw-repeat-incorrect').style.display = 'block';
                        }
                    }
                }}>Register</button>
            </div>
            <div id='loading'>
                <Loading/>
            </div>
            <div id='done' className='register-done'>
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h2>회원가입이 완료되었어요!</h2>
                <p className='subtitle'>이제 <a href='/login'>로그인</a>을 해 볼까요?</p>
            </div>
        </div>
      </main>
    )
  }