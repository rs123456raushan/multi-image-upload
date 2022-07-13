'use strict';

const express = require('express');
const {upload} = require('../helpers/filehelper');
const {singleFileUpload, multipleFileUpload,
     getallSingleFiles, getallMultipleFiles, deleteSingleFileFirst, deleteMultipleFileFirst} = require('../controllers/fileuploaderController');
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload);
router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);
router.get('/getMultipleFiles', getallMultipleFiles);
router.delete('/deleteSingleFiles/:id', deleteSingleFileFirst);
router.delete('/deleteMultipleFiles/:id', deleteMultipleFileFirst);

module.exports = {
    routes: router
}