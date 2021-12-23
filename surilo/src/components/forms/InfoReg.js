import React from 'react';
import "./InfoReg.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./surilo2.png";
import next from "./next.png";
import { useForm }  from "react-hook-form";
    

export default function MultipleInputs(){

    const {register, handleSubmit, formState:{ errors },} = useForm();


    const onSubmit = (data) => {
        console.log(data.password)
        console.log(data.confirmPassword)

        if (data.confirmPassword.match(data.password)){
            document.getElementById("err").innerHTML="Password Matched"
        }else{
            document.getElementById("err").innerHTML="Password not match"
        }
    }


    return (

        <div className='d-flex flex-column justify-content-center align-items-center'>
            
            <div class="logo-cont">
                <img src={logo} alt="Surilo Logo" />
            </div>
            

            <div class="slogan">
                <h1>Just a bit to go</h1>
            </div>

            <hr />

            

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='entry-Ctn'>   
                    <label htmlFor="firstName">First Name</label>
                    <input className='usrEnt' type="text" autoComplete='off' name="firstName" placeholder='Elon' id="firstName" {...register("firstName", {required:true})}  /> 
                    {errors.firstName && <p className='error-msg'>Please enter your First Name</p>}
                </div>
                <div className='entry-Ctn'>   
                    <label htmlFor="lastName">Last Name</label>
                    <input className='usrEnt' type="text" autoComplete='off' name="lastName" placeholder='Musk' id="lastName" {...register("lastName", {required:true})}  /> 
                    {errors.lastName && <p className='error-msg'>Please enter your Last Name</p>}
                </div>
                 

                <div className='entry-Ctn'>   
                    <label htmlFor="dob">Date of birth</label>
                    <input className='usrEnt' type="date" autoComplete='off' name="dob" id="dob" {...register("dob", {required:true})}  /> 
                    {errors.dob && <p className='error-msg'>Please enter your Date of birth</p>}
                </div>      


                <div className='entry-Ctn'>   
                    <label htmlFor="dob">Gender</label>
                    <div className='gender-container'>
                        <div className='g-ctn'>
                            <input type="checkbox" className='gen-chk' name="male" id="maleChk" />
                            <label for="male" className='gen-label'> Male</label>
                        </div>

                        <div className='g-ctn'>
                            <input type="checkbox" className='gen-chk' name="female" id="femaleChk" />
                            <label for="female" className='gen-label'> Female</label>
                        </div>

                        <div className='g-ctn'>
                            <input type="checkbox" className='gen-chk' name="other" id="otherChk" />
                            <label for="other" className='gen-label'> Other</label>
                        </div>
                    </div>

                </div>    

                <div className='regBtn-ctn'>
                    <button className='reg-btn'>Sign up</button>
                    <h6 className='existLabel'>Already have an account? <a href="">Log in</a></h6>
                </div>
                




            </form>

        
        </div>
    )
}


