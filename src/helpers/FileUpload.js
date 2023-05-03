export const fileUpload = async( file, assets ) => {
    if ( !file ) throw new Error('No tenemos ningúna archivo a subir');

    const cloudUrl = `https://api.cloudinary.com/v1_1/dl6tvllyt/upload`;

    //https://api.cloudinary.com/v1_1/${assets}/dl6tvllyt/upload

    const formData = new FormData();
    formData.append('upload_preset','ASL-img');
    formData.append('file', file );

    try {
 
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });


        if ( !resp.ok ) throw new Error('No se pudo subir imagen')
        const cloudResp = await resp.json();

        return cloudResp.secure_url;

    } catch (error) {
        console.log(error);
        throw new Error( error.message );
    }

}