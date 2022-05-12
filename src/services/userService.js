import axios from 'axios';
import { Toast } from 'bootstrap';
import {get, post} from './httpprovider'
import Api from './Api';
/*const usersUrl = 'users'

export async function create(data){
    const res = await post(usersUrl, data)
    
    return res;
}

export async function getAll(params){
    const res = await get(usersUrl, params);
    return res;
}*/
export async function getProfil(id, token)
{
    return Api.get(
        `user/${id}.json`,
    );
}