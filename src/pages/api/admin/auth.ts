import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '@/server/controllers/Admin';

export default (req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'POST'){
        auth(req,res)
    }
}