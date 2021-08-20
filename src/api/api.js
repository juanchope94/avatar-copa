import { db } from './../utils/firebase-config';

const ID_DOC_COLLECTION = 'yO9RrIXOg6LJRaDqoAIU'

export const getAvatar = async () =>{
    const avatarPersist = await db.collection('avatar').doc(ID_DOC_COLLECTION).get();
    return avatarPersist
}

export const updateAvatar = async (avatar) =>{
     await db.collection('avatar').doc(ID_DOC_COLLECTION).update(avatar);  
}