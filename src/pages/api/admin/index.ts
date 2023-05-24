import { NextApiRequest, NextApiResponse } from 'next';
import { findAdmin } from '@/server/controllers/Admin';

export default (req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'GET'){
        findAdmin(req,res)
    }
}