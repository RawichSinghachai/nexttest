import { NextApiRequest, NextApiResponse } from 'next';
import { register } from '@/server/controllers/Admin';

export default (req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'POST'){
        register(req,res)
    }
}