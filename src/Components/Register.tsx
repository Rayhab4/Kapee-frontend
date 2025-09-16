import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Notify } from 'notiflix';

interface FormData {
    username: string;
    email: string;
    password: string;
}
const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit,reset } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
        try {
            const { username, email, password } = data;
            const formaData = new FormData();
            formaData.append('username', username);
            formaData.append('email', email);
            formaData.append('password', password);

            await axios.post(`http://localhost:5000/api_v1/user/userRegistration`, formaData,
                { headers: { 'Content-Type': 'application/json' } }  
            );

            Notify.success('Registration Successful');
            reset();
            navigate('/login');


        } catch (err) {
            console.log(err);
            Notify.failure('Registration Failed');

        }


    }


    return (
        <form className='flex flex-col gap-4 mt-10 w-[20rem] h-[20rem] pl-20'
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='flex flex-col gap-4'>
                <input
                    type="text"
                    placeholder='username'
                    className="w-[14rem] p-1 border border-solid border-grey rounded-sm"


                    {...register('username', { required: true, maxLength: 20 })}
                />

                <input type="email" placeholder='email' className="w-[14rem] p-1 border border-solid border-grey rounded-sm"
                    {...register('email', { required: true })}

                />
                <input type="password" placeholder='password' className='w-[14rem] p-1 border border-solid border-grey rounded-sm'
                    {...register('password', { required: true })}

                />

            </div>
            <button className='bg-blue-500 rounded-sm text-white p-1 w-[5rem]'
                type="submit">Submit</button>
        </form>


    )
}
export default Register;