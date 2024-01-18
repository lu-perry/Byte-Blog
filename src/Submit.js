import { useForm } from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import { useRef } from "react";



function Submit() {

    const inputStyle = {
        width: "100%",
        display: "block",
        margin: "auto",
        padding: "5px",
        borderRadius: "15px",
        border: "2px solid #C96480",
        height: "30px",
        fontSize: "15px"
    }

    const labelStyle = {
        display: "block",
        margin: "auto",
        textAlign: "left",
        padding: "5px"
    }

    const schema = yup.object().shape({
        fullName: yup.string().required("Full name is required"),
        username: yup.string().required("Username is required"),
        password: yup.string().required("Password is required"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required("Please confirm your password"),
        email: yup.string().email("Value entered is not an email").required("Email is required"),
        blogTitle: yup.string().required("Blog title is required"),
        summary: yup.string().required("Summary is required"),
        wordCount: yup.number("Value entered is not a number").positive("Word count must be a positive number").integer("Word count must be a whole number").required("Word count is required"),
    });

    // exposing the functions within this object to enable my code to use these keywords and functions 
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });

    const SERVICE_ID = "service_n5thu7s";
    const TEMPLATE_ID = "template_pvjj04j";
    const PUBLIC_KEY = "1lxUT-nBJgOzOZv1I";

    const form = useRef();

    const onSubmit = (data, event) => {
        console.log(event);
        event.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "success",
                    title: "Message Sent Successfully"
        })
        }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    event.target.reset()
    };


    return (
        <div>
            <div style={{width: "100%", height: "40px"}}>
                <div style={{display: "block", textAlign: "center"}}>
                    <h2 style={{fontFamily: "'Rajdhani', sans-serif", color: "white"}}>Submit a Blog Article</h2>
                </div>
                <div style={{display: "block", textAlign: "center"}}>
                <p style={{fontFamily: "'Rajdhani', sans-serif", color: "white"}}>You must register to submit an article: <br />Set a new username and password, followed by details of your blog submission <br />Following submission, you will receive an email confirmation</p>
                </div>
                
            </div>


            <form ref={form} onSubmit={handleSubmit(onSubmit)} style={{width: "50%", margin: "auto", marginTop: "80px", marginBottom: "200px", border: "1px solid lightgray", padding: "50px", backgroundColor: "#2E4756"}}>
                <div style={{display: "block", margin: "auto"}}>
                    <label htmlFor="fullName" style={labelStyle}>Full Name</label>
                    <input {...register("fullName")} type="text" id="fullName" name="fullName" style={inputStyle} />
                    <p>{errors.fullName?.message}</p>
                </div>

                <div style={{display: "block", margin: "auto"}}>
                    <label htmlFor="username" style={labelStyle}>Username</label>
                    <input {...register("username")} type="text" id="username" name="username" style={inputStyle} />
                    <p>{errors.username?.message}</p>
                </div>

                <div style={{display: "block", margin: "auto"}}>
                    <label htmlFor="password" style={labelStyle}>Password</label>
                    <input {...register("password")} type="password" id="password" name="password" style={inputStyle} />
                    <p>{errors.password?.message}</p>
                </div>

                <div style={{display: "block", margin: "auto"}}>
                    <label htmlFor="confirmPassword" style={labelStyle}>Confirm Password</label>
                    <input {...register("confirmPassword")} type="password" id="confirmPassword" name="confirmPassword" style={inputStyle} />
                    <p>{errors.confirmPassword?.message}</p>
                </div>

                <div style={{display: "block", margin: "auto"}}>
                    <label htmlFor="email" style={labelStyle}>Email Address</label>
                    <input {...register("email")} type="email" id="email" name="email" style={inputStyle} />
                    <p>{errors.email?.message}</p>
                </div>

                <div style={{display: "block", margin: "auto"}}>
                    <label htmlFor="blogTitle" style={labelStyle}>Title</label>
                    <input {...register("blogTitle")} type="text" id="blogTitle" name="blogTitle" style={inputStyle} />
                    <p>{errors.blogTitle?.message}</p>
                </div>

                <div style={{display: "block", margin: "auto"}}>
                    <label htmlFor="summary" style={labelStyle}>Summary</label>
                    <input {...register("summary")} type="text" id="summary" name="summary" style={inputStyle} />
                    <p>{errors.summary?.message}</p>
                </div>

                <div style={{display: "block", margin: "auto"}}>
                    <label htmlFor="wordCount" style={labelStyle}>Word Count</label>
                    <input {...register("wordCount")} type="text" id="wordCount" name="wordCount" style={inputStyle} />
                    <p>{errors.wordCount?.message}</p>
                </div>

                <button style={{margin: "auto", display: "grid", alignItems: "center", width: "80%", height: "40px", backgroundColor: "lightblue", color: "black", borderRadius: "15px", border: "none", marginTop: "35px", fontSize: "20px"}}>Submit</button>


            </form>



        </div>



    


    );
};

export default Submit;