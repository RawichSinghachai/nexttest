import { NextApiRequest, NextApiResponse } from 'next';
import { login } from '@/server/controllers/Users';

export default (req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'POST'){
        login(req,res)
    }
}