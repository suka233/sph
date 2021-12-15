import { v4 as uuidv4 } from 'uuid';

//如果不存在,则生成一个
if(!localStorage.getItem('sph_uuid')){
    localStorage.setItem('sph_uuid',uuidv4())
}

export default localStorage.getItem('sph_uuid')