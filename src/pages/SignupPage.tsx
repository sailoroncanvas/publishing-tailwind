import React from 'react';
import { TextField } from '../components/TextField';

export const SignupPage = () => {
  return (
    <div className="m-4">
      <div className="text-2xl font-bold mb-10">회원가입</div>
      <div>
        <TextField label="타이틀" placeholder="내용을 입력해주세요." />
        <div className="mb-4"></div>
        <TextField label="타이틀" placeholder="내용을 입력해주세요." />
        <div className="mb-4"></div>
        <TextField label="타이틀" placeholder="내용을 입력해주세요." />
        <div className="mb-4"></div>
        <TextField label="타이틀" placeholder="내용을 입력해주세요." />
      </div>
      <div>
        <div className="border-2 border-gray-800 rounded-md text-gray-800 text-center py-4 font-semibold mt-7">
          회원가입
        </div>
      </div>
    </div>
  );
};
