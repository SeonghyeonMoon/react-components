import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

type FormData = {
	email: string;
	password: string;
};

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		await new Promise((res) => {
			setTimeout(res, 1000);
		});
		alert(JSON.stringify(data));
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<InputBox>
				<Label htmlFor='email'>이메일</Label>
				<Input
					id='email'
					type='text'
					placeholder='이메일'
					isInvalid={!!errors.email}
					{...register('email', {
						required: '이메일을 입력해주세요.',
						pattern: { value: /\S+@\S+\.\S+/, message: '이메일 형식이 아닙니다.' },
					})}
				/>
				{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
			</InputBox>
			<InputBox>
				<Label htmlFor='password'>비밀번호</Label>
				<Input
					id='password'
					type='password'
					placeholder='비밀번호'
					isInvalid={!!errors.password}
					{...register('password', {
						required: '비밀번호를 입력해주세요',
						minLength: {
              value: 8,
              message: '비밀번호는 8자 이상 16자 이하입니다.'
            },
            maxLength: {
              value: 16,
              message: '비밀번호는 8자 이상 16자 이하입니다.'
            }
					})}
				/>
				{errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
			</InputBox>
			<Button disabled={isSubmitting}>로그인</Button>
		</Form>
	);
};

export default Login;

const Form = styled.form`
	width: 500px;
	margin: 500px; ;
`;

const InputBox = styled.div`
	position: relative;
	height: 120px;
`;

const Label = styled.label`
	display: block;
	color: #aaa;
	margin-bottom: 10px;
`;

const Input = styled.input<{ isInvalid: boolean }>`
	display: block;
	padding: 20px;
	width: 100%;
	height: 50px;
	border-radius: 10px;
	border: 1px solid #aaa;
	box-sizing: border-box;
	${({ isInvalid }) => isInvalid && 'border: 1px solid red;'}
	&:focus {
		border: 2px solid #aaa;
		outline: none;
	}
`;

const ErrorMessage = styled.small`
	color: red;
`;

const Button = styled.button`
	margin-top: 10px;
	border: none;
	color: #fff;
  background-color: #aaa;
	width: 100%;
	height: 50px;
	border-radius: 10px;
	box-sizing: border-box;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
  }
`;
