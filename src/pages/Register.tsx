
import { Input } from "@/components/ui/input";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyTokent";
import { toast } from "sonner";

const key = import.meta.env.VITE_IMAGE_HOISTING_API_KEY;
const apiUrl = `https://api.imgbb.com/1/upload?key=${key}`;

const Register = () => {
    
    const navigate = useNavigate() ;
    const dispatch = useAppDispatch() ;
    const [registerUser] = useRegisterMutation();
    const {handleSubmit , register} = useForm() ;

    const onSubmit = async (data : FieldValues) => {

        const formData = new FormData();
        formData.append("image", data?.file[0]);

        const { data : imageUrl } = await axios.post(apiUrl, formData, {
        headers: { "content-type": "multipart/form-data" },
        });

        const res = await registerUser({ ...data , profile : imageUrl?.data?.url }).unwrap(); ;
        if(res?.success){
            toast.success("Registration Successfull") ;
            dispatch(setUser({user : verifyToken(res?.data?.accesstoken) , token : res?.data?.accesstoken})) ;
            navigate('/') ;
        }
        else{
            toast.error(res?.message) ;
        }
    };

    return (
        <div className="min-h-screen w-96 flex flex-col items-center justify-center bg-[#0e264a]">

            <div className="flex items-center justify-center flex-col p-5 border rounded-2xl">

                <h1 className="text-3xl font-semibold gro text-white my-3">Register</h1>
                
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-60">
                    <Input type="text" placeholder="Name" {...register("name")} className="text-white" required/>
                    <Input type="email" placeholder="Email" {...register("email")} className="text-white" required/>
                    <Input type="text" placeholder="Password" {...register("password")} className="text-white" required/>
                    <Input accept="image/*" type="file" {...register("file")} className="text-white" required/>
                    <button type="submit" className="flex justify-center items-center gap-2 bg-[#003b95] active:scale-95 duration-300 cursor-pointer text-white px-4 py-1 rounded hover:bg-[#003b95]/80">Register</button>
                </form>

                <p className="white gro text-white my-3">Already have account ? <Link to={'/login'} className="text-cyan-500 hover:underline duration-150">Login</Link></p>

            </div>

        </div>
    );
};

export default Register;
