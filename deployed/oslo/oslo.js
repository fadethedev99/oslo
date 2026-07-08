import multer from 'multer';
import AdmZip from 'adm-zip';
import express from 'express';
const app = express();

app.use(express.static('deployed'));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/deploy', upload.single('project'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded. Upload a file to deploy.');
    }
    const fileBuffer = req.file.buffer;
    const fileName = req.file.originalname;

    try {
        const zip = new AdmZip(fileBuffer); 
        zip.extractAllTo('./deployed', true);
        return res.send('Deploying complete! Your website is live.');
        
    } catch (error) {
        console.error(error);
        return res.status(500).send('Failed to unzip the project.');
    }
});

app.listen(3000, () => {
    console.log('Oslo Server is running on http://localhost:3000');
});