#!/usr/bin/env node
import AdmZip from 'adm-zip';

const zip = new AdmZip();
zip.addLocalFolder('.', '');

const zipBuffer = zip.toBuffer();
const zipBlob = new Blob([zipBuffer], {type: 'application/zip'});
const form  = new FormData();
form.append('project', zipBlob, 'project.zip');

try {
    const response = await fetch('https://oslo-server.onrender.com/deploy', {
        method: 'POST',
        body: form
    });

    const resultText = await response.text();
    console.log(resultText);
    console.log('👉 Website live at: https://oslo-server.onrender.com');
    
} catch (error) {
    console.error('Oslo deployment failed:', error.message);
}