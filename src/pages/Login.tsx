
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyTokent";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {

    const navigate = useNavigate() ;
    const dispatch = useAppDispatch() ;
    const [login] = useLoginMutation() ;
    const {handleSubmit , register} = useForm() ;

    const onSubmit = async (data : FieldValues) => {
        const res = await login(data).unwrap() ;
        if(res?.success){
            toast.success("Login Successfull") ;
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

                <h1 className="text-3xl font-semibold gro text-white my-3">Login</h1>
                <p className="text-xl text-white mb-3 gro">Welcome Back</p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-60">
                    <Input type="email" placeholder="Email" {...register("email")} className="text-white" required/>
                    <Input type="text" placeholder="Password" {...register("password")} className="text-white" required/>
                    <button type="submit" className="flex justify-center items-center gap-2 bg-[#003b95] active:scale-95 duration-300 cursor-pointer text-white px-4 py-1 rounded hover:bg-[#003b95]/80">Login</button>
                </form>

                <p className="white gro text-white my-3">New here ? <Link to={'/register'} className="text-cyan-500 hover:underline duration-150">Register</Link></p>

            </div>

        </div>
    );
};

export default Login;
